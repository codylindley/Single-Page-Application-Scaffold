define(function (require, exports, module) {

	var Backbone = require('backbone');

	return Backbone.Router.extend({
		routes: {
			'': 'home'
		},
		home: function(){

			require(['home/home'], function(Home){

				var home = new Home();
				home.render();

			});

		}
	});

});
