'use strict';

const fs = require('fs');
const path = require('path');

console.log('Building contracts');

const astDocs = require('../external/ast-docs.json');
const docsExtra = require('../external/en-docs-extra.json');

const baseUrl = 'https://github.com/Synthetixio/synthetix/tree/develop/';
const getContractSourceLink = (contractName, name, lineNumber) => {
	return `<sub>[${name}](${baseUrl}${contractName}#L${lineNumber})</sub>`;
};

// Ad-hoc functions to extract out values from dictionary
const e2 = (source, k1, k2, d = {}) => {
	try {
		return source[k1][k2];
	} catch (e) {
		return d;
	}
};

const e3 = (source, k1, k2, k3, d = {}) => {
	try {
		return source[k1][k2][k3];
	} catch (e) {
		return d;
	}
};

// Function to generate the inheritance graph
// Basically, for a contract, we keep going through each of their inheritance
// and purge away the parent contracts from the current inheritance
const getInheritanceGraph = (source, name) => {
	const { contracts, imports } = astDocs[source];
	const { inherits } = contracts[name];

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

	// Recursively get each contract
	return {
		[name]: directInheritsWithSource
			.map(x => getInheritanceGraph(x.source, x.name))
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

const generateContractMarkdown = (contractSource, contractName) => {
	// Extract out relevant information
	const curExtraDocs = e2(docsExtra, contractSource, contractName);
	const curAstDocs = e3(astDocs, contractSource, 'contracts', contractName);

	// Start building out the markdown file
	const title = contractName;

	let content = `# ${title}\n\n`;

	// Description
	if (curExtraDocs.description) {
		content += '## Description\n\n';
		content += curExtraDocs.description;
	}

	// Source
	content += `**Source:** [${contractSource}](${baseUrl}${contractSource})\n\n`;

	// Architecture
	const graph = getInheritanceGraph(contractSource, contractName);
	const graphMd = formatInheritanceGraphToMermaidMd(graph);
	const graphHasInheritance = Object.keys(graph[Object.keys(graph)[0]]).length > 0;

	if (graphHasInheritance) {
		content += '## Architecture\n\n';
		content += `### Inheritance Graph\n\n`;
		content += `${'```'}mermaid\n`;
		content += 'graph TD\n';
		content += graphMd;
		content += `${'```'}\n\n`;
	}

	if (Array.isArray(curExtraDocs.architecture)) {
		curExtraDocs.architecture.map(x => {
			content += '---\n\n';
			content += `### ${x.name}\n\n`;
			content += `${x.value}\n\n`;
		});
	}

	if (graphHasInheritance) {
		content += '---\n\n';
	}

	// Related
	if (curExtraDocs.related) {
		content += '### Related Contracts\n\n';
		content += `${curExtraDocs.related}\n\n`;
		content += '---\n\n';
	}

	// Libraries
	if (curExtraDocs.libraries) {
		content += '### Libraries\n\n';
		content += `${curExtraDocs.libraries}\n\n`;
		content += '---\n\n';
	}

	// Structs
	if (Array.isArray(curAstDocs.structs)) {
		content += '## Structs\n\n';

		curAstDocs.structs.map(x => {
			content += '---\n\n';
			content += `### ${x.name}\n`;
			content += `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;
			content += '| Field | Type | Description |\r\n| ------ | ------ | ------ |\n';

			x.members.map(y => {
				let description;
				try {
					description = curExtraDocs.structs[x.name][y.name];
				} catch (e) {
					description = 'TBA';
				}

				content += `| ${y.name} | ${y.type} | ${description} |\n`;
			});

			content += '\n';
		});

		if (curAstDocs.structs.length > 0) {
			content += '---\n\n';
		}
	}

	// Variables
	if (Array.isArray(curAstDocs.variables)) {
		content += '## Variables\n\n';

		curAstDocs.variables
			.filter(x => x.visibility !== 'private')
			.map(x => {
				content += '---\n\n';
				content += `### \`${x.name}\`\n`;
				content += `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

				if (e2(curExtraDocs, 'variables', x.name, false)) {
					content += `${curExtraDocs.variables[x.name]}\n\n`;
				}

				content += `**Type:** \`${x.type}\`\n\n`;
			});

		if (curAstDocs.structs.length > 0) {
			content += '---\n\n';
		}
	}

	// Functions
	if (Array.isArray(curAstDocs.functions)) {
		content += '## Functions\n\n';

		curAstDocs.functions
			.filter(x => x.visibility !== 'internal')
			.map(x => {
				content += '---\n\n';
				content += `### \`${x.name}\`\n`;
				content += `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

				if (x.documentation) {
					content += `${x.documentation}\n\n`;
				}

				content += '??? example "Details"\n\n';
				content += '    **Signature**\n\n';
				content += `    \`${x.signature}\`\n\n`;

				if (x.modifiers.length > 0) {
					content += '    **Modifiers**\n\n';
				}

				// Header links need to be lowercased for some reason....
				x.modifiers.map(y => {
					content += `    * [${y}](#${y.toLowerCase()})\n\n`;
				});

				if (x.events.length > 0) {
					content += '    **Emits**\n\n';
				}
				x.events.map(y => {
					content += `    * [${y}](#${y.toLowerCase()})\n\n`;
				});
			});

		if (curAstDocs.functions.length > 0) {
			content += '---\n\n';
		}
	}

	// Modifiers
	if (Array.isArray(curAstDocs.modifiers)) {
		content += '## Modifiers\n\n';

		curAstDocs.modifiers.map(x => {
			content += '---\n\n';
			content += `### \`${x.name}\`\n`;
			content += `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;

			if (x.documentation) {
				content += `${x.documentation}\n\n`;
			}
		});

		if (curAstDocs.modifiers.length > 0) {
			content += '---\n\n';
		}
	}

	// Events
	if (Array.isArray(curAstDocs.events)) {
		content += '## Events\n\n';

		curAstDocs.events.map(x => {
			content += '---\n\n';
			content += `### \`${x.name}\`\n`;
			content += `${getContractSourceLink(contractSource, 'Source', x.lineNumber)}\n\n`;
			content += `- \`${x.parameters}\`\n\n`;
		});

		if (curAstDocs.events.length > 0) {
			content += '---\n\n';
		}
	}

	const outputPath = path.join(__dirname, '..', 'content', 'contracts', `${contractName}.md`);
	fs.writeFileSync(outputPath, content);
};

(async () => {
	Object.keys(astDocs).map(contractSource => {
		Object.keys(astDocs[contractSource].contracts).map(contractName => {
			generateContractMarkdown(contractSource, contractName);
		});
	});
})();
