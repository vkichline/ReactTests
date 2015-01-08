/// <binding BeforeBuild='build' />
module.exports = function (grunt) {
    grunt.initConfig({
        react: {
            files: {
                expand: true,
                cwd: 'jsx',
                src: ['**/*.jsx'],
                dest: 'wwwroot/scripts',
                ext: '.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-react");
    grunt.registerTask('build', ['react']);
};