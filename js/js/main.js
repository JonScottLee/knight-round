requirejs.config({  
    enforceDefine: true,
    baseUrl: 'lib',
    paths: {
        'jquery': 'jquery',
        'underscore': 'underscore',
        'backbone': 'backbone'
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

require(['jquery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        console.info($);
        console.info(_);
        console.info(Backbone);
    }
);
