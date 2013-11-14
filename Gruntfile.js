/*global module:false*/
module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					separateCSS: true,
					out: 'public/app.min.js',
					mainConfigFile: 'public/require.config.js',
					name: 'almond',
					findNestedDependencies: true,
					optimize: 'none',
					stubModules: ['text', 'html'],
					paths: {
						handlebars: 'bower_components/handlebars/handlebars.runtime.amd'
					},
					include: ['app']
				}
			}
		}
	});

	grunt.registerTask('default', [
		'requirejs'
	]);

	grunt.loadNpmTasks('grunt-contrib-requirejs');

};
