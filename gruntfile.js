module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        //Open the package.json
        pkg: grunt.file.readJSON('package.json'),

        //The Concat Task
        concat: {
            dist: {
                options: {
                    separator: '\n\r',
                    banner: '/*\nConcatinated JS file \n' +
                            'Author: Esra Oz \n' +
                            'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
                            '\n */ \n'
                },
                // select the files to concatenate
                src: ['assets/**/*.js'],
                // the resulting JS file
                dest: 'assets/project.js'
            }
        },

        //Task for js Minification
        uglify: {
            options: {
                //  banner for inserting at the top of the result
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                src: ['assets/project.js'],
                dest: 'assets/project.min.js'
            }
        },

        //Sass compiler
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/project.css': 'assets/stylesheets/project.scss'
                }
            }
        },

        // Minify CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets',
                    src: ['project.css'],
                    dest: 'assets',
                    ext: '.min.css'
                }]
            }
        },

        //Task for change tracker
        watch:{
            scripts: {
                files: ['assets/javascripts/**/*.js'],
                tasks: ['concat','uglify']
            },
            styles: {
                files: ['assets/stylesheets/**/*.scss'],
                tasks: ['sass','cssmin']
            }
        }
    });

    //The Required Plug-Ins which will be loaded for Task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //The array of default tasks
    grunt.registerTask('default', ['concat', 'uglify','sass','cssmin','watch']);
};