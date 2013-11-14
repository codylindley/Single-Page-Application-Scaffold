define(function (require, exports, module) {

	var Backbone = require('backbone');
	var Router = require('router');

	return {
		router: new Router(),
		init: function(){
			Backbone.history.start();
		}
	};

});
