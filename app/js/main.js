requirejs.config({  
    enforceDefine: true,
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone'
    },
    shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    }
});

define(['jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        console.info($);
        console.info(_);
        console.info(Backbone);
    }
);
