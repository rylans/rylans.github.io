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
	}
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('lint', ['csslint']);

  grunt.registerTask('default', ['csslint', 'cssmin']);

};