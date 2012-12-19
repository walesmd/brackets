module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
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