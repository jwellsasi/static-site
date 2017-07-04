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

// gulp task that will re-compile 
// the templates to html
gulp.task('partials', function(){  
  return gulp.src('view/partials/*.pug')
    .pipe(pug({
      pretty: true
    }))  
    .pipe(gulp.dest('build'))    
});

// run Python build script
gulp.task('python', function (cb) {
  exec('python site-dependencies.py', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

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
  gulp.watch('view/pages/*.pug', ['pages','server', 'partials']);
  gulp.watch('view/partials/*.pug', ['partials','server', 'pages']);
})

gulp.task('default', ['pages', 'watch', 'python', 'server'])