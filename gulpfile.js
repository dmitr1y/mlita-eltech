var lr = require('tiny-lr'),
	gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	csso = require('gulp-csso'),
	uglifyjs = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	concat = require('gulp-concat'),
	connect = require('connect'),
	server = lr();

gulp.task('js', function(){
	return gulp.src('assets/js/*.js')
		.pipe(concat('index.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('./public/js'))
		.pipe(livereload(server));
});

gulp.task('css', function(){
	return gulp.src('assets/css/*.css')
		.pipe(concat('main.css'))
		.pipe(uglifycss())
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload(server));
});

gulp.task('http-server', function(){
	connect()
		.use(require('connect-livereload'))
		.use(connect.static('./public'))
		.listen('9000');

	console.log('Server listening on http://localhost:9000');
});

gulp.task('watch', function(){
	gulp.run('js');
	gulp.run('css');

	server.listen(35729, function(err){
		if (err) console.log(err);

		gulp.watch('assets/js/*', function(){
			gulp.run('js');
		});

		gulp.watch('assets/css/*', function(){
			gulp.run('css');
		});
	});

	gulp.run('http-server');
});