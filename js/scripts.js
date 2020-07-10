// Skill bar with animated slide right side   
$(document).ready(function () {

    var $window = $(window),
        win_height = $window.height() * 1.1,
        istouch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
    if (istouch) {
        $(".revealOnScroll").addClass("mobile");
    }

    $window.on("scroll", revealOnScroll);
    //show
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height = $window.height() * 1.1;

        $(".revealOnScroll:not(animated-slide-right)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (win_height + scrolled > offsetTop) {
                if ($this.attr("data-timeout")) {
                    window.setTimeout(function () {
                        $this.addClass("animated-slide-right");
                    }, parseInt($this.attr("data-timeout")))
                } else {
                    $this.addClass("animated-slide-right");
                }
            }
        })
        //hide
        $(".revealOnScroll.animated-slide-right").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (win_height + scrolled < offsetTop) {
                $this.removeClass("animated-slide-right");
            }
        })
    }
    revealOnScroll();
});

// Time Line Effects to slide 
$(document).ready(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline .timeline-container");

    // check if an element is in viewport

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

});

