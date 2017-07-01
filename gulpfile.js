// run with: gulp default
var gulp = require('gulp');
var pug = require('gulp-pug')
var exec =  require('child_process').exec;

// gulp task that will re-compile 
// the templates to html
gulp.task('pages', function(){  
  return gulp.src('view/pages/*.pug')
    .pipe(pug({
    	pretty: true
    }))  
    .pipe(gulp.dest('build'))    
});

// start the node server
gulp.task('server', function (cb) {
  exec('node app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

// watch for changes in the template files
// then restart the server
gulp.task('watch', function(){
  gulp.watch('view/pages/*.pug', ['pages','server']); 
})

gulp.task('default', ['pages', 'watch', 'server'])