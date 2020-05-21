// Originally from https://github.com/ajithr/md-2-json
// Had to modify it to fix code indentation
/* eslint-disable */

'use strict';

var marked = require('marked');
var traverse = require('traverse');

var parse = function(mdContent) {
	var aligned = getAlignedContent(mdContent);
	var json = marked.lexer(aligned);
	var currentHeading,
		headings = [],
		isOrdered = true,
		orderedDepth = 1;
	var output = json.reduce(function(result, item, index, array) {
		switch (item.type) {
			case 'heading':
				if (!currentHeading || item.depth == 1) {
					headings = [];
					result[item.text] = {};
					currentHeading = result[item.text];
					headings.push(item.text);
				} else {
					var parentHeading = getParentHeading(headings, item, result);
					headings = parentHeading.headings;
					currentHeading = parentHeading.parent;
					currentHeading[item.text] = {};
					currentHeading = currentHeading[item.text];
				}
				break;
			case 'list':
				var text = item.items.map(x => x.raw).join('\n');
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + text : text;
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
					var ordered = orderedDepth + '. ';
					orderedDepth++;
				} else {
					var ordered = '- ';
				}
				var text = ordered + item.text + '\n';
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + text : text;
				break;
			case 'html':
				if (!currentHeading) {
					currentHeading = result;
				}
				var para = checkNextLine(item.text);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + para : para;
				break;
			case 'table':
				var tableContent = getTableContent(item);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + tableContent : tableContent;
				break;
			case 'code':
				var codeContent = getCodeContent(item);
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
				var para = checkNextLine(item.text);
				currentHeading.raw = currentHeading.raw ? currentHeading.raw + para : para;
				break;
			default:
				break;
		}
		return result;
	}, {});
	return output;
};
exports.parse = parse;

function getAlignedContent(mdContent) {
	var headings = mdContent.match(/(?:\r\n)#.*$/gm);
	if (!headings) {
		return mdContent;
	}
	for (var i = 0; i < headings.length; i++) {
		var heading = headings[i].trim();
		var propHeading = new RegExp('(?:\r\n){2}' + heading + '.*$', 'mg');
		if (!mdContent.match(propHeading)) {
			var wrongHeading = new RegExp('(?:\r\n)' + heading + '.*$', 'mg');
			mdContent = mdContent.replace(wrongHeading, '\r\n\r\n' + heading);
		}
	}
	return mdContent;
}

function getParentHeading(headings, item, result) {
	var parent,
		index = item.depth - 1;
	var currentHeading = headings[index];
	if (currentHeading) {
		headings.splice(index, headings.length - index);
	}
	headings.push(item.text);
	for (var i = 0; i < index; i++) {
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
	var tableHeader = '',
		tableContent = '',
		separator = '';
	for (var i = 0; i < item.header.length; i++) {
		tableHeader += item.header[i] + ' | ';
	}
	for (var i = 0; i < item.align.length; i++) {
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
	for (var i = 0; i < item.cells.length; i++) {
		var cells = item.cells[i];
		for (var j = 0; j < cells.length; j++) {
			tableContent += cells[j] + ' | ';
		}
		var sep = i !== item.cells.length - 1 ? '| ' : '';
		tableContent += '\n' + sep;
	}
	return '| ' + tableHeader + '\n|' + separator + '\n| ' + tableContent + '\n';
}

function getCodeContent(item) {
	var content = item.text
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
	var mdText = '';
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
	var hash = '';
	for (var i = 0; i < level; i++) {
		hash += '#';
	}
	return hash;
}
