const requireDir = require( 'require-dir' );
const gulp       = require( 'gulp' );
const watch      = require( 'gulp-watch' );
const del        = require( 'del' );

// For neatness, most tasks have been split up into separate files
// Just load them all from ./gulp directory.
requireDir( './gulp' );

// Task to cleanup the dist directory.
gulp.task( 'clean-dist', ( cb ) => {
	return del( [ './dist/**/*', '!./dist/.git' ], cb );
} );

// Watch for changes.
gulp.task( 'watch', () => {
	gulp.watch( 'src/images/**/*.{jpg,jpeg,png}', [ 'images' ] );
	gulp.watch( 'src/images/**/*.svg', [ 'svg' ] );
	gulp.watch( 'src/fonts/**/*.{eot,otf,ttf,woff,woff2}', [ 'fonts' ] );
	gulp.watch( 'src/styles/**/*.scss', [ 'styles' ] );
	gulp.watch( 'src/js/**/*.js', [ 'js' ] );
	gulp.watch( 'src/html/**/*.html', [ 'fileinclude' ] );
} );

// Default task. Do everything.
gulp.task( 'default', [ 'styles', 'js', 'svg', 'images', 'fonts', 'fileinclude' ] );

// Build task. Should be run before release.
gulp.task( 'build',   [ 'clean-dist', 'styles', 'js', 'svg', 'images', 'fonts', 'fileinclude' ] );
