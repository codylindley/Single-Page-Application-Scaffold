define(function (require, exports, module) {

	var Backbone = require('backbone');
	var template = require('html!templates/home');

	return Backbone.View.extend({
		el: 'body',
		initialize: function(){
			console.log(template({}));
		},
		render: function(){
			this.$el.html(template({}));
		}
	});

});
