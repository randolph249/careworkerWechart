var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var server = require('gulp-server-livereload'); //集团服务
// var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

// var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');//jshint输出格式
// var sourcemaps = require('gulp-sourcemaps');

var concat = require('gulp-concat'); //- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css'); //- 压缩CSS为一行；
var rev = require('gulp-rev'); //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-contrib-clean'); //文件缓存删除
var del = require('del');
var html2string = require('gulp-html2string');
var rename = require('gulp-rename');

gulp.task('clean', function(cb) {

  gulp.src(['build/css/'], {
      read: false
    })
    .pipe(clean());

  setTimeout(function() {
    cb();
  }, 500)
});

gulp.task('html2string', function() {
  return gulp.src(['app/*.html', '!app/index.html'])
    .pipe(html2string({
      // base: path.join(__dirname, 'test'),
      // base: path.join(__dirname, 'html'), //The base path of HTML templates
      createObj: true, // Indicate wether to define the global object that stores
      // the global template strings
      objName: 'TEMPLATES' // Name of the global template store variable
        //say the converted string for myTemplate.html will be saved to TEMPLATE['myTemplate.html']
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build/templates/'));
});

gulp.task('rev', ['clean'], function() { //- 创建一个名为 concat 的 task
  return gulp.src(['src/sass/*.scss']) //- 需要处理的css文件，放到一个字符串数组里
    .pipe(sass())
    .pipe(concat('wap.min.css')) //- 合并后的文件名
    .pipe(autoprefixer())
    .pipe(minifyCss()) //- 压缩处理成一行
    .pipe(rev()) //- 文件名加MD5后缀
    .pipe(gulp.dest('build/css')) //- 输出文件本地
    .pipe(rev.manifest()) //- 生成一个rev-manifest.json
    .pipe(gulp.dest('./')); //- 将 rev-manifest.json 保存到 rev 目录内
});

gulp.task('revCollector', ['rev'], function() {
  gulp.src(['./rev-manifest.json', './app/index.html']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
    .pipe(revCollector()) //- 执行文件内css名的替换
    .pipe(gulp.dest('./application/')); //- 替换后的文件输出的目录
});

gulp.task('build', ['clean', 'rev', 'revCollector']);


// var autoprefixer = require('gulp-autoprefixer');

// gulp.task('javascript', function() {
//   gulp.src('src/**/*.js')
//     .pipe(sourcemaps.init())
//     .pipe(uglify())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('build/js'));
// });
//
//
// gulp.task('uglify', function() {
//   gulp.src('src/javascript/*.js')
//     .pipe(uglify())
//     .pipe(sourcemaps.write('maps'))
//     .pipe(gulp.dest('build/javascript'));
// });
//
//
// gulp.task('jshint', function() {
//   gulp.src('src/template/*.html')
//     .pipe(jshint.extract('auto'))
//     .pipe(jshint())
//     .pipe(jshint.reporter(stylish))
// });
//
//
// gulp.task('multiple-tasks', function() {
//   return gulp.src('src/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass())
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(gulp.dest('dist'))
// });
//
// gulp.task('autoprefixer', function() {
//   return gulp.src('build/css/index.css')
//     .pipe(sourcemaps.init())
//     .pipe(autoprefixer())
//     .pipe(concat('all.css'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('dist'));
//
// });
