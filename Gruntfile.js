module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jslint: {
      files: [
        'Gruntfile.js',
        'src/**/*.js',
        'test/**/*.js'
      ],
      exclude: [
        'src/thirdparty/**',
        'test/thirdparty/**'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-jslint');

  // Default task.
  grunt.registerTask('default', 'jslint');

};