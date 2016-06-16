function Slider (obj){
    var slides = $('#'+obj.id).find('.slider-item');
    var self = this;
    var ElemPosition = obj.move;
    var action;
    var autoSlide = obj.auto;
    this.init = function(){
//Выстраивание картинок в линию
        for(var i = 0; i<slides.length; i++){
            var temporary = parseInt($(slides[i]).width());
            $(slides[i]).css(ElemPosition, temporary*i+'px');
        }
//Вешаю обработчик на кнопки управления
        $('.slider-control').on('click', function(){
            action = $(this).data('action');
            getPosition(action);          
        });
    }
// Функция, которая двигает слайдер
    function getPosition (trigger){
        for(var i = 0; i<slides.length; i++){
            var temporary = parseInt($(slides[i]).width());
            var x = parseInt($(slides[i]).css(ElemPosition));
            var coord;
        switch(trigger){
            case 'moveLeft':   
                var coord = (x+temporary)+'px';
                break;
        
            case 'moveRight':
                var coord = (x-temporary)+'px';
                break;
                }
             $(slides[i]).css(ElemPosition, coord);
            }
        }
    }