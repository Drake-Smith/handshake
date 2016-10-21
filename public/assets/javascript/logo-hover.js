$("document").ready(function(){ 
    $(".logo-hover").mouseenter(function(){       
        $(this).attr('src','assets/img/logo-green.png');      
    });     
    $(".logo-hover").mouseleave(function(){       
        $(this).attr('src','assets/img/logo-white.png');      
    }); 
});
