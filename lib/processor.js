/*
 * grunt-schema-markup
 * https://github.com/BenPoulson/grunt-schema-markup
 *
 * Copyright (c) 2015 Ben Poulson
 * Licensed under the MIT license.
 */

var definitions = {};
var path = require("path");
var cheerio = require('cheerio');

exports.preprocess = function (grunt, src, options) {

	var contents = grunt.file.read(src);
	var $ = cheerio.load(contents, {
		normalizeWhitespace: false,
		xmlMode: false,
		decodeEntities: false
	});

	$('*').filter(function() {
		for(var k in $(this)[0].attribs) {
			if(k.indexOf("prop-") === 0) {
				$(this).removeAttr(k);
				$(this).attr('itemprop', k.replace('prop-', ''));
			} else if(k.indexOf("schema-") === 0) {
				$(this).removeAttr(k);
				$(this).attr('itemscope', '');
				$(this).attr('itemtype', 'http://schema.org/' + k.replace('schema-', ''));
			}
		} 
	});

	contents = $.html().replace(/\=\"\"/g, 	'');

	return contents;
};