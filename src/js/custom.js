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

    //Funcion Ajustar margen del footer
    function ajustarMargen() {
        //Por primera vez
        //Variable de alto de footer
        let footerHeight = $('footer').height();
        let margT = $('#opciones').css('margin-top');
        //Margen AJustado
        let sizeAjust = (footerHeight + parseInt(margT.replace('px', '')));
        $('body').css("margin-bottom", `${sizeAjust}px`);
    }


    ajustarMargen();

    //Adaptar footer
    $(window).resize(ajustarMargen);

});