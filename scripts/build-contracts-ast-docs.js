'use strict';

const fs = require('fs');
const path = require('path');
const md2json = require('./md-2-json');
const YAML = require('yaml');
const snx = require('synthetix');

const astDocs = snx.getAST();
const { version } = require('./utils');

const baseUrl = `https://github.com/Synthetixio/synthetix/tree/v${version()}/`;
const getContractSourceLink = (contractName, name, lineNumber) => {
	return `<sub>[${name}](${baseUrl}${contractName}#L${lineNumber})</sub>`;
};

// Ad-hoc functions to extract out values from dictionary
const e3 = (source, k1, k2, k3, d = {}) => {
	try {
		return source[k1][k2][k3] || d;
	} catch (e) {
		return d;
	}
};

// Function to generate the inheritance graph
// Basically, for a contract, we keep going through each of their inheritance
// and purge away the parent contracts from the current inheritance
const getInheritanceGraph = (source, name, contractKind) => {
	const { imports } = astDocs[source];
	const { inherits } = astDocs[source][contractKind][name];

	// If we're not inheriting from any contract
	// this is the final destination
	if (inherits.length === 0) {
		return { [name]: {} };
	}

	// Get Inheritance's inheritances
	const inheritImports = inherits
		.map(i1 => {
			return imports
				.map(i2 => {
					if (e3(astDocs, i2, 'contracts', i1, false)) {
						return astDocs[i2].contracts[i1].inherits;
					}
					return [];
				})
				.reduce((acc, x) => Array.prototype.concat(acc, x), []);
		})
		.reduce((acc, x) => Array.prototype.concat(acc, x), []);
	const uniqueInheritImports = [...new Set(inheritImports)];

	// Purge out parent's inheritance
	// i.e. We only care about direct inheritance
	const directInherits = inherits.filter(x => !uniqueInheritImports.includes(x));

	// Get source contract (relevant to the inherit contract)
	const directInheritsWithSource = directInherits
		.map(i1 => {
			return imports
				.map(i2 => {
					if (e3(astDocs, i2, 'contracts', i1, false)) {
						return {
							source: i2,
							name: i1,
						};
					}
					return {};
				})
				.filter(x => Object.keys(x).length !== 0);
		})
		.reduce((acc, x) => Array.prototype.concat(acc, x), []);

	// Recursively get each contract's inheritance
	return {
		[name]: directInheritsWithSource
			.map(x => getInheritanceGraph(x.source, x.name, contractKind))
			.reduce((acc, x) => {
				return { ...acc, ...x };
			}, {}),
	};
};

// Format the graph into mermaid markdown
const formatInheritanceGraphToMermaidMd = graph => {
	let content = '';

	Object.keys(graph).map(k1 => {
		Object.keys(graph[k1]).map(k2 => {
			content += `    ${k1}[${k1}] --> ${k2}[${k2}]\n`;
		});

		content += formatInheritanceGraphToMermaidMd(graph[k1]);
	});

	return content;
};

