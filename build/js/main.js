define("app",[],function(){var e=function(){};return e.prototype={},e}),requirejs.config({baseUrl:"js/",paths:{jquery:"lib/jquery"},shim:{"lib/underscore":{exports:"_"},"lib/backbone":{deps:["lib/underscore"],exports:"Backbone"},app:{deps:["lib/underscore","lib/backbone"]}}}),require(["app"],function(e){window.bTask=new e}),define("main",function(){});