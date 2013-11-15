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
					optimize: 'uglify2',
					stubModules: ['text', 'html', 'css'],
					paths: {
						handlebars: 'bower_components/handlebars/handlebars.runtime.amd'
					},
					exclude: ['normalize', 'css-builder'],
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
