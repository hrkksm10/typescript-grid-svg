module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks("grunt-tslint");

    grunt.initConfig({
        shell: {
            tsc: {
                command: 'node node_modules/typescript/bin/tsc -p tsconfig.json'
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: 'src/',
                    mainConfigFile: 'src/main.js',
                    out: 'dist/main.build.js',
                    optimize: 'none'
                    // findNestedDependencies: true
                }
            }
        },
        tslint: {
            options: {
                configuration: 'tslint.json',
                force: false,
                fix: false
            },
            files: {
                src: [
                    'src/**/*.ts',
                    '!src/lib/**',
                    '!src/types/**'
                ]
            }
        }
    });

    grunt.registerTask('default', ['shell', 'requirejs']);
};
