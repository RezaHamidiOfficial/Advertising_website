jQuery(document).ready(function (e) {
    "use strict";
    e(".carousel-inner .item:first-child").addClass("active"), e(".mainmenu ul.nav.navbar-nav li a").on("click", function () {
        e(".mainmenu .navbar-collapse").removeClass("in")
    }), e.scrollUp({
        scrollText: '<span class="ti-arrow-up"></span>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    }), (new WOW).init({mobile: !0}), e(".bg-slide").owlCarousel({
        loop: !0,
        nav: !1,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 500,
        items: 1,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    }), e(".list_screen_slide").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        nav: !0,
        margin: 5,
        autoplay: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 500,
        center: !0,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {0: {items: 1}, 600: {items: 3}, 1200: {items: 5}}
    });
    var a = e(".client_details");
    a.owlCarousel({
        loop: !0,
        margin: 30,
        autoplay: !1,
        dots: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 600,
        responsive: {0: {items: 1}, 600: {items: 1}, 992: {items: 1}}
    });
    var t = e(".client_photo");
    if (t.owlCarousel({
        loop: !0,
        margin: 30,
        dots: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 600,
        mouseDrag: !0,
        touchDrag: !1,
        center: !0,
        responsive: {0: {items: 1}, 600: {items: 3}, 992: {items: 3}}
    }), e(".client_nav .testi_next").on("click", function () {
        t.trigger("next.owl.carousel")
    }), e(".client_nav .testi_prev").on("click", function () {
        t.trigger("prev.owl.carousel")
    }), t.on("translate.owl.carousel", function (a) {
        e(".client-details-content .owl-dot:eq(" + a.page.index + ")").click()
    }), a.on("translate.owl.carousel", function (a) {
        e(".client-photo-list .owl-dot:eq(" + a.page.index + ")").click()
    }), e("#mc-form .input-group-btn").click(function (a) {
        a.preventDefault(), e("#mc-form label").html("در حال ارسال");
        var t = e("#mc-email").val();
        e.post({url: "/subscribe.php?email=" + t}).done(function (a) {
            a = JSON.parse(a), e("#mc-form label").html(a.message), 1 == a.success && e("#mc-form .input-group").fadeOut()
        })
    }), e(".price-table").on("mouseenter", function () {
        e(".price-table").removeClass("active"), e(this).addClass("active")
    }), e(".price-table").on("mouseleave", function () {
        e(".price-table").removeClass("active"), e(".price-table.center").addClass("active")
    }), e(".video-popup").magnificPopup({
        type: "iframe",
        iframe: {markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style><div class="mfp-iframe-scaler" ><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div></div>'}
    }), e(".work-popup").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-with-zoom",
        gallery: {enabled: !0},
        zoom: {
            enabled: !0, duration: 300, easing: "ease-in-out", opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        }
    }), "function" == typeof e.fn.ripples) try {
        e(".ripple").ripples({resolution: 500, perturbance: .04})
    } catch (a) {
        e(".error").show().text(a)
    }
    jQuery.fn.spectragram.accessData = {
        accessToken: "2136707.4dd19c1.d077b227b0474d80a5665236d2e90fcf",
        clientID: "4dd19c1f5c7745a2bca7b4b3524124d0"
    }, e(".instagram").spectragram("getUserFeed", {
        query: "adrianengine",
        size: "small",
        max: 9
    }), e(".feature-area a").on("mouseenter", function () {
        e(this).tab("show")
    }), e(".feature-area-web a").on("mouseenter", function () {
        e(this).tab("show")
    })
}(jQuery)), jQuery(window).on("load", function () {
    $(".instagram-slide").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        nav: !1,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 500,
        center: !0,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {0: {items: 1}, 600: {items: 3}, 1200: {items: 5}}
    })
}), $(".owl-carousel").owlCarousel({
    loop: !0,
    margin: 0,
    nav: !0,
    autoplay: !0,
    autoplayTimeout: 2e3,
    autoplayHoverPause: !0,
    navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
    responsive: {0: {items: 1}, 600: {items: 3}, 1000: {items: 5}}
});