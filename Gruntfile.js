module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      files: [
        'Gruntfile.js',
        'lib/*.js',
        'test/*.js'
      ],

      options: {
        newcap: false
      }
    },

    open: {
      test: {
        path: 'test/test.html'
      }
    },

    uglify: {
      options: {
        report: 'gzip'
      },

      dist: {
        src: ['lib/cliche.js'],
        dest: 'dist/cliche.min.js'
      }
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'open'
  ]);

  grunt.registerTask('dist', [
    'test',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);

};
