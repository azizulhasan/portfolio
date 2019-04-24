$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})

// Isotope
$('.portfolio-item').isotope({
    itemSelector: '.item',
    mode        :'fitRows'
});

$('.portfolio-menu ul li').click(function () {

    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    var selector= $(this).attr('data-filter')
    $('.portfolio-item').isotope({
        filter: selector
    });
});