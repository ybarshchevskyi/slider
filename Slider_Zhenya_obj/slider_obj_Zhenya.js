function Slider (obj){
    var slides = $('#'+obj.id).find('.slider-item');
    var self = this;
    var ElemPosition = obj.move;
//Пока что не понятно что делать с этим свойством    
    var ElemProperty = obj.property;
//.......
    this.init = function(){
//Выстраивание картинок в линию
        for(var i = 0; i<slides.length; i++){
            var temporary = parseInt($(slides[i]).width());
            $(slides[i]).css(ElemPosition, temporary*i);
        }
//Вешаю обработчик на кнопки управления
        $('.slider-control').on('click', function(){
            var action = $(this).data('action');
            self[action]();
        });
    }
//Метод движения слайдера влево
    this.moveLeft = function(){
        for(var i = 0; i<slides.length; i++){
            var temporary = parseInt($(slides[i]).width());
            var x = parseInt($(slides[i]).css(ElemPosition));
            $(slides[i]).css(ElemPosition, (x-temporary)+'px');
        }
    }
//Метод движения слайдера вправо
    this.moveRight = function(){
        for(var i = 0; i<slides.length; i++){
            var temporary = parseInt($(slides[i]).width());
            var x = parseInt($(slides[i]).css(ElemPosition));
            $(slides[i]).css(ElemPosition, (x+temporary)+'px');
        }
    }
}