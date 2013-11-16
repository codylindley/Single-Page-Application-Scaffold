define(function (require, exports, module) {

	require('bootstrapJs');
//	require('css!bootstrapCss');
	require('css!./app');

	var Backbone = require('backbone');
	var Router = require('app.router');

	return {
		router: new Router(),
		init: function(){
			Backbone.history.start();
		}
	};

});
