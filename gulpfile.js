var gulp=require('gulp');
var uglify=require('gulp-uglify');
var server = require('gulp-server-livereload');//集团服务
var browserify = require('gulp-browserify');

var jshint=require('gulp-jshint');
var stylish=require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', function() {
  gulp.src('src/javascript/*.js')
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build/javascript'));
});

gulp.task('webserver',function(){
  gulp.src('app')
  .pipe(server({
    livereload:true,
    directoryListen:true,
    open:true,
    port:8090
  }))
});

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/javascript/common.js')
        .pipe(browserify())
        .pipe(gulp.dest('build/javascript'))
});

gulp.task('jshint',function(){
  gulp.src('src/template/*.html')
  .pipe(jshint.extract('auto'))
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
})
