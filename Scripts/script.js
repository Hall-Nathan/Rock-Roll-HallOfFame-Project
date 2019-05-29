// $ ( " selector " )
/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function(){
    $("#btnStart").click(function(){
       /* let speed = 1;
        let ticks = 200;
        let maxTop = 600;
        for(i = 0; i < ticks; ++i){
            $("#boxA")
            .animate({top:"+="+speed+"px"}, 3)
            $("#boxB")
            .animate({top:"+="+speed+"px"}, 3)
            $("#boxC")
            .animate({top:"+="+speed+"px"}, 3)

        }
        
        setInterval(function(){
            console.log($("#boxA").position());
        }, 100);*/
        
        $("#boxA")
        .animate({top:"600px"}, 820)
        .animate({left:"600px"}, 690)
        .animate({top:"0px"}, 920)
        .animate({left:"0px"}, 750)

        $("#boxB")
        .animate({top:"550px"}, 760)
        .animate({left:"600px"}, 710)
        .animate({top:"-50px"}, 950)
        .animate({left:"0px"}, 710)
        .animate({top:"0px"}, 500)

        $("#boxC")
        .animate({top:"500px"}, 700)
        .animate({left:"600px"}, 750)
        .animate({top:"-100px"}, 900)
        .animate({left:"0px"}, 750)
        .animate({top:"0px"}, 400)
    });
})