function Slider (obj){
    var slides = $('#'+obj.id).find('.slider-item');
    var self = this;
    var ElemPosition = obj.move;
    var action;
    var slidesWidth;
    this.init = function(){
//Выстраивание картинок в линию
        for(var i = 0; i<slides.length; i++){
            var temporary = parseInt($(slides[i]).width());
            slidesWidth += temporary;
            $(slides[i]).css(ElemPosition, temporary*i+'px');
        }
//Вешаю обработчик на кнопки управления
        $('.slider-control').on('click', function(){
            var action = $(this).data('action');
            self[action]();
        });
    }
this.moveLeft = function(){
    getPosition(slides, '1');
}

this.moveRight = function(){
    getPosition(slides, '2');
}
    function getPosition (array, trigger){
        for(var i = 0; i<array.length; i++){
            var temporary = parseInt($(array[i]).width());
            var x = parseInt($(array[i]).css(ElemPosition));
            var coord;
        switch(trigger){
            case '1':   
                var coord = (x+temporary)+'px';
                break;
        
            case '2':
                var coord = (x-temporary)+'px';
                break;
                }
             $(array[i]).css(ElemPosition, coord);
            }
        }
    }