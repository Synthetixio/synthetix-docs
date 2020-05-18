'use strict';

const fs = require('fs');
const path = require('path');
const md2json = require('md-2-json');

console.log('Building docs...');

const astDocs = require('../external/ast-docs.json');

const baseUrl = 'https://github.com/Synthetixio/synthetix/tree/develop/';
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
		Variables: {},
		Functions: {},
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
			// Source
			const structMdSourceContent = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

			// Table
			let structTableMdContent = '| Field | Type |\r\n| ------ | ------ |\n';
			x.members.map(y => {
				structTableMdContent += `| ${y.name} | ${y.type} |\n`;
			});
			structTableMdContent += '\n\n';

			// So many if/else ... If only we could make this into a monad....
			if (contentJsonMd.Structs[`\`${x.name}\``] === undefined) {
				contentJsonMd.Structs[`\`${x.name}\``] = {};
			}

			// Remove existing <sub>Source</sub> (as we'll insert a new one)
			const curCleanedMd = (contentJsonMd.Structs[`\`${x.name}\``].raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n');

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
		// Only include variables that are in the source code
		const curValidVariables = curAstDocs.variables.map(x => `\`${x.name}\``);
		const invalidVariables = Object.keys(contentJsonMd.Variables).filter(x => !curValidVariables.includes(x));
		invalidVariables.map(x => {
			delete contentJsonMd.Variables[x];
		});

		curAstDocs.variables
			.filter(x => x.visibility !== 'private')
			.map(x => {
				const variableSourceMdContent = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;
				const variableMdContent = `**Type:** \`${x.type}\`\n\n`;

				// So many if/else ... If only we could make this into a monad....
				if (contentJsonMd.Variables[`\`${x.name}\``] === undefined) {
					contentJsonMd.Variables[`\`${x.name}\``] = {};
				}

				// Remove existing <sub>Source</sub> (as we'll insert a new one)
				const curCleanedMd = (contentJsonMd.Variables[`\`${x.name}\``].raw || '')
					.split('\n')
					.filter(x => !x.includes('<sub>'))
					.filter(x => !x.includes('**Type:**'))
					.join('\n');

				// Overwrite new content obtained from AST while injecting
				// in existing rich docs (e.g. description)
				contentJsonMd.Variables[`\`${x.name}\``].raw =
					variableSourceMdContent + curCleanedMd.split('| Field')[0] + variableMdContent;
			});
	} else {
		delete contentJsonMd.Variables;
	}

	// ******************************************** Functions ******************************************** //
	if (contentJsonMd.Functions === undefined) {
		contentJsonMd.Functions = {};
	}

	if (Array.isArray(curAstDocs.functions) && curAstDocs.functions.filter(x => x.visibility !== 'internal').length > 0) {
		// Only include functions that are in the source code
		const curValidFunctions = curAstDocs.functions.map(x => `\`${x.name}\``);
		const invalidFunctions = Object.keys(contentJsonMd.Functions).filter(x => !curValidFunctions.includes(x));
		invalidFunctions.map(x => {
			delete contentJsonMd.Functions[x];
		});

		curAstDocs.functions
			.filter(x => x.visibility !== 'internal')
			.map(x => {
				const functionSourceMdContent = `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

				let functionDetailMdContent = '??? example "Details"\n\n';
				functionDetailMdContent += '    **Signature**\n\n';
				functionDetailMdContent += `    \`${x.signature}\`\n\n`;

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

				// So many if/else ... If only we could make this into a monad....
				if (contentJsonMd.Functions[`\`${x.name}\``] === undefined) {
					contentJsonMd.Functions[`\`${x.name}\``] = {};
				}

				// Remove existing <sub>Source</sub> (as we'll insert a new one)
				const curCleanedMd = (contentJsonMd.Functions[`\`${x.name}\``].raw || '')
					.split('\n')
					.filter(x => !x.includes('<sub>'))
					.join('\n');

				// Overwrite new content obtained from AST while injecting
				// in existing rich docs (e.g. description)
				contentJsonMd.Functions[`\`${x.name}\``].raw =
					functionSourceMdContent + curCleanedMd.split('??? example')[0] + functionDetailMdContent;
			});
	} else {
		delete contentJsonMd.Functions;
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

	// ******************************************** Write to file ******************************************** //
	// Convert to raw and write to file
	// also injects line between each ###
	const rawMdContent = md2json
		.toMd({ [contractName]: contentJsonMd })
		.split('###')
		.join('\n---\n###');

	fs.writeFileSync(outputFilePath, rawMdContent);
};

(() => {
	Object.keys(astDocs).map(contractSource => {
		Object.keys(astDocs[contractSource].contracts).map(contractName => {
			generateContractMarkdown(contractSource, contractName, 'contracts');
		});

		// Object.keys(astDocs[contractSource].libraries).map(contractName => {
		// 	generateContractMarkdown(contractSource, contractName, 'libraries');
		// });

		Object.keys(astDocs[contractSource].interfaces).map(contractName => {
			generateContractMarkdown(contractSource, contractName, 'interfaces');
		});
	});
})();
