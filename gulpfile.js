// gulpfile.js 
var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    spawn = require('child_process').spawn;

var server = gls.new('./server/app.js');
gulp.task('serve', () => {
  server.start();
  // Watch index.html
  gulp.watch(['./client/**/*.html', './client/public/stylesheets/*.css'], file => {
    server.notify.apply(server, [file]);
  });
  // Watch Sass File
  gulp.watch(['./client/public/stylesheets/sass/*.scss'], ['sass']);

});

gulp.task('sass', function() {
  return gulp.src('./client/public/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/public/stylesheets'))
    .pipe(server.notify());
});

gulp.task('cssmin', function(){
  return gulp.src('./client/public/stylesheets/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./client/public/dist/stylesheets'));
});

gulp.task('auto-reload', function() {

  var p;

  gulp.watch('gulpfile.js', spawnChildren);
  spawnChildren();

  function spawnChildren(e) {
    // kill previous spawned process
    if(p) { 
      // Give time for server to shutdown before killing the process
      setTimeout(function(){
        p.kill();
        p = spawn('gulp', ['server'], {stdio: 'inherit'});

      }, 1000);
      
    } else {
      p = spawn('gulp', ['server'], {stdio: 'inherit'});
    }

    // `spawn` a child `gulp` process linked to the parent `stdio` 
  }
});

gulp.task('build', ['sass', 'cssmin']);