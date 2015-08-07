var gulp = require('gulp')  
var webserver = require('gulp-webserver')   
var browserify = require('browserify')  
var babelify = require('babelify')  
var source = require('vinyl-source-stream')  

gulp.task('server', function() {  
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})


gulp.task('build', function() {  
  browserify({
    entries: './src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js'))
})



gulp.task('default', ['server']) 