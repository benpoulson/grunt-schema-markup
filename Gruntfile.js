/*
 * grunt-schema-markup
 * https://github.com/BenPoulson/grunt-schema-markup
 *
 * Copyright (c) 2015 Ben Poulson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		clean: {
			tests: ['tmp']
		},
		schema_markup: {
			default: {
				options: {
				},
				files: [
					{ src: 'test/src/testing.html', dest: 'test/dest/' }
				]
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['clean', 'schema_markup']);

};
