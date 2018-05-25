const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

//gulp compile sass
gulp.task('sass', function(){
    return gulp.src('../sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('../css'))
});

//gulp default
gulp.task('default', ['sass']);