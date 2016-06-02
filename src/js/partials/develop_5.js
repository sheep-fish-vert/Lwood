function orderOpen(){
    $('.show-form').click(function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.order-form-wrap').slideDown('300');
            var targ = $(this).offset().top;
            $(scroller).animate({scrollTop:targ},800);

        }else{
            $('.order-form-wrap').slideUp('300');

        }
    });
}
function fancyboxTop(){
  $('.fancybox').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoResize:true,
    'closeBtn' : false,
    fitToView:true,
    padding:'0'
  })
}

function clickOnLittleItemOnColorPalete() {
    $('.little-item').click(function () {
        $('.little-item').removeClass('active');
        $(this).toggleClass('active');
        var bigBoy = $('.big.block');
        var activeBoy = $('.little-item.active');
        var title = activeBoy.find('.block-title').html();
        bigBoy.find('.block-title').html(title);
        var img = activeBoy.find('.img').html();
        bigBoy.find('.img').html(img);
    });
}

    $(document).ready(function(){
        $('a[href="#form-button"]').click(function() {
            $('.show-form').addClass('active');
            $('.order-form-wrap').slideDown('300');
        });
        orderOpen();
        headeButer($('.butter'),$('.menu-top'));
        fancyboxTop();
        clickOnLittleItemOnColorPalete();
        $('.slider-top').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide:true,
            responsive: [
                {
                    breakpoint: 1710,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        if($(window).width()>992){$('.menu-top').attr('style','');}
    });


