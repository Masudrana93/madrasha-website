$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000, //2000 ms = 2 sec.//
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: true,
        },

        600:{
            items: 2,
            nav: true,
        },

        1000:{
            items: 3,
            nav: true,
        },
    }
})