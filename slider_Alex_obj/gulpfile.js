var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function(){
	gulp.src('slider.less')
	  .pipe(less())
	  .pipe(gulp.dest('css/'))
});