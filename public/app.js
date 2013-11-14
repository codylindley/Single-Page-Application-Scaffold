define(function (require, exports, module) {

	var Backbone = require('backbone');
	var Router = require('app.router');

	return {
		router: new Router(),
		init: function(){
			Backbone.history.start();
		}
	};

});
