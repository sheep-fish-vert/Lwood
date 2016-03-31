try{

    $(document).ready(function() {
        $(".accordion1").accordion({
            heightStyle: "content",
            collapsible: true
        });

        $(".accordion2").accordion({
            heightStyle: "content",
            collapsible: true
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