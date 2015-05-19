module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-template-jasmine-requirejs');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      build: {
        command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'specs/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    },
    jasmine: {
      src: 'app/js/*.js',
      options: {
        specs: 'specs/*.js',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: 'app/js'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('copy-require', function() {
    grunt.file.mkdir('build/js/lib');
    grunt.file.copy('node_modules/requirejs/require.js', 'build/js/lib/require.js');
  });

  grunt.registerTask('default', ['exec', 'jshint', 'jasmine', 'watch']);
};