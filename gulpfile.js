const {
    src,
    dest,
    watch,
    parallel
} = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

function css() {
    return src([
            'node_modules/bootstrap/scss/bootstrap.scss',
            'src/scss/*.scss'
        ])

        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}

function js() {

    return src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.slim.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js'
        ])
        .pipe(dest('src/js'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        server: './src'
    });
    watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ], css());

    watch('src/*.html').on('change', browserSync.reload);
    watch('src/scss/*.scss').on('change', function (path, stats) {
        css();
        console.log(`File ${path} was changed`);

    });
}

function fontawesome() {
    return src('node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css')
        .pipe(dest('src/css'));
}

function fonts() {
    return src('node_modules/@fortawesome/fontawesome-free/fonts/*')
        .pipe(dest('src/fonts'));
}

exports.js = js;
exports.fontawesome = fontawesome;
exports.fonts = fonts;
exports.serve = serve;
exports.css = css;
exports.default = parallel(css, js, serve, fontawesome, fonts);