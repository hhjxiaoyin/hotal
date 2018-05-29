/*swiper.js Modified BY 痴情浪子 QQ:315065690 2017-12-29 13:28*/
var t = $(".swiper-slide").length;
var bannerswiper = new Swiper("#banner .swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    mode: "vertical",
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
    autoplayDisableOnInteraction: false,
    onSlideChangeEnd: function() {},
    onTouchEnd: function() {},
    onSlideNext: function() {
        if (bannerswiper.previousIndex == t - 1) {
            bannerswiper.disableMousewheelControl()
        }
    },
    onSlidePrev: function() {}
});
window.addEventListener("DOMContentLoaded", function() {
    var body_fixed = {
        init: function() {
            window.onscroll = this.throttle(this.isFixed, 0);
            this.isFixed()
        },
        isFixed: function() {
            H = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
            if (H > 0) {
                bannerswiper.disableMousewheelControl()
            } else {
                bannerswiper.enableMousewheelControl()
            }
        },
        throttle: function(fn, delay) {
            var timer = null;
            var _this = this;
            return function() {
                var context = _this,
                    args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn.apply(context, args)
                }, delay)
            }
        }
    };
    body_fixed.init()
});