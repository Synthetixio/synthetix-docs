// Originally from https://github.com/ajithr/md-2-json
// Had to modify it to fix code indentation
'use strict';

const marked = require('marked');
const traverse = require('traverse');

function parse(mdContent) {
	let aligned = getAlignedContent(mdContent);
	let json = marked.lexer(aligned);
	let currentHeading,
		tableContent,
		codeContent,
		headings = [],
		isOrdered = true,
		text,
		para,
		ordered,
		orderedDepth = 1;
	let output = json.reduce(function(result, item) {
		switch (item.type) {
			case 'heading':
				if (!currentHeading || item.depth == 1) {
					headings = [];
					result[item.text] = {};
					currentHeading = result[item.text];
					headings.push(item.text);
				} else {
					let parentHeading = getParentHeading(headings, item, result);
					headings = parentHeading.headings;
					currentHeading = parentHeading.parent;
					currentHeading[item.text] = {};
					currentHeading = currentHeading[item.text];
				}
				break;
			case 'list':
				text = item.items.map(x => x.raw).join('\n');
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + text : text;
				break;
			case 'list_start':
				isOrdered = item.ordered;
				orderedDepth = item.start;
				break;
			case 'list_end':
				if (currentHeading.raw) {
					currentHeading.raw = checkNextLine(currentHeading.raw);
				}
				break;
			case 'text':
				if (isOrdered) {
					ordered = orderedDepth + '. ';
					orderedDepth++;
				} else {
					ordered = '- ';
				}
				text = ordered + item.text + '\n';
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + text : text;
				break;
			case 'html':
				if (!currentHeading) {
					currentHeading = result;
				}
				para = checkNextLine(item.text);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + para : para;
				break;
			case 'table':
				tableContent = getTableContent(item);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + tableContent : tableContent;
				break;
			case 'code':
				codeContent = getCodeContent(item);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + codeContent : codeContent;
				break;
			case 'space':
				if (currentHeading) {
					currentHeading.raw = currentHeading.raw ? currentHeading.raw + '\n' : '\n';
				}
				break;
			case 'paragraph':
				if (!currentHeading) {
					currentHeading = result;
				}
				para = checkNextLine(item.text);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + para : para;
				break;
			default:
				break;
		}
		return result;
	}, {});
	return output;
}
exports.parse = parse;

function getAlignedContent(mdContent) {
	let headings = mdContent.match(/(?:\r\n)#.*$/gm);
	if (!headings) {
		return mdContent;
	}
	for (let i = 0; i < headings.length; i++) {
		let heading = headings[i].trim();
		let propHeading = new RegExp('(?:\r\n){2}' + heading + '.*$', 'mg');
		if (!mdContent.match(propHeading)) {
			let wrongHeading = new RegExp('(?:\r\n)' + heading + '.*$', 'mg');
			mdContent = mdContent.replace(wrongHeading, '\r\n\r\n' + heading);
		}
	}
	return mdContent;
}

function getParentHeading(headings, item, result) {
	let parent,
		index = item.depth - 1;
	let currentHeading = headings[index];
	if (currentHeading) {
		headings.splice(index, headings.length - index);
	}
	headings.push(item.text);
	for (let i = 0; i < index; i++) {
		if (!parent) {
			parent = result[headings[i]];
		} else {
			parent = parent[headings[i]];
		}
	}
	return {
		headings: headings,
		parent: parent,
	};
}

function getTableContent(item) {
	let tableHeader = '',
		tableContent = '',
		separator = '';
	for (let i = 0; i < item.header.length; i++) {
		tableHeader += item.header[i] + ' | ';
	}
	for (let i = 0; i < item.align.length; i++) {
		switch (item.align[i]) {
			case 'right':
				separator += '--:|';
				break;
			case 'left':
				separator += ':--|';
				break;
			case 'center':
				separator += ':-:|';
				break;
			default:
				separator += '---|';
				break;
		}
	}
	for (let i = 0; i < item.cells.length; i++) {
		let cells = item.cells[i];
		for (let j = 0; j < cells.length; j++) {
			tableContent += cells[j] + ' | ';
		}
		let sep = i !== item.cells.length - 1 ? '| ' : '';
		tableContent += '\n' + sep;
	}
	return '| ' + tableHeader + '\n|' + separator + '\n| ' + tableContent + '\n';
}

function getCodeContent(item) {
	let content = item.text
		.split('\n')
		.map(x => `    ${x}`)
		.join('\n');
	return checkNextLine([content].join('\n'));
}

function checkNextLine(mdText) {
	if (mdText && !mdText.endsWith('\n\n')) {
		mdText += '\n\n';
	}
	return mdText;
}

function toMd(jsonObject) {
	let mdText = '';
	traverse(jsonObject).reduce(function(acc, value) {
		if (this.isLeaf && this.key === 'raw') {
			mdText += value;
		} else {
			mdText += getHash(this.level) + ' ' + this.key + '\n\n';
		}
		return;
	});
	return mdText;
}
exports.toMd = toMd;

function getHash(level) {
	let hash = '';
	for (let i = 0; i < level; i++) {
		hash += '#';
	}
	return hash;
}
