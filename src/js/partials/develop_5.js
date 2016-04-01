function orderOpen(){
    $('.show-form').click(function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.order-form-wrap').slideDown('300');
        }else{$('.order-form-wrap').slideUp('300');}
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
    $(document).ready(function(){
            $('a[href="#form-button"]').click(function() {
             $('.show-form').click();
            });
            orderOpen();
            headeButer($('.butter'),$('.menu-top'));
            fancyboxTop();
            $('.slider-top').slick({
                 dots: true,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 4,
                  slidesToScroll: 1,
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


