const gulp = require('gulp');
const rev = require('gulp-rev');
const del = require('del');
const imagemin = require('gulp-imagemin');
const usemin = require("gulp-usemin");
const htmlmin = require("gulp-htmlmin");
const nano = require('gulp-cssnano');
const browserSync = require("browser-sync").create();

gulp.task('previewDist', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('deleteDistFolder', ['icons'], () => {
    del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            multipass: true
        })) 
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], () => {
    gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [() => {
                return rev();
            }, () => {
                return nano()
            }],
            js: [() => {
                return rev();
            }, () => {
                return uglify();
            }],
            html: [() => {
                return htmlmin({ collapseWhitespace: true });
            }]
        }))
})

gulp.task('build');