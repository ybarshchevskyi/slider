function Slider(id){
	this.slideCollection = $('#'+id).find('.slide');
	this.controls = $('#'+id).find('.control');
	this.duration = 1000;

	this.init = function(obj){
		for(var i = 0; i < this.slideCollection.lenght; i++){
			var width = parseInt($(this.slideCollection[i]).css('width'));
			$(this.slideCollection[i]).css('left', width*i);
		}

		$(this.controls).click(handler);

		this.duration = obj.duration;

		for(var key in obj){
			this[key] = obj[key]
		}
	}
	var self = this;
	function handler(event){
		var action = $(event.target).data('action');
		self[action]();
	}

	this.moveLeft = function(){
		setInterval(function(){}, this.duration);
	}

	this.moveRight = function(){
		alert('slider '+id+' : action -> right');
	}

}