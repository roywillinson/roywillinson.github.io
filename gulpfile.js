const {
    src,
    dest,
    watch,
    parallel
} = require('gulp');

const browserSync = require('browser-sync');

const sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');


//Convertir sass a css
function css() {
    return src([
            './node_modules/bootstrap/scss/bootstrap.scss',
            './src/scss/*.scss'
        ])
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(autoprefixer())
        .pipe(dest('./src/css'))
        .pipe(browserSync.stream());
}

//Importar js de Boostrap package
function js() {

    return src([
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/jquery/dist/jquery.slim.min.js',
            './node_modules/popper.js/dist/umd/popper.min.js'
        ])
        .pipe(dest('./src/js'))
        .pipe(browserSync.stream());
}

//Iniciar servidor
function serve() {
    browserSync.init({
        server: './src'
    });

    //Observar cambios de archivos scss, html, js
    watch([
        './node_modules/bootstrap/scss/bootstrap.scss',
        './src/scss/**/*.scss'
    ], css);

    watch('./src/*.html').on('change', browserSync.reload);
    watch('./src/js/**/*.js').on('change', browserSync.reload);
}

//Importar fontawesome.min.css a css
function fontawesome() {
    return src('./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css')
        .pipe(dest('./src/css/'));
}

//Traer las fuentes para que fontawesome funcione bien
function fonts() {
    return src('./node_modules/@fortawesome/fontawesome-free/fonts/*')
        .pipe(dest('./src/fonts/'));
}

exports.default = serve;