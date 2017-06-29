(function($) {

    var grid = {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    };
    var elements = {
        menuIcon: $('.icon-menu'),
        mobileMenu: $('.mobile-menu'),
        closeMenu: $('.close-mobile-menu'),
        range: $('.range'),
        rangeTeam: $('.range-team'),
        franchiseItem: $('.franchise-item'),
        franchisePin: $('.franchise-pin'),
        franchiseClose: $('.franchise-close'),
        faq: $('.faq-item'),
        faqQ: $('.faq-q'),
        faqA: $('.faq-a'),
        packageName: $('.package-name'),
        packageBlock: $('.package-block'),
        categoryBtn: $('.catalog-category-btn'),
        categoryListItem: $('.catalog-category-list li')
    };
    var options = {
        documentWidth: $(document).width()
    };

    @@include('./partials/_slider.js')

    $(window).on('load resize', function () {
        options.documentWidth = $(document).width();
        if($('input').is('.range')) {
            if (options.documentWidth > grid.md) {
                rangeSlider.update({
                    grid_num: 4
                })
            } else {
                rangeSlider.update({
                    grid_num: 2
                })
            }
        }
    });

    elements.menuIcon.on('click', function () {
       elements.mobileMenu.toggleClass('active');
    });
    elements.closeMenu.on('click', function () {
       elements.mobileMenu.removeClass('active');
    });
    elements.franchisePin.on('click', function () {
       $(this).toggleClass('active'); 
    });
    elements.range.ionRangeSlider({
        type: 'double',
        min: 500,
        max: 300000,
        from: 500,
        to: 300000,
        step: 50,
        postfix: '$',
        grid: true,
        grid_num: 4,
        hide_min_max: true,
        hide_from_to: true
    });
    var rangeSlider = elements.range.data("ionRangeSlider");

    elements.faqA.each(function () {
        $(this).data('height', $(this).data('toggle', 0).outerHeight()).css({
            height: 0,
            padding: '0 30px'
        });
    });
    elements.faqQ.on('click', function () {
        var faqAEl = $(this).closest(elements.faq).find(elements.faqA),
            faqAHeight = faqAEl.data('height');

        if(faqAEl.data('toggle') === 0) {
            $(this).closest(elements.faq).addClass('active').find(elements.faqA)
                .animate({
                    height: faqAHeight,
                    padding: '20px 30px'
                })
                .data('toggle', 1);

        } else {
            $(this).closest(elements.faq).removeClass('active').find(elements.faqA)
                .animate({
                    height: 0,
                    padding: '0 30px'
                })
                .data('toggle', 0);
        }
    });

    elements.packageName.on('click', function () {
       $(this).closest(elements.packageBlock).toggleClass('active').find('.table-resp').slideToggle('slow');
    });

    elements.franchiseClose.on('click', function () {
       $(this).closest(elements.franchiseItem).slideUp();
       setTimeout(function () {
           $(this).closest(elements.franchiseItem).remove();
       }, 400);
    });
    elements.categoryBtn.on('click', function(){
       $(this).toggleClass('active');
    });
    elements.categoryListItem.on('click', function(){
        elements.categoryListItem.removeClass('active');
        $(this).addClass('active');
    });
    $(document).mouseup(function (e){
        var el = elements.categoryBtn;
        if (!el.is(e.target)
            && el.has(e.target).length === 0) {
            el.removeClass('active');
        }
    });

})(jQuery);

/* Youtube API */
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player = [];
function onYouTubeIframeAPIReady() {
    $('.yvideo').each(function (i, e) {
        player[i] = new YT.Player($(e).attr('id'));
    });
}

$('.youtube-icon').on('click', function(){
    var id = $(this).parent().find('.yvideo').attr('id');
    $(this).parent().addClass('play');

    for(var i = 0; i < player.length; i++) {
        if(player[i].a.getAttribute('id') === id) {
            player[i].playVideo();
        }
    }
});