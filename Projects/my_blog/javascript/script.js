// ===================scroll top=================

$(document).ready(function () {

    $(".scroll").click(function () {
        $("html,body").animate({scrollTop:0},2000)

    })

});


//========================= menu
$(document).ready(function () {

    $(".hs-menubar").hsMenu();

});


// ==========================side scroll ==============

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [2000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
});


