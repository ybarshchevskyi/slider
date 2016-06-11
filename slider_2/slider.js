function Slider(obj){
	var slider = $('#'+obj.id);	
	var self = this;
	var slides = [];
	var position = [];
	var property = 'left';
	var cssProp = 'width';
	var sliderLength = 0;
	var slideWidth = obj.slideWidth;

	this.init = function(){
		slides = $(slider).find('.slider-item');

		for(var i = 0; i < slides.length; i++){
			$(slides[i]).css(cssProp,slideWidth);
		}

		for(var i = 0; i < slides.length; i++){
			var X = parseInt($(slides[i])[cssProp]());
			position.push(X*i);
			sliderLength += X;

		}

		show();

		$(slider).find('.slider-control').on('click', function(){
			var action = $(this).data('action');

			self[action]();
		});
	};



	this.moveLeft = function(){
		getPosition('2');
		show();
	};

	this.moveRight = function(){
		getPosition('1');
		show();
	};

	function getPosition(trigger){
		position = [];
		for(var i = 0; i < slides.length; i++){
			var offset = parseInt($(slides[i]).css(property));
			var X = parseInt($(slides[i])[cssProp]());
			var coord;
			switch(trigger){
				case"1":
					coord = offset+X
					break;
				case"2":
					if(offset < -sliderLength+X){
						coord = X;
					}else{
						coord = offset-X;
					}
					break;
			}

			position.push(coord);
		}

	}

	function show(){
		for(var i = 0; i < slides.length; i++){
			$(slides[i]).css(property, position[i]+'px');
		}
		console.log(sliderLength);
	}
}