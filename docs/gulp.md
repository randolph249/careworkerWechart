### gulp-uglify JS压缩工具

### gulp-concat 静态文件连接

### gulp-minify-css CSS压缩工具

### gulp-autoprefixer

### gulp-sass

### gulp-sourcemaps

-	sourcemaps必须使用两个两个plugins?

### gulp-rev 给文件添加MD5时间戳插件

```javascript
var rev=require('gulp-rev');
```

**rev包含的一些属性:**

-	rev();//执行MD5
-	rev.mianfest();//生成一个rev-mainfest.json文件

### gulp-rev-collector 根据rev-mainfest.json文件中KV对替换对应的静态文件路径引用

**rev-mainfest.json:**

```json
{
  "wap.min.css": "wap-4a3513b4e3.min.css"
}
```

**revCollector require:**

```javascript
var sourcemaps = require('gulp-sourcemaps');
gulp.src(['./rev-manifest.json', './app/index.html']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
  .pipe(revCollector()) //- 执行文件内css名的替换
  .pipe(gulp.dest('./app/')); //- 替换后的文件输出的目录
```
