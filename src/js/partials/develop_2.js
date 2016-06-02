try{

    $(document).ready(function() {
        $(".accordion1").accordion({
            heightStyle: "content",
            collapsible: true,
            active:false
        });

        $(".accordion2").accordion({
            heightStyle: "content",
            collapsible: true,
            active:false
        });

        $('.convert-slid').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            swipeToSlide:true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                   }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                   }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });        
        
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}