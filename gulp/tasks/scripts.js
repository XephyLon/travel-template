const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', () => {
  webpack(require('../../webpack.config.js', () => {
    
  }));
});
