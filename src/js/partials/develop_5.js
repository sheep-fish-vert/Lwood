function orderOpen(){
    $('.show-form').click(function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.order-form-wrap').slideDown('300');
        }else{$('.order-form-wrap').slideUp('300');}
    });
}
    $(document).ready(function(){
            orderOpen();
            headeButer($('.butter'),$('.menu-top'))
    });

    $(window).load(function(){

    });

    $(window).resize(function(){
        if($(window).width()>992){$('.menu-top').attr('style','');}
    });


