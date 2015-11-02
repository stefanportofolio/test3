$(document).ready(function(){
	$('.nav-button').click(function(){

		$('nav').slideToggle();


	});



	$('.arrow .next').click(function(){







		
	});
	$(window).resize(function(){
		if($(window).width()<764){
			$('nav').slideUp();
			
			
		}
		else{
			$('nav').slideDown();
			
		}
	});
	$('.carousel .down').click(function(){
		$('html, body').animate({
			scrollTop: $(".list-container").offset().top
		},1000);


	});
});