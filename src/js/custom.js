//Funcion para arreglar footer y margen
function footerMargen() {
    //Por primera vez
    let footerHeight = $('footer').height();

    $('body').css("margin-bottom", `${footerHeight}px`);

    //Adaptar footer
    $(window).resize(function () {
        $('body').css("margin-bottom", `${footerHeight}px`);
    });
}


//Si la ventana carga
$(document).ready(function () {
    //Agrega el efecto change scroll
    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $('.navbar').addClass('color-change');
        } else {
            $('.navbar').removeClass('color-change');
        }
    });


    footerMargen();

});