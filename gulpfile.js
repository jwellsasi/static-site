// run with: gulp default
var gulp = require('gulp');
var pug = require('gulp-pug')

gulp.task('partial', function(){
  return gulp.src('view/partials/*.pug')
    .pipe(pug({
    	pretty: true
    }))
    .pipe(gulp.dest('build'))   
});

gulp.task('pages', function(){    
  return gulp.src('view/pages/*.pug')
    .pipe(pug({
    	pretty: true
    }))  
    .pipe(gulp.dest('build'))    
});

gulp.task('watch', function(){
  gulp.watch('view/pages/*.pug', ['pages']);
  gulp.watch('view/partials/*.pug', ['partial']);
  // Other watchers
})