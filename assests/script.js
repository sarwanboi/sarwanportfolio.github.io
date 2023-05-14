if (typeof jQuery === 'undefined') {
    console.log("jQuery is not loaded");
} else if (/1\.(0|1|2|3|4|5|6)\.\d+/.test(jQuery.fn.jquery)) {
    console.log("jQuery version is not compatible with Owl Carousel");
} else {
    console.log("jQuery version is compatible with Owl Carousel");
}

$(document).ready(function () {
    const typedOptions = {
        strings: ["student", "software developer", "web designer"],
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

    // caching frequently used jQuery objects to improve performance
    const navbar = $('.navbar');
    const scrollUpBtn = $('.scroll-up-btn');
    const menuItems = $('.navbar .menu li a');
    const menuBtn = $('.menu-btn');

    $(window).scroll(function () {
        const scrollY = this.scrollY;
        if (scrollY > 20) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }

        const showScrollUpBtn = scrollY > 500;
        scrollUpBtn.toggleClass("show", showScrollUpBtn);
    });

    scrollUpBtn.click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    menuItems.click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    menuBtn.click(function () {
        navbar.find('.menu').toggleClass("active");
        $(this).find('i').toggleClass("active");
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
