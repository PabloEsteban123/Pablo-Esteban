function init() {
    var navbar = document.getElementById("menu");
    var sticky = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
    window.onscroll = function() { stickyNav(); }

    function scrollAnimation() {
        var posicionPantalla = window.innerHeight;
        var alimentacionImg = document.querySelector('#alimentacionImg');
        var posicionAli = alimentacionImg.getBoundingClientRect().top;

        if (posicionAli < posicionPantalla) {
            alimentacionImg.classList.add('imgAparecer');
        }
    }
    window.addEventListener('scroll', scrollAnimation);

    var misionLink = document.getElementById("misionLink");
    var educacionLink = document.getElementById("educacionLink");
    var alimentacionLink = document.getElementById("alimentacionLink");
    var saludLink = document.getElementById("saludLink");
    var uneteLink = document.getElementById("unete");

    function uncheck() {
        var check = document.getElementById("check");
        if (check.checked == true) {
            check.checked = false;
        }
    }
    misionLink.addEventListener('click', uncheck);
    educacionLink.addEventListener('click', uncheck);
    alimentacionLink.addEventListener('click', uncheck);
    saludLink.addEventListener('click', uncheck);
    uneteLink.addEventListener('click', uncheck);
}



$(document).ready(function() {
    $(".xzoom, .xzoom-gallery").xzoom({ tint: '#333', Xoffset: 15 });
});