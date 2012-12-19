/*global module */
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                "Gruntfile.js",
                "src/**/*.js",
                "test/**/*.js",
                "!**/thirdparty/**",
                "!**/*-test-files/**",
                "!**/unittest-files/**",
                "!**/*.min.js",
                "!test/perf/**/*.js",
                "!src/widgets/bootstrap-*.js"
            ]
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    // Default task.
    grunt.registerTask('default', 'jshint');

};