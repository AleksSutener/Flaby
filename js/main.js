$(function() {

    $('.comments-slider').slick({
        appendArrows: $('.comments-slider-buttons'),
        prevArrow: '<button class="previous">Previous</button>',
        nextArrow: '<button class="next">Next</button>',
        infinite: false,
        fade: true
    });

    $('.btn_more').click(function() {
        $('.block-text-list_more').slideToggle(300);
    });

    $('.menu-open').click(function() {
        $('.block-nav').slideToggle(300);
    });
});