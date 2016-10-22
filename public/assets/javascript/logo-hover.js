$("document").ready(function(){ 
    $(".logo-hover").mouseenter(function(){       
        $(this).attr('src','assets/img/logo-green.png');      
    });     
    $(".logo-hover").mouseleave(function(){       
        $(this).attr('src','assets/img/logo-white.png');      
    }); 
	 $('.main').hover(function() {
	        $(this).find('.main-area').hide();
	        $(this).find('.main-description').show();
	    }, function() {
	        $(this).find('.main-description').hide();
	        $(this).find('.main-area').show();
	});
});
