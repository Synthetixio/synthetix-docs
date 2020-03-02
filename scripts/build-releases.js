'use strict';

const axios = require('axios');

const fs = require('fs');
const path = require('path');

const moment = require('moment');

console.log('Building releases page');

(async () => {
	const { data } = await axios.get('https://api.github.com/repos/Synthetixio/synthetix/releases');

	const content = data
		.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
		.filter(({ prerelease }) => !prerelease)
		.map(({ name, tag_name, body, created_at }) => {
			const published = new Date(created_at);
			return `# ${name} (${tag_name})\n\n**Published**: ${moment(published).format(
				'MMM D, YYYY',
			)}\n\n**Codebase**: [${tag_name}](https://github.com/Synthetixio/synthetix/tree/${tag_name})\n\n${
				body ? '> ' + body : ''
			}\n\n-----\n`;
		})
		.join('\n');

	// readmes.forEach(([repo, path, content]) =>
	fs.writeFileSync(
		path.join(__dirname, '..', 'content', 'releases.md'),
		`!!! tip "Notice"\n\t\tImported from https://github.com/Synthetixio/synthetix/releases\n\n${content}`,
	);
	// );
})();
