/*
 * grunt-schema-markup
 * https://github.com/BenPoulson/grunt-schema-markup
 *
 * Copyright (c) 2015 Ben Poulson
 * Licensed under the MIT license.
 */

var definitions = {};
var path = require("path");

exports.setContext = function (context, grunt) {
	definitions = context;
	grunt.verbose.write("\nOverwriting the complete definitions context..\n".yellow);
	for (var prop in context)
		grunt.verbose.write("Setting definition " + prop.cyan + " to " + context[prop].cyan + "\n");
	grunt.verbose.write("\n");
};

exports.preprocess = function (grunt, src, options) {
	var contents = grunt.file.read(src);
	contents = contents.replace(/schema-([a-zA-Z]*)(\s*)/g, 	'itemscope itemtype="http://schema.org/$1"$2');
	contents = contents.replace(/prop-([a-zA-Z]*)(\s*)/g, 		'itemprop="$1"$2');
	grunt.verbose.write(contents);
};