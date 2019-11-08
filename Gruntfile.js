module.exports = function(grunt) {

  var xpr = grunt.option('xpr') || '**'; // watch all unless specified

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        browserifyOptions: {
          paths: [
            './build/', './build/**/'
          ],
          debug: true,
          extensions: ['.js']
        }
      },
      pages: {
        files: [{
          expand: true,
          src: ['./build/script.js'],
          rename: function (dest, src) {
            return src.replace('build/script.js', 'dist/scripts.js');
          }
        }]
      }
    },

    copy: {
      pages: {
        files: [{
          expand: true,
          src: ['./build/index.html'],
          rename: function (dest, src) {
            return src.replace('build/', 'dist/');
          }
        }]
      }
    },

    sass: {                              // Task
      options: {
        loadPath: ['./build/*.scss', './build/*/*.scss']
      },
      pages: {
        src: './build/style.scss',
        expand: true,
        rename: function(dest, src) {
          var toDist = src.replace('build/', 'dist/');
          return toDist.replace('style.scss', 'styles.css');
        }
      }
    },

    watch: {
      html: {
        files: ['./build/index.html'],
        tasks: ['copy:pages']
      },
      css: {
        files: ['./build/*.scss', './build/**/*.scss'],
        tasks: ['sass:pages']
      },
      js: {
        files: ['./build/*.js', './build/**/*.js'],
        tasks: ['browserify:pages']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['copy:pages', 'sass:pages', 'browserify:pages', 'watch']);
};
