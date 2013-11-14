define(function (require, exports, module) {

	require('css!/css/home');

	var Backbone = require('backbone');
	var template = require('html!templates/home');

	return Backbone.View.extend({
		el: 'body',
		initialize: function(){

		},
		render: function(){
			this.$el.html(template({}));
		}
	});

});
