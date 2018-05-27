const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

//Compile Sass
gulp.task('sass', function(){
        return gulp.src('../sass/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(prefix('last 2 versions'))
                .pipe(gulp.dest('../css'))
});

//Default
gulp.task('default', ['sass']);