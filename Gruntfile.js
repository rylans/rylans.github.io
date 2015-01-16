module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      my_target: {
	    files: [{
	      expand: true,
	      cwd: 'src/stylesheets/',
	      src: ['*.css', '!*.min.css'],
	      dest: 'stylesheets/',
	      ext: '.css'
	    }]
	}
    },
    csslint: {
      strict: {
	    options: {
	      import: 2,
	      ids: false,
	      "box-model": false,
	      "font-sizes": false
	    },
	    src: ['src/stylesheets/**/*.css']
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
	  'index.html': 'src/index.html',
	  '404.html': 'src/404.html',
	  'pages/git-usage.html': 'src/pages/git-usage.html',
	  'pages/jest-driven-development.html': 'src/pages/jest-driven-development.html',
	  'pages/responsive-design.html': 'src/pages/responsive-design.html',
	  'pages/python-with-vim.html': 'src/pages/python-with-vim.html',
	  'pages/canvas-fingerprinting.html': 'src/pages/canvas-fingerprinting.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('lint', ['csslint']);

  grunt.registerTask('default', ['csslint', 'cssmin', 'htmlmin']);
};
