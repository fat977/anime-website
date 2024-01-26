$(document).ready(function () {
    $(".top").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".movies").owlCarousel({
       
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                loop: true
            },
            500:{
                items:2,
                
            },
            1000:{
                items:5,
                loop:false
            }
        }
    });
});