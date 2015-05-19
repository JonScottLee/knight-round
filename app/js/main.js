requirejs.config({  
  baseUrl: 'app/js/',

  paths: {
  },

  shim: {
  }
});

require(['app'],

function(App) {  
  window.bTask = new App();
});