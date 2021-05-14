'use strict';

const axios = require('axios');

const fs = require('fs');
const path = require('path');

console.log('Building library pages');

(async () => {
	const repoWorkspace = {
		'js-monorepo': 'packages/contracts-interface/',
	};

	const readmes = await Promise.all(
		['synthetix', 'synthetix-data', 'js-monorepo', 'synthetix-cli', 'synthetix-assets'].map(repo =>
			axios
				.get(`https://raw.githubusercontent.com/Synthetixio/${repo}/master/${repoWorkspace[repo] || ''}README.md`)
				.then(({ data }) => [
					`https://github.com/Synthetixio/${repo}/${repoWorkspace[repo] ? 'tree/master/' + repoWorkspace[repo] : ''}`,
					path.join(__dirname, '..', 'content', 'libraries', `${repo}.md`),
					data,
				]),
		),
	);

	readmes.forEach(([repo, path, content]) =>
		fs.writeFileSync(path, `!!! info "Notice"\n\n    Imported from ${repo}\n\n${content}`),
	);

	// now do synthetix publish script
	await axios
		.get('https://raw.githubusercontent.com/Synthetixio/synthetix/master/publish/README.md')
		.then(({ data }) =>
			fs.writeFileSync(
				path.join(__dirname, '..', 'content', 'contracts', 'publisher.md'),
				'!!! info "Notice"\n\n    This details the `publish` script in the synthetix repository for building, deploying and verifying contracts.\n\n' +
					'    Imported from https://github.com/Synthetixio/synthetix/tree/master/publish\n\n' +
					data,
			),
		);
})();
