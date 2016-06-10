var anim = false;
var autoslide = true;

function createSlider(collection){
	collection.each(function(index){
		
		if(index != collection.length-1){
			$(this).css({
				left: parseInt($(this).width())*index,
			}).attr('id', 'img'+index);
		}else{
			$(this).css({
				left: 0 - parseInt($(this).width()),
			}).attr('id', 'img'+index);
		}
		if(index == 0){
			$('#slider_count').append('<a class="circle active" href="#img'+index+'"></a>');
		}else{
			$('#slider_count').append('<a class="circle" href="#img'+index+'"></a>');
		}
	});
}

function move(direction){
	var collection = $('#slider img');
	var circles = $('.circle');
	anim = true;
	autoslide = false;

	switch(direction){
		case'left':
			circles.removeClass('active');
			collection.each(function(index){
				var current = parseInt($(this).css('left'));
				var offset = current - parseInt($(this).width());
				
				if(offset == 0){
					$(circles[index]).addClass('active');
				}

				$(this).animate({
					left: offset,
				},500,function(){
					if(offset < 0 - parseInt($(this).width())){
						$(this).css({
							left: parseInt($(this).width()) * (collection.length-2),
						});
					}
					anim = false;
					autoslide = true;
				});				
			})
			break;
		case'right':
			circles.removeClass('active');
			collection.each(function(index){
				var current = parseInt($(this).css('left'));
				var offset = current + parseInt($(this).width());
				
				if(offset == 0){
					$(circles[index]).addClass('active');
				}

				$(this).animate({
					left: offset,
				},500,function(){
					if( offset > parseInt($(this).width()) * (collection.length - 2) ){
						$(this).css({
							left: 0 - parseInt($(this).width()),
						});
					}
					anim = false;
					autoslide = true;
				});
			})
			break;
	}
}
function autoSlide(){
	if(autoslide === true && anim === false){
		move('left');
	}
}
$(document).ready(function(){
	$('body').contextmenu(function(e){
		e = e || event;
		e.preventDefault();
	});
	createSlider($('#slider img'));

	$('.slider_control').bind('click', function(){
		if(anim === false){
			move($(this).attr('id'));
		}
	});

	$('#slider').mouseenter(function(){
		autoslide = false;
	}).mouseleave(function(){
		autoslide = true;
	}).click(function(){
		alert('click')
	});

	$('.circle').bind('click', function(e){
		e = e || event;
		e.preventDefault();
		console.log($(this).attr('href'));
	});
	
	setInterval(autoSlide, 3000);
});