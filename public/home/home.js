define(function (require, exports, module) {

	require('css!bootstrapCss');
	require('bootstrapJs');

	var Backbone = require('backbone');

	require('css!./home');
	var template = require('html!./home');

	return Backbone.View.extend({
		el: 'body',
		initialize: function(){

		},
		render: function(){
			this.$el.html(template({}));
		}
	});

});
