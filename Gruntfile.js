/*global module:false*/
module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					separateCSS: true,
					out: 'public/app.min.js',
					mainConfigFile: 'public/app.config.js',
					name: 'almond',
					findNestedDependencies: true,
					optimize: 'none',
					stubModules: ['text', 'html'],
					paths: {
						handlebars: 'bower_components/handlebars/handlebars.runtime.amd'
					},
					exclude: ['bower_components/require-css/normalize'],
					include: ['app.start'],
					insertRequire: ['app.start']
				}
			}
		}
	});

	grunt.registerTask('default', [
		'requirejs'
	]);

	grunt.loadNpmTasks('grunt-contrib-requirejs');

};
