const gulp     = require( 'gulp' );
const newer    = require( 'gulp-newer' );

// Copy fonts.
gulp.task( 'fonts', () => {
	return gulp.src( './src/fonts/**/*.{eot,otf,ttf,woff,woff2}' )
		.pipe( newer( 'dist/assets/fonts' ) )
		.pipe( gulp.dest( 'dist/assets/fonts' ) );
} );
