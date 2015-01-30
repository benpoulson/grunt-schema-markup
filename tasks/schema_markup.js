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
		
		this.files.forEach(function(file) {

			if (file.dest && !fs.existsSync(file.dest)) {
				grunt.log.error("Please make sure that your chosen destination exists!");
				grunt.log.error("Folder:\t" + file.dest);
				throw new Error();
			}

			file.src.forEach(function (src) {
				if(grunt.file.isFile(src)) {
					var preprocessed = processor.preprocess(grunt, src, {}); 
					grunt.verbose.write("Writing result to " + (file.dest + path.basename(src)).cyan + "...");
					grunt.file.write(file.dest + path.basename(src), preprocessed);
				}
			});
		});
	});
};
