if (typeof jQuery === 'undefined') {
    console.log("jQuery is not loaded");
} else {
    var version = jQuery.fn.jquery.split('.').map(function (num) {
        return parseInt(num, 10);
    });
    if (version[0] < 1 || (version[0] === 1 && version[1] < 7)) {
        console.log("jQuery version is not compatible with Owl Carousel");
    } else {
        console.log("jQuery version is compatible with Owl Carousel");
    }
}

$(document).ready(function () {
    const typedOptions = {
        strings: ["software developer", "web designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    const typedOption = {
        strings: ["software developer", "web designer", "student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    // sticky navbar on scroll script
    $(window).scroll(function () {
        const navbar = $('.navbar');
        const scrollY = this.scrollY;

        if (scrollY > 20) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }

        // scroll-up button show/hide script
        const scrollUpBtn = $('.scroll-up-btn');
        const showScrollUpBtn = scrollY > 500;
        scrollUpBtn.toggleClass("show", showScrollUpBtn);
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    const typed = new Typed(".typing", typedOptions);
    const typed2 = new Typed(".typing-2", typedOption);

    // owl carousel script
    const carouselOptions = {
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    };
    $('.carousel').owlCarousel(carouselOptions);
});
