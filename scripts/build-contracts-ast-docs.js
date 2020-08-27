'use strict';

const fs = require('fs');
const path = require('path');
const md2json = require('./md-2-json');
const YAML = require('yaml');
const { gray } = require('chalk');
const snx = require('synthetix');

const astDocs = snx.getAST();
const { version } = require('./utils');

const baseUrl = `https://github.com/Synthetixio/synthetix/tree/v${version()}/`;

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
	const acc = input => {
		let content = '';
		Object.keys(input).map(k1 => {
			Object.keys(input[k1]).map(k2 => {
				content += `    ${k1}[${k1}] --> ${k2}[${k2}]\n`;
			});

			content += acc(input[k1]);
		});
		return content;
	};
	return `
\`\`\`mermaid
graph TD
${acc(graph)}
\`\`\`
`;
};

const generateContractMarkdown = (contractSource, contractName, contractKind) => {
	console.log(gray('\t- processing', contractName));
	// Output folder for markdown files
	const outputDir = path.join(__dirname, '..', 'content', 'contracts', 'source', contractKind);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir);
	}
	const outputFilePath = path.join(outputDir, `${contractName}.md`);

	// Existing documentation will either be empty,
	// or read from a file.
	// contentJsonMd is markdown in JSON format
	const contractBody = {
		Description: {},
		Architecture: {
			Libraries: {},
			'Inheritance Graph': {},
			'Related Contracts': {},
		},
		Structs: {},
		Constants: {},
		Variables: {},
		Constructor: {},
		Views: {},
		'Restricted Functions': {},
		'Internal Functions': {},
		'External Functions': {},
		'Fallback Function': {},
		Modifiers: {},
		Events: {},
	};

	// existing content is a clone of the propose
	let existingContent = Object.assign({}, contractBody); // default is a clone
	let existingEntries = {};

	// if existing file, then load in structure
	if (fs.existsSync(outputFilePath)) {
		const rawMd = fs.readFileSync(outputFilePath);
		const curMdJson = md2json.parse(rawMd.toString());
		const mdJsonKeys = Object.keys(curMdJson);

		if (mdJsonKeys.length > 1) {
			console.log(`WARNING: ${contractName} has multiple H1 headers`);
		}

		if (mdJsonKeys.length > 0) {
			existingContent = curMdJson[mdJsonKeys[0]];

			// now collect all individual entries and push
			for (const entry of Object.values(existingContent)) {
				Object.entries(entry)
					.filter(([key]) => /^`/.test(key))
					.forEach(([key, value]) => {
						existingEntries[key.replace(/`/g, '')] = value;
					});
			}
		}
	}

	// parse new AST docs
	const curAstDocs = Object.assign(
		{
			variables: [],
			libraries: [],
			structs: [],
			functions: [],
			modifiers: [],
			events: [],
		},
		e3(astDocs, contractSource, contractKind, contractName),
	);

	// ******************************************** Description ******************************************** //
	// Include Source into existing description
	const sourceLink = `\n**Source:** [${contractSource}](${baseUrl}${contractSource})`;
	const existingDesc = ((existingContent.Description || {}).raw || '').split('**Source:**')[0];
	contractBody.Description.raw = [existingDesc, sourceLink].join('\n\n') + '\n\n';

	// ******************************************** Architecture ******************************************** //
	const graph = getInheritanceGraph(contractSource, contractName, contractKind);
	const graphMd = formatInheritanceGraphToMermaidMd(graph);
	const graphHasInheritance = Object.keys(graph[Object.keys(graph)[0]]).length > 0;

	// Architecture's inheritance graph
	if (graphHasInheritance) {
		contractBody.Architecture['Inheritance Graph'].raw = graphMd + '\n\n';
	} else {
		delete contractBody.Architecture['Inheritance Graph'];
	}

	if (curAstDocs.libraries.length) {
		const librariesMd = curAstDocs.libraries.reduce(
			(memo, { name, type }) => memo + `- [${name}](/contracts/source/libraries/${name}) for \`${type}\`\n`,
			'',
		);

		contractBody.Architecture['Libraries'].raw = librariesMd + '\n\n';
	} else {
		// remove this explicitly as it's nested
		delete contractBody.Architecture['Libraries'];
	}

	if (existingContent.Architecture && (existingContent.Architecture['Related Contracts'] || {}).raw) {
		contractBody.Architecture['Related Contracts'].raw = existingContent.Architecture['Related Contracts'].raw;
	} else {
		delete contractBody.Architecture['Related Contracts'];
	}

	const combineEntries = ({ entries, combiner }) => {
		const sortByName = (a, b) => (a.name > b.name ? 1 : -1);

		return entries.sort(sortByName).reduce((memo, entry) => {
			const { name } = entry;
			const escapedKey = `\`${name}\``;
			memo[escapedKey] = memo[escapedKey] || {};
			memo[escapedKey].raw =
				combiner(
					Object.assign(entry, {
						existingEntry: existingEntries[name],
					}),
				) + '\n\n';

			return memo;
		}, {});
	};

	const getContractSourceLink = lineNumber => {
		return `<sub>[Source](${baseUrl}${contractSource}#L${lineNumber})</sub>`;
	};

	const variableCombiner = ({ lineNumber, type, existingEntry = {} }) => {
		// Remove existing <sub>Source</sub> (as we'll insert a new one)
		const strippedContent = (existingEntry.raw || '')
			.split('\n')
			.filter(x => !x.includes('<sub>'))
			.filter(x => !x.includes('**Type:**'))
			.join('\n')
			// Take everything before a potential table
			.split('| Field')[0];

		const sourceLink = getContractSourceLink(lineNumber);
		const typeDetails = `**Type:** \`${type}\``;

		return [sourceLink, strippedContent, typeDetails].join('\n\n');
	};

	// Now process entries for each section

	contractBody.Constants = combineEntries({
		entries: curAstDocs.variables.filter(({ constant, visibility }) => constant && visibility === 'public'),
		combiner: variableCombiner,
	});

	contractBody.Variables = combineEntries({
		entries: curAstDocs.variables.filter(({ constant, visibility }) => !constant && visibility === 'public'),
		combiner: variableCombiner,
	});

	contractBody.Structs = combineEntries({
		entries: curAstDocs.structs,
		combiner({ lineNumber, members, existingEntry = {} }) {
			const strippedContent = (existingEntry.raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n');

			const [existingDesc, existingTable] = strippedContent.split('| Field');

			// Ad-hoc function to extract out existing description
			const getExistingDescription = name => {
				try {
					const existingRow = existingTable
						.split('\n')
						.filter(x => x.includes('|'))
						.filter(x => x.split('|')[1].replace(/\s|`/g, '') === name)[0];

					return existingRow.split('|').slice(-2)[0].trim();
				} catch (e) {
					return 'TBA';
				}
			};

			// Struct fields table
			const table = members
				.reduce(
					(memo, member) =>
						memo.concat(`| \`${member.name}\` | \`${member.type}\` | ${getExistingDescription(member.name)} |`),
					['| Field | Type | Description |', '| ------ | ------ | ------  |'],
				)
				.join('\n');

			const sourceLink = getContractSourceLink(lineNumber);

			return [sourceLink, existingDesc, table].join('\n\n');
		},
	});

	// Categorize the various functions
	const constructorFunc = curAstDocs.functions.filter(x => x.name === 'constructor');
	const fallbackFunc = curAstDocs.functions
		.filter(({ name }) => name === 'fallback')
		.map(entry => {
			entry.name = '() (fallback function)';
			return entry;
		});
	const viewFuncs = curAstDocs.functions.filter(
		x =>
			(x.stateMutability === 'view' || x.stateMutability === 'pure') &&
			(x.visibility === 'external' || x.visibility === 'public'),
	);
	const internalFuncs = curAstDocs.functions.filter(x => x.visibility === 'internal' && x.name !== 'constructor');
	const restrictedFuncs = curAstDocs.functions.filter(
		x => x.modifiers.find(modifier => /only/.test(modifier)) || x.requires.find(req => /requireAccess/.test(req.name)),
	);

	// Already declared functions will be ignored
	const alreadyDeclaredFunctions = [constructorFunc, fallbackFunc, viewFuncs, internalFuncs, restrictedFuncs]
		.reduce((acc, entry) => acc.concat(entry), [])
		.map(x => x.name);

	// Remaining functions
	const externalFncs = curAstDocs.functions.filter(
		({ name, visibility }) => !alreadyDeclaredFunctions.includes(name) && visibility !== 'private',
	);

	const functionCombiner = ({
		name,
		lineNumber,
		signature,
		visibility,
		stateMutability,
		returns,
		requires = [],
		events,
		modifiers,
		existingEntry = {},
	}) => {
		const functionSourceMdContent = `${getContractSourceLink(lineNumber)}\n\n`;

		let functionDetailMdContent = '??? example "Details"\n\n';

		functionDetailMdContent += '    **Signature**\n\n';
		functionDetailMdContent += `    \`${signature}${returns !== '()' ? ` returns ${returns}` : ''}\`\n\n`;

		functionDetailMdContent += '    **Visibility**\n\n';
		functionDetailMdContent += `    \`${visibility}\`\n\n`;

		functionDetailMdContent += '    **State Mutability**\n\n';
		functionDetailMdContent += `    \`${stateMutability}\`\n\n`;

		// Requires
		functionDetailMdContent += requires.length ? '    **Requires**\n\n' : '';
		for (const requireEntry of requires) {
			functionDetailMdContent += `    * [${requireEntry.name}](${baseUrl}${contractSource}#L${requireEntry.lineNumber})\n\n`;
		}

		// Modifiers in function
		if (name !== 'constructor') {
			functionDetailMdContent += modifiers.length ? '    **Modifiers**\n\n' : '';
			for (const modifierEntry of modifiers) {
				functionDetailMdContent += `    * [${modifierEntry}](#${modifierEntry.toLowerCase()})\n\n`;
			}
		}

		// Events in functions
		functionDetailMdContent += events.length ? '    **Emits**\n\n' : '';

		for (const evt of events) {
			functionDetailMdContent += `    * [${evt}](#${evt.toLowerCase()})\n\n`;
		}

		// Remove existing <sub>Source</sub> (as we'll insert a new one)
		const existingDesc = (existingEntry.raw || '')
			.split('\n')
			.filter(x => !x.includes('<sub>'))
			.join('\n')
			.split('??? example')[0];

		return [functionSourceMdContent, existingDesc, functionDetailMdContent].join('\n\n');
	};

	contractBody.Constructor = combineEntries({
		entries: constructorFunc,
		combiner: functionCombiner,
	});

	contractBody.Views = combineEntries({
		entries: viewFuncs,
		combiner: functionCombiner,
	});

	contractBody['Restricted Functions'] = combineEntries({
		entries: restrictedFuncs,
		combiner: functionCombiner,
	});

	contractBody['Internal Functions'] = combineEntries({
		entries: internalFuncs,
		combiner: functionCombiner,
	});

	contractBody['External Functions'] = combineEntries({
		entries: externalFncs,
		combiner: functionCombiner,
	});

	contractBody['Fallback Function'] = combineEntries({
		entries: fallbackFunc,
		combiner: functionCombiner,
	});

	contractBody.Modifiers = combineEntries({
		entries: curAstDocs.modifiers,
		combiner({ name, lineNumber, parameters, existingEntry = {} }) {
			const sourceLink = getContractSourceLink(lineNumber);

			const exisingDesc = (existingEntry.raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n')
				.split('- ')[0]
				.split('**Signature')[0];

			return [sourceLink, exisingDesc]
				.concat(parameters.length > 2 ? `**Signature**: \`${name}${parameters}\`` : [])
				.join('\n\n');
		},
	});

	contractBody.Events = combineEntries({
		entries: curAstDocs.events,
		combiner({ lineNumber, name, parameters, existingEntry = {} }) {
			const sourceLink = getContractSourceLink(lineNumber);

			const exisingDesc = (existingEntry.raw || '')
				.split('\n')
				.filter(x => !x.includes('<sub>'))
				.join('\n')
				.split('- ')[0]
				.split('**Signature')[0];

			return [sourceLink, exisingDesc, `**Signature**: \`${name}${parameters}\``].join('\n\n');
		},
	});

	// ******************************************** Write to file ******************************************** //
	// Remove unused sections
	const contractBodyTrimmed = Object.entries(contractBody)
		.filter(([, entry]) => JSON.stringify(entry) !== '{}')
		.reduce((memo, [key, val]) => {
			memo[key] = val;
			return memo;
		}, {});

	// Convert to raw and write to file
	const rawMdContent = md2json.toMd({ [contractName]: contractBodyTrimmed });

	// Do we build in place, or do we build a preview?
	if (process.argv.includes('--overwrite')) {
		fs.writeFileSync(outputFilePath, rawMdContent);
	} else {
		fs.writeFileSync(`${outputFilePath}.preview`, rawMdContent);
	}
};

(() => {
	// Builds new files into content/contracts and content/interfaces
	console.log(gray('Building ast-docs...'));

	Object.entries(astDocs).forEach(([contractSource, entry]) => {
		['contracts', 'libraries', 'interfaces'].forEach(contractType =>
			Object.keys(entry[contractType]).forEach(contractName => {
				generateContractMarkdown(contractSource, contractName, contractType);
			}),
		);
	});

	// Updates mkdocs.yml
	console.log(gray('Updating mkdocs.yml ...'));
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
	const contracts = getYamlContent(
		path.join(__dirname, '../content/contracts/source/contracts'),
		'contracts/source/contracts',
	);
	const libraries = getYamlContent(
		path.join(__dirname, '../content/contracts/source/libraries'),
		'contracts/source/libraries',
	);
	const interfaces = getYamlContent(
		path.join(__dirname, '../content/contracts/source/interfaces'),
		'contracts/source/interfaces',
	);

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

	const scEntryInYAML = mkdocsYAML.nav[0].Menu.find(entry => 'Smart Contracts' in entry);
	const srcEntryInYAML = scEntryInYAML['Smart Contracts'].find(entry => 'Source' in entry);
	srcEntryInYAML['Source'] = { Contracts: contracts, Interfaces: interfaces, Libraries: libraries };

	// We don't want !!python to be quoted
	// Unfortunately a hacky patch :(
	const newMkDocsYaml = YAML.stringify(mkdocsYAML).replace(`"${pythonSuperFenceFormat}"`, pythonSuperFenceFormat);
	fs.writeFileSync(mkdocsFileLoc, newMkDocsYaml);
})();
