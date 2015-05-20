({
	appDir: 'app/',
	baseUrl: 'js/',
	paths: {
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone'
	},
	shim: {
		'underscore': {
			deps: [],
			exports: '_'
		},
    	'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
    	}
	},
  	dir: 'build/',
  	modules: [{ 
  		name: 'main'
  	}]
})