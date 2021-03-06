requirejs.config({
	paths: {
		bootstrapCss: 'bower_components/bootstrap/dist/css/bootstrap',
		bootstrapJs: 'bower_components/bootstrap/dist/js/bootstrap',
		jquery: 'bower_components/jquery/jquery',
		underscore: 'bower_components/lodash/dist/lodash',
		backbone: 'bower_components/backbone/index',
		text: 'bower_components/requirejs-text/text',
		handlebars: 'bower_components/handlebars/handlebars.amd',
		html: 'bower_components/requirejs-handlebars/requirejs-handlebars',
		almond: 'bower_components/almond/almond',
		css: 'bower_components/require-css/css',
		normalize: 'bower_components/require-css/normalize',
		'css-builder': 'bower_components/require-css/css-builder'
	},
	shim: {
		'bootstrapJs': ['jquery']
	},
	map: {
		'*': {
			'css': 'css'
		}
	}
});
