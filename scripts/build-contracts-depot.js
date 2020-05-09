'use strict';

const fs = require('fs');
const path = require('path');

console.log('Building contracts (depot only for now)');

const astDocs = require('../external/ast-docs.json');
const docsExtra = require('../external/docs-extra.json');

const contract = 'contracts/Depot.sol';

const baseUrl = 'https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/';
const getContractSourceLink = (contractName, name, lineNumber) => {
	return `<sub>[${name}](${baseUrl}${contractName}#L${lineNumber})</sub>`;
};

(async () => {
	const title = contract
		.split('/')
		.slice(-1)[0]
		.replace('.sol', '');

	let content = `# ${title}\n\n`;

	// Description
	if (docsExtra[contract].description) {
		content += '## Description\n\n';
		content += docsExtra[contract].description;
	}

	// Source
	content += `**Source:** [${contract}](${baseUrl}${contract})\n\n`;

	// Architecture
	if (Array.isArray(docsExtra[contract].architecture)) {
		content += '## Architecture\n\n';

		docsExtra[contract].architecture.map(x => {
			content += '---\n\n';
			content += `### ${x.name}\n\n`;
			content += `${x.value}\n\n`;
		});

		if (docsExtra[contract].architecture.length > 0) {
			content += '---\n\n';
		}
	}

	// Related
	if (docsExtra[contract].related) {
		content += '### Related Contracts\n\n';
		content += `${docsExtra[contract].related}\n\n`;
		content += '---\n\n';
	}

	// Libraries
	if (docsExtra[contract].libraries) {
		content += '### Libraries\n\n';
		content += `${docsExtra[contract].libraries}\n\n`;
		content += '---\n\n';
	}

	// Structs
	if (Array.isArray(astDocs[contract].structs)) {
		content += '## Structs\n\n';

		astDocs[contract].structs.map(x => {
			content += '---\n\n';
			content += `### ${x.name}\n`;
			content += `${getContractSourceLink(contract, 'Source', x.lineNumber)}\n\n`;
			content += '| Field | Type | Description |\r\n| ------ | ------ | ------ |\n';

			x.members.map(y => {
				let description;
				try {
					description = docsExtra[contract].structs[x.name][y.name];
				} catch (e) {
					description = 'TBA';
				}

				content += `| ${y.name} | ${y.type} | ${description} |\n`;
			});

			content += '\n';
		});

		if (astDocs[contract].structs.length > 0) {
			content += '---\n\n';
		}
	}

	// Variables
	if (Array.isArray(astDocs[contract].variables)) {
		content += '## Variables\n\n';

		astDocs[contract].variables.map(x => {
			content += '---\n\n';
			content += `### \`${x.name}\`\n`;
			content += `${getContractSourceLink(contract, 'Source', x.lineNumber)}\n\n`;

			if (docsExtra[contract].variables[x.name]) {
				content += `${docsExtra[contract].variables[x.name]}\n\n`;
			}

			content += `**Type:** \`${x.type}\`\n\n`;
			content += `**Visibility:** \`${x.visibility}\`\n\n`;
		});

		if (astDocs[contract].structs.length > 0) {
			content += '---\n\n';
		}
	}

	// Functions
	if (Array.isArray(astDocs[contract].functions)) {
		content += '## Functions\n\n';

		astDocs[contract].functions.map(x => {
			content += '---\n\n';
			content += `### \`${x.name}\`\n`;
			content += `${getContractSourceLink(contract, 'Source', x.lineNumber)}\n\n`;

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

		if (astDocs[contract].functions.length > 0) {
			content += '---\n\n';
		}
	}

	// Modifiers
	if (Array.isArray(astDocs[contract].modifiers)) {
		content += '## Modifiers\n\n';

		astDocs[contract].modifiers.map(x => {
			content += '---\n\n';
			content += `### \`${x.name}\`\n`;
			content += `${getContractSourceLink(contract, 'Source', x.lineNumber)}\n\n`;

			if (x.documentation) {
				content += `${x.documentation}\n\n`;
			}
		});

		if (astDocs[contract].modifiers.length > 0) {
			content += '---\n\n';
		}
	}

	// Events
	if (Array.isArray(astDocs[contract].events)) {
		content += '## Events\n\n';

		astDocs[contract].events.map(x => {
			content += '---\n\n';
			content += `### \`${x.name}\`\n`;
			content += `${getContractSourceLink(contract, 'Source', x.lineNumber)}\n\n`;
			content += `- \`${x.parameters}\`\n\n`;
		});

		if (astDocs[contract].events.length > 0) {
			content += '---\n\n';
		}
	}

	const outputPath = path.join(__dirname, '..', 'content', 'contracts', 'Depot.md');
	fs.writeFileSync(outputPath, content);
})();
