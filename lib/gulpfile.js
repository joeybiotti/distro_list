const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');

//Compile Sass
gulp.task('sass', ()=> {
        return gulp.src('../sass/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(prefix('last 2 versions'))
                .pipe(gulp.dest('../css'))
});

//Lint Scripts
gulp.task('lint', ()=> {
        return gulp.src('../scripts/*.js')
                .pipe(eslint())
                .pipe(eslint.format())
                .pipe(eslint.failAfterError());
})

//Default
gulp.task('default', ['sass']);