const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps')


gulp.task('sass-compile', function(){ // Создаем таск "sass"
	return gulp.src('./src/sass/*.scss') // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) 
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./src/css/')) // Выгружаем результата в папку 
});
gulp.task('watch', function(){
	return gulp.watch('./src/sass/*.scss', gulp.series('sass-compile'))
})

