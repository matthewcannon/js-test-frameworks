var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('babel-core/register');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var mocha = require('gulp-mocha');
var batch = require('gulp-batch');
var webserver = require('gulp-webserver');
var webserverStream;

gulp.task('default', ['deploy', 'start', 'test', 'stop']);

gulp.task('deploy', ['deploy-html', 'deploy-javascript']);

gulp.task('run', ['deploy', 'start']);

gulp.task('start', function() {
    webserverStream = gulp.src('dist')
        .pipe(webserver({
            livereload: false,
            directoryListing: false,
            open: false
        }));

    return webserverStream;
});

gulp.task('stop', function() {
    return webserverStream && webserverStream.emit('kill');
});

gulp.task('test', function() {
    return gulp
        .src('./test/**/*.js', { read: false })
        .pipe(mocha({
                compilers: {
                    js: babel
                }
             }))
        .once('error', function (err) {
            console.log(err);
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
});

gulp.task('deploy-html', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy-javascript', function() {
    return browserify({
            entries: './src/main.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('tdd', function() {
    gulp.watch(['test/**', 'lib/**'], batch(function () {
        return gulp.src(['test/*.js'])
            .pipe(mocha({ reporter: 'list' }))
            .on('error', function (err) {
                console.log(err.stack);
            });
    }));
});
