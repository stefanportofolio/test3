$(document).ready(function(){
	$('.nav-button').click(function(){

		$('nav').slideToggle();


	});



	$('.arrow .right').click(function(){

		var image_now = $('.carousel .shown');
		var next_image = image_now.next();

		if(next_image.length == 0){
			next_image = $('.carousel-item').first();
		}

		
		image_now.animate({opacity:"toggle"},500,function(){
			next_image.animate({opacity:"toggle"},500,function(){
				image_now.removeClass('shown').addClass('hidden');
				next_image.removeClass('hidden').addClass('shown');
			});
		});






	});
	$('.arrow .left').click(function(){

		var image_now = $('.carousel .shown');
		var next_image = image_now.next();

		if(next_image.length == 0){
			next_image = $('.carousel-item').last();
		}

		
		image_now.animate({opacity:"toggle"},500,function(){
			next_image.animate({opacity:"toggle"},500,function(){
				image_now.removeClass('shown').addClass('hidden');
				next_image.removeClass('hidden').addClass('shown');
			});
		});






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