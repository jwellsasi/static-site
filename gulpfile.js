// run with: gulp default
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('partial', function(){
  gulp.watch('view/partial/*.pug', ['partial']);
  return gulp.src('view/partial/*.pug')
    .pipe(pug({
    	pretty: true
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('pages', function(){
  gulp.watch('view/pages/*.pug', ['pages']);    
  return gulp.src('view/pages/*.pug')
    .pipe(pug({
    	pretty: true
    }))  
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['partial', 'pages']);