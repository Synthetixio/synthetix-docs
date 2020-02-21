'use strict';

const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(file => /^build-/.test(file));

for (const file of files) {
	require(path.join(__dirname, file));
}
