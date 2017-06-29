$(window).on('load', function () {
    $('.slider-partners').slick({
       arrows: false,
       dots: false,
       slidesToShow: 5,
       slidesToScroll: 1,
       responsive: [
           {
               breakpoint: 992,
               settings: {
                   slidesToShow: 4
               }
           },
           {
               breakpoint: 767,
               settings: {
                   slidesToShow: 3
               }
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 2
               }
           }
       ]
    });
    $('.slider-fully').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });
    $('.slider-smi').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    });
    $('.slider-reviews, .slider-franchise').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    var rangeTeamSliderж
    $('.slider-team-main').on('init', function(event, slick){
        elements.rangeTeam.ionRangeSlider({
            type: 'single',
            min: 0,
            max: slick.slideCount,
            from: 0,
            step: 1,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function (data) {
                slick.$slider.slick('slickGoTo', data.from);
            }
        });
        rangeTeamSlider = elements.rangeTeam.data("ionRangeSlider");
    });
    $('.slider-team-main').on('afterChange', function(event, slick){
        rangeTeamSlider.update({
            from: slick.currentSlide
        })
    });

    $('.slider-team-main').slick({
        arrows: false,
        slidesToShow: 11,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        loop: true,
        asNavFor: '.slider-team-description',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
    $('.slider-team-description').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-team-main'
    });
});