/*global module */
module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        files: {
            exclude: [
                '!**/thirdparty/**',
                '!**/*.min.js',
                '!**/*-min.js',
                '!**/*test-files/**'
            ],
            src: [
                'src/**/*.js',
                '!src/widgets/bootstrap-*.js',
                '<%= files.exclude %>'
            ],
            test: [
                'test/**/*.js',
                '!test/perf/**-files/*.js',
                '<%= files.exclude %>'
            ],
            scripts: [
                'Gruntfile.js',
                '<%= files.src %>',
                '<%= files.test %>'
            ]
        },
        jshint: {
            files: ['<%= files.scripts %>']
        },
        watch: {
            jshint: {
                files: ['<%= files.scripts %>'],
                tasks: ['jshint'],
                options: {interrupt: true}
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task.
    grunt.registerTask('default', ['jshint']);

};