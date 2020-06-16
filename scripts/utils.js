'use strict';

const fs = require('fs');
const path = require('path');

const snxPackageJSON = path.join(__dirname, '..', 'node_modules', 'synthetix', 'package.json');

module.exports = {
	version() {
		return JSON.parse(fs.readFileSync(snxPackageJSON)).version;
	},

	date() {
		return fs.statSync(snxPackageJSON).mtime;
	},
};
