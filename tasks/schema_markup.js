/*
 * grunt-schema-markup
 * https://github.com/BenPoulson/grunt-schema-markup
 *
 * Copyright (c) 2015 Ben Poulson
 * Licensed under the MIT license.
 */

'use strict';

var fs = require("fs");
var path = require("path");
var processor = require("../lib/processor.js");

module.exports = function(grunt) {
	grunt.registerMultiTask('schema_markup', 'A HTML preprocessor for markup schema', function() {
		var options = this.options({});
		processor.setContext(options.context, grunt);
		this.files.forEach(function(file) {
			file.src.forEach(function (src) {
				if(grunt.file.isFile(src)) {
					var preprocessed = processor.preprocess(grunt, src, {}); 
				}
			});
		});
	});
};
