'use strict';

const axios = require('axios');

const fs = require('fs');
const path = require('path');

console.log('Building library pages');

(async () => {
  const readmes = await Promise.all(
    ['synthetix', 'synthetix-data', 'synthetix-js'].map(repo =>
      axios
        .get(
          `https://raw.githubusercontent.com/Synthetixio/${repo}/master/README.md`
        )
        .then(({ data }) => [
          `https://github.com/Synthetixio/${repo}`,
          path.join(__dirname, '..', 'content', 'libraries', `${repo}.md`),
          data
        ])
    )
  );

  readmes.forEach(([repo, path, content]) =>
    fs.writeFileSync(
      path,
      `!!! info "Notice"\n\t\tImported from ${repo}\n\n${content}`
    )
  );
})();
