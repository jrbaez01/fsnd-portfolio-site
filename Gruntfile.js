module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
            { name: 'small', width: 320 },
            // { name: 'small', suffix: '_x2', width: 640},
            { name: 'medium', width: 640 },
            // { name: 'medium', suffix: '_x2', width: 1280},
            { name: 'large', width: 1024 },
            // { name: 'large', suffix: '_x2', width: 2048}
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'assets_source/img/',
          dest: 'assets/img/'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          noCache: true,
          trace: true
        },
        files: {
          'assets/css/specific_style.css': 'assets_source/css/specific_style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'assets_source/css/*.scss',
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['responsive_images', 'sass']);

};
