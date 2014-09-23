module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	cssmin: {
	  my_target: {
		files: [{
		  expand: true,
		  cwd: 'stylesheets/',
		  src: ['*.css', '!*.min.css'],
		  dest: 'release/css/',
		  ext: '.min.css'
		}]
	  }
	},
	csslint: {
	  strict: {
		options: {
		  import: 2,
		  ids: false,
		  "box-model": false
		},
		src: ['stylesheets/**/*.css']
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('lint', ['csslint']);

  grunt.registerTask('default', ['csslint', 'cssmin']);

};