const generateContractMarkdown = (contractSource, contractName, contractKind) => {
	// Output folder for markdown files
	const outputDir = path.join(__dirname, '..', 'content', contractKind);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}
	const outputFilePath = path.join(outputDir, `${contractName}.md`);

	// Existing documentation will either be empty,
	// or read from a file.
	// contentJsonMd is markdown in JSON format
	let contentJsonMd = {
		Description: {},
		Architecture: {},
		Structs: {},
		Constants: {},
		Variables: {},
		Modifiers: {},
		Events: {},
	};
	if (fs.existsSync(outputFilePath)) {
		const rawMd = fs.readFileSync(outputFilePath);
		const curMdJson = md2json.parse(rawMd.toString());
		const mdJsonKeys = Object.keys(curMdJson);

		if (mdJsonKeys.length > 1) {
			console.log(`WARNING: ${contractName} has multiple H1 headers`);
		}

		if (mdJsonKeys.length > 0) {
			contentJsonMd = curMdJson[mdJsonKeys[0]];
		}
	}
	const curAstDocs = e3(astDocs, contractSource, contractKind, contractName);

	// ******************************************** Description ******************************************** //
	// Include Source into existing description
	if (contentJsonMd.Description === undefined) {
		contentJsonMd.Description = {};
	}
	const sourceMd = `\n**Source:** [${contractSource}](${baseUrl}${contractSource})\n\n`;
	contentJsonMd.Description.raw = (contentJsonMd.Description.raw || '').split('**Source:**')[0] + sourceMd;

	// ******************************************** Architecture ******************************************** //
	const graph = getInheritanceGraph(contractSource, contractName, contractKind);
	const graphMd = formatInheritanceGraphToMermaidMd(graph);
	const graphHasInheritance = Object.keys(graph[Object.keys(graph)[0]]).length > 0;

	// Architecture's inheritance graph
	if (contentJsonMd.Architecture === undefined) {
		contentJsonMd.Architecture = {};
	}

	if (graphHasInheritance) {
		let mermaidGraphMdContent = '';
		mermaidGraphMdContent += `${'```'}mermaid\n`;
		mermaidGraphMdContent += 'graph TD\n';
		mermaidGraphMdContent += graphMd;
		mermaidGraphMdContent += `${'```'}\n\n`;

		if (contentJsonMd.Architecture['Inheritance Graph'] === undefined) {
			contentJsonMd.Architecture['Inheritance Graph'] = {};
		}

		contentJsonMd.Architecture['Inheritance Graph'].raw = mermaidGraphMdContent;
	}

	if (curAstDocs.libraries && curAstDocs.libraries.length > 0) {
		if (contentJsonMd.Architecture['Libraries'] === undefined) {
			contentJsonMd.Architecture['Libraries'] = {};
		}

		let librariesMd = '';
		curAstDocs.libraries.map(x => {
			librariesMd += `- [${x.name}](/libraries/${x.name}) for \`${x.type}\`\n`;
		});

		if (curAstDocs.libraries.length > 0) {
			librariesMd += '\n';
		}

		contentJsonMd.Architecture['Libraries'].raw = librariesMd;
	}

	if (Object.keys(contentJsonMd.Architecture).length === 0) {
		delete contentJsonMd.Architecture;
	}

	// ******************************************** Structs ******************************************** //
	if (contentJsonMd.Structs === undefined) {
		contentJsonMd.Structs = {};
	}

	if (Array.isArray(curAstDocs.structs) && curAstDocs.structs.length > 0) {
		// Only include structs that are in the source code
		const curValidStructs = curAstDocs.structs.map(x => `\`${x.name}\``);
		const invalidStructs = Object.keys(contentJsonMd.Structs).filter(x => !curValidStructs.includes(x));
		invalidStructs.map(x => {
			delete contentJsonMd.Structs[x];
		});

		// Inject in struct tables and source
		curAstDocs.structs.map(x => {
			// So many if/else ... If only we could make this into a monad....
			if (contentJsonMd.Structs[`\`${x.name}\``] === undefined) {
				contentJsonMd.Structs[`\`${x.name}\``] = {};
			}

			// Remove existing <sub>Source</sub> (as we'll insert a new one)
			const curCleanedMd = (contentJsonMd.Structs[`\`${x.name}\``].raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n');

			// Source
			const structMdSourceContent = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

			// Ad-hoc function to extract out existing description
			const getExistingDescription = name => {
				try {
					const existingRow = curCleanedMd
						.split('| Field')[1]
						.split('\n')
						.filter(x => x.includes('|'))
						.filter(x => {
							return (
								x
									.split('|')[1]
									.split(' ')
									.join('') === name
							);
						})[0];

					return existingRow
						.split('|')
						.slice(-2)[0]
						.trim();
				} catch (e) {
					return 'TBA';
				}
			};

			// Table
			let structTableMdContent = '| Field | Type | Description |\r\n| ------ | ------ | ------ |\n';
			x.members.map(y => {
				structTableMdContent += `| ${y.name} | ${y.type} | ${getExistingDescription(y.name)} |\n`;
			});
			structTableMdContent += '\n\n';

			// Overwrite new content obtained from AST while injecting
			// in existing rich docs (e.g. description)
			contentJsonMd.Structs[`\`${x.name}\``].raw =
				structMdSourceContent + curCleanedMd.split('| Field')[0] + structTableMdContent;
		});
	} else {
		delete contentJsonMd.Structs;
	}

	// ******************************************** Variables ******************************************** //
	if (contentJsonMd.Variables === undefined) {
		contentJsonMd.Variables = {};
	}

	if (Array.isArray(curAstDocs.variables) && curAstDocs.variables.length > 0) {
		const genHeadingsFromVariables = (varHeadingName, vars) => {
			if (vars.length === 0) {
				delete contentJsonMd[varHeadingName];
				return;
			}

			if (contentJsonMd[varHeadingName] === undefined) {
				contentJsonMd[varHeadingName] = {};
			}

			// Only include variables that are in the source code
			const curValidVariables = vars.map(x => `\`${x.name}\``);
			const invalidVariables = Object.keys(contentJsonMd[varHeadingName]).filter(x => !curValidVariables.includes(x));
			invalidVariables.map(x => {
				delete contentJsonMd[varHeadingName][x];
			});

			vars.map(x => {
				if (contentJsonMd[varHeadingName][`\`${x.name}\``] === undefined) {
					contentJsonMd[varHeadingName][`\`${x.name}\``] = {};
				}

				// Remove existing <sub>Source</sub> (as we'll insert a new one)
				const curCleanedMd = (contentJsonMd[varHeadingName][`\`${x.name}\``].raw || '')
					.split('\n')
					.filter(x => !x.includes('<sub>'))
					.filter(x => !x.includes('**Type:**'))
					.join('\n');

				const variableSourceMdContent = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;
				const variableMdContent = `**Type:** \`${x.type}\`\n\n`;

				// Overwrite new content obtained from AST while injecting
				// in existing rich docs (e.g. description)
				contentJsonMd[varHeadingName][`\`${x.name}\``].raw =
					variableSourceMdContent + curCleanedMd.split('| Field')[0] + variableMdContent;
			});
		};

		const constantVars = curAstDocs.variables.filter(x => x.constant);
		const otherVars = curAstDocs.variables.filter(x => !x.constant);

		genHeadingsFromVariables('Constants', constantVars);
		genHeadingsFromVariables('Variables', otherVars);
	}

	// ******************************************** Functions ******************************************** //
	if (Array.isArray(curAstDocs.functions) && curAstDocs.functions.length > 0) {
		// Ad-hoc function to create headings from functions
		// e.g. View, Restrictive Functions (Owner), Restrictive Functions (Oracle), etc
		const genHeadingsFromFunctions = (funcHeadingName, funcs) => {
			if (funcs.length === 0) {
				delete contentJsonMd[funcHeadingName];
				return;
			}

			// So many if/else ... If only we could make this into a monad....
			if (contentJsonMd[funcHeadingName] === undefined) {
				contentJsonMd[funcHeadingName] = {};
			}

			// Only include functions that are in the source code
			const curValidFunctions = funcs.map(x => `\`${x.name}\``);
			const invalidFunctions = Object.keys(contentJsonMd[funcHeadingName]).filter(x => !curValidFunctions.includes(x));
			invalidFunctions.map(x => {
				delete contentJsonMd[funcHeadingName][x];
			});

			funcs.map(x => {
				const functionSourceMdContent = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

				let functionDetailMdContent = '??? example "Details"\n\n';
				functionDetailMdContent += '    **Signature**\n\n';
				functionDetailMdContent += `    \`${x.signature}\`\n\n`;

				functionDetailMdContent += '    **State Mutability**\n\n';
				functionDetailMdContent += `    \`${x.stateMutability}\`\n\n`;

				// Requires
				if (x.requires.length > 0) {
					functionDetailMdContent += '    **Requires**\n\n';
				}
				x.requires.map(y => {
					functionDetailMdContent += `    * [${y.name}](${baseUrl}${contractSource}#L${y.lineNumber})\n\n`;
				});

				// Modifiers in function
				if (x.modifiers.length > 0) {
					functionDetailMdContent += '    **Modifiers**\n\n';
				}
				x.modifiers.map(y => {
					functionDetailMdContent += `    * [${y}](#${y.toLowerCase()})\n\n`;
				});

				// Events in functions
				if (x.events.length > 0) {
					functionDetailMdContent += '    **Emits**\n\n';
				}
				x.events.map(y => {
					functionDetailMdContent += `    * [${y}](#${y.toLowerCase()})\n\n`;
				});

				if (contentJsonMd[funcHeadingName][`\`${x.name}\``] === undefined) {
					contentJsonMd[funcHeadingName][`\`${x.name}\``] = {};
				}

				// Remove existing <sub>Source</sub> (as we'll insert a new one)
				const curCleanedMd = (contentJsonMd[funcHeadingName][`\`${x.name}\``].raw || '')
					.split('\n')
					.filter(x => !x.includes('<sub>'))
					.join('\n');

				// Overwrite new content obtained from AST while injecting
				// in existing rich docs (e.g. description)
				contentJsonMd[funcHeadingName][`\`${x.name}\``].raw =
					functionSourceMdContent + curCleanedMd.split('??? example')[0] + functionDetailMdContent;
			});
		};

		// Filter out functions
		const constructorFunc = curAstDocs.functions.filter(x => x.name === 'constructor');
		const fallbackFunc = curAstDocs.functions
			.filter(x => x.name === 'fallback')
			.map(x => {
				x.name = '() (fallback function)';
				return x;
			});
		const viewFuncs = curAstDocs.functions.filter(x => x.visibility === 'view');
		const internalFuncs = curAstDocs.functions.filter(x => x.visibility === 'internal');
		const onlyOwnerFuncs = curAstDocs.functions.filter(x => x.modifiers.includes('onlyOwner'));
		const onlyOracleFuncs = curAstDocs.functions.filter(x => x.modifiers.includes('onlyOracle'));

		// Already declared functions will be ignored
		const alreadyDeclaredFunctions = [
			constructorFunc,
			fallbackFunc,
			viewFuncs,
			internalFuncs,
			onlyOwnerFuncs,
			onlyOracleFuncs,
		]
			.reduce((acc, x) => Array.prototype.concat(acc, x), [])
			.map(x => x.name);

		// Misc functions
		const leftoverFunctions = curAstDocs.functions.filter(x => !alreadyDeclaredFunctions.includes(x.name));

		// Delete existing headings
		const headingsAndFunctions = [
			['Function (Constructor)', constructorFunc],
			['Function (Fallback)', fallbackFunc],
			['Functions (View)', viewFuncs],
			['Functions (Internal)', internalFuncs],
			['Functions (onlyOwner)', onlyOwnerFuncs],
			['Functions (onlyOracle)', onlyOracleFuncs],
			['Functions', leftoverFunctions],
		];

		// Generate function heading
		headingsAndFunctions.map(([h, f]) => {
			genHeadingsFromFunctions(h, f);
		});
	}

	// ******************************************** Modifiers ******************************************** //
	if (contentJsonMd.Modifiers === undefined) {
		contentJsonMd.Modifiers = {};
	}

	if (Array.isArray(curAstDocs.modifiers) && curAstDocs.modifiers.length > 0) {
		curAstDocs.modifiers.map(x => {
			const modifierSourceMd = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

			// So many if/else ... If only we could make this into a monad....
			if (contentJsonMd.Modifiers[`\`${x.name}\``] === undefined) {
				contentJsonMd.Modifiers[`\`${x.name}\``] = {};
			}

			// Remove existing <sub>Source</sub> (as we'll insert a new one)
			const curCleanedMd = (contentJsonMd.Modifiers[`\`${x.name}\``].raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n');

			// Overwrite new content obtained from AST while injecting
			// in existing rich docs (e.g. description)
			contentJsonMd.Modifiers[`\`${x.name}\``].raw = modifierSourceMd + curCleanedMd;
		});
	} else {
		delete contentJsonMd.Modifiers;
	}

	// ******************************************** Events ******************************************** //
	if (contentJsonMd.Events === undefined) {
		contentJsonMd.Events = {};
	}

	if (Array.isArray(curAstDocs.events) && curAstDocs.events.length > 0) {
		curAstDocs.events.map(x => {
			const eventSourceMd = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;
			const eventParamMd = `- \`${x.parameters}\`\n\n`;

			// So many if/else ... If only we could make this into a monad....
			if (contentJsonMd.Events[`\`${x.name}\``] === undefined) {
				contentJsonMd.Events[`\`${x.name}\``] = {};
			}

			// Remove existing <sub>Source</sub> (as we'll insert a new one)
			const curCleanedMd = (contentJsonMd.Events[`\`${x.name}\``].raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n');

			// Overwrite new content obtained from AST while injecting
			// in existing rich docs (e.g. description)
			contentJsonMd.Events[`\`${x.name}\``].raw = eventSourceMd + curCleanedMd.split('- ')[0] + eventParamMd;
		});
	} else {
		delete contentJsonMd.Events;
	}

	// ******************************************** Sort ******************************************** //
	// Sort each sub heading
	// Unfortunately Object sorting is depending on the order
	// they're inserted in. And because we're reading from existing state
	// we can't just inject
	const sortableH2s = ['Constants', 'Variables', 'Structs', 'Modifiers', 'Events'];
	const functionH2s = 'Function';
	Object.keys(contentJsonMd)
		.filter(h2 => sortableH2s.includes(h2) || h2.includes(functionH2s))
		.map(h2 => {
			let temp = {};

			Object.keys(contentJsonMd[h2])
				.sort((a, b) => {
					const aL = a.toLowerCase();
					const bL = b.toLowerCase();

					return aL === bL ? 0 : aL > bL ? 1 : -1;
				})
				.map(h3 => {
					temp = { ...temp, ...{ [h3]: contentJsonMd[h2][h3] } };
				});

			contentJsonMd[h2] = temp;
		});

	// Sorted contentJson
	let contentJsonMdSorted = {};

	// Make sure structure like Description, Architecture, etc stays in the same spot
	Object.keys(contentJsonMd)
		.filter(h2 => !(sortableH2s.includes(h2) || h2.includes(functionH2s)))
		.map(h2 => {
			contentJsonMdSorted = { ...contentJsonMdSorted, ...{ [h2]: contentJsonMd[h2] } };
		});

	// Otherwise sort everything else according to this order
	// "Structs", 'Constants", "Variables", "Modifiers", "Functions", "Events"
	// IF they exist in the heading
	sortableH2s
		.filter(x => !x.toLowerCase().includes('events'))
		.filter(x => Object.keys(contentJsonMd).includes(x))
		.map(h2 => {
			contentJsonMdSorted = { ...contentJsonMdSorted, ...{ [h2]: contentJsonMd[h2] } };
		});

	// Add function headings
	Object.keys(contentJsonMd)
		.filter(h2 => h2.includes(functionH2s))
		.sort((a, b) => {
			const aL = a.toLowerCase();
			const bL = b.toLowerCase();

			return aL === bL ? 0 : aL > bL ? 1 : -1;
		})
		.map(h2 => {
			contentJsonMdSorted = { ...contentJsonMdSorted, ...{ [h2]: contentJsonMd[h2] } };
		});

	// Insert Events at the end
	if (Object.keys(contentJsonMd).includes('Events')) {
		contentJsonMdSorted = { ...contentJsonMdSorted, ...{ Events: contentJsonMd.Events } };
	}

	// ******************************************** Write to file ******************************************** //
	// Convert to raw and write to file
	// also injects line between each ###
	const rawMdContent = md2json
		.toMd({ [contractName]: contentJsonMdSorted })
		.split('\n###')
		.join('\n---\n###');

	fs.writeFileSync(outputFilePath, rawMdContent);
};

(() => {
	// Builds new files into content/contracts and content/interfaces
	console.log('Building ast-docs...');
	Object.keys(astDocs).map(contractSource => {
		Object.keys(astDocs[contractSource].contracts).map(contractName => {
			generateContractMarkdown(contractSource, contractName, 'contracts');
		});

		Object.keys(astDocs[contractSource].libraries).map(contractName => {
			generateContractMarkdown(contractSource, contractName, 'libraries');
		});

		Object.keys(astDocs[contractSource].interfaces).map(contractName => {
			generateContractMarkdown(contractSource, contractName, 'interfaces');
		});
	});

	// Updates mkdocs.yml
	console.log('Updating mkdocs.yml ...');
	const mkdocsFileLoc = path.join(__dirname, '../mkdocs.yml');
	const mkdocsYAML = YAML.parse(fs.readFileSync(mkdocsFileLoc, 'utf8'));

	// Get all files in folder and massage them into a yaml format list
	const getYamlContent = (absDir, relDir) => {
		// Only get files which are uppercase by default
		// and ends in a .md file
		const files = fs
			.readdirSync(absDir)
			.filter(x => x.slice(-3) === '.md')
			.filter(x => x[0] === x[0].toUpperCase());

		return files.map(x => {
			const title = x.split('.')[0];
			const relativeFilePath = `${relDir}/${x}`;
			return {
				[title]: relativeFilePath,
			};
		});
	};
	const contracts = getYamlContent(path.join(__dirname, '../content/contracts'), 'contracts');
	const libraries = getYamlContent(path.join(__dirname, '../content/libraries'), 'libraries');
	const interfaces = getYamlContent(path.join(__dirname, '../content/interfaces'), 'interfaces');

	// Some bug with YAML parsing...
	// it doesn't like !!python as a value
	// So we have to manually specify it here, (no easy custom schema yet...)
	const pythonSuperFenceFormat = '!!python/name:pymdownx.superfences.fence_div_format';
	for (let i = 0; i < mkdocsYAML.markdown_extensions.length; i++) {
		const cur = mkdocsYAML.markdown_extensions[i];
		if (cur['pymdownx.superfences']) {
			mkdocsYAML.markdown_extensions[i]['pymdownx.superfences']['custom_fences'][0].format = pythonSuperFenceFormat;
		}
	}

	for (let i = 0; i < mkdocsYAML.nav.length; i++) {
		const cur = mkdocsYAML.nav[i];

		if (cur['Smart Contracts']) {
			const sc = cur['Smart Contracts'];

			for (let j = 0; j < sc.length; j++) {
				if (sc[j].Contracts) {
					mkdocsYAML.nav[i]['Smart Contracts'][j].Contracts = contracts;
				}

				if (sc[j].Interfaces) {
					mkdocsYAML.nav[i]['Smart Contracts'][j].Interfaces = interfaces;
				}

				if (sc[j].Libraries) {
					mkdocsYAML.nav[i]['Smart Contracts'][j].Libraries = libraries;
				}
			}
		}
	}

	// We don't want !!python to be quoted
	// Unfortunately a hacky patch :(
	const newMkDocsYaml = YAML.stringify(mkdocsYAML).replace(`"${pythonSuperFenceFormat}"`, pythonSuperFenceFormat);
	fs.writeFileSync(mkdocsFileLoc, newMkDocsYaml);
})();
