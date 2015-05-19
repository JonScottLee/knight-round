module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-template-jasmine-requirejs');

  grunt.registerTask('copy-require', function() {
    grunt.file.mkdir('build/js/lib');
    grunt.file.copy('node_modules/requirejs/require.js', 'build/js/lib/require.js');
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      build: {
        command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'app/js/*.js', 'specs/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          sourceMap: false,
          sourceMapIncludeSources: false
        },
        files: [{
            expand: true,
            cwd: 'app/js/lib',
            src: ['*.js', '!*-.min.js', '!*.min.js'],
            dest: 'build/js/lib/',
            ext: '.js'
        }]
      },
    },
    clean: ["build/js/"],
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
            baseUrl: 'app/js',
            paths: {
              "jquery": '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
            },
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['exec', 'jshint', 'jasmine', 'watch']);
  grunt.registerTask('minify', ['clean', 'exec', 'uglify']);
};