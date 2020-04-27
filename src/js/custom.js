//Variables
let navbar = document.getElementById('head-navbar');
let footer = document.getElementById('main-footer');

//Funcion Ajustar margen del footer
function ajustarMargen() {

    //Alto de Footer
    let footerHeight = footer.clientHeight;
    //Elemento Opciones
    let op = document.getElementById('opciones');
    //Estilo del Margen
    let marginTopOp = window.getComputedStyle(op, null)
        .getPropertyValue('margin-top');
    //Margen AJustado
    let sizeAjust = (footerHeight + parseInt(marginTopOp.replace('px', '')));

    document.body.style.marginBottom = sizeAjust + 'px';
}



//Si la ventana carga
window.onload = () => {

    //Agrega el efecto change scroll
    window.onscroll = () => {

        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {

            navbar.classList.add('color-change');
            navbar.classList.add('shadow');

        } else {

            navbar.classList.remove('color-change');
            navbar.classList.remove('shadow');
        }

    };

    ajustarMargen();

    //Adaptar footer
    window.onresize = ajustarMargen;

};