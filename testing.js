//// Функциональный подход
//var sliderarr = ['1.png','2.png','3.png'];
//var counter = 0;
//var auto = true;
//
//$(document).ready(function(){
//    $('.row.left').on('click', changeSlideLeft);
//    $('.row.right').on('click', changeSlideRight);
//})
//
//function changeSlideLeft(){
//    if(counter!=0){
//         counter--;
//        $('.imagebox').attr('src', sliderarr[counter]);
//    }
//   
//}
//function changeSlideRight(){
//    if(counter!=sliderarr.length-1){
//        counter++;
//        $('.imagebox').attr('src', sliderarr[counter]); 
//    }
//}

//Через объект
var newSlider;
$(document).ready(function(){

  var array1 = ['1.png','2.png','3.png'];

  newSlider = new Slider(array1, 'one');
  newSlider.init();
})

function Slider(Massive, id){
    var sl = $('#'+id);
    this.massive=Massive;
    this.counter=0;
    var self=this;
    this.init=function(){
        $('.actionbuttons').on('click', function(){
           var action = $(this).attr('id')
           if(action=='left'){
               self.left();
           } else if(action=='right'){
               self.right(); 
           }
        })};
        
//Метод для движения слайдера вправо    
    this.right = function(){
    if(self.counter!=self.massive.length-1){
        self.counter++;
        $(sl).find('.imagebox').attr('src', self.massive[self.counter]); 
    }
    }
    
//Метод для движения слайдера влево
    this.left = function(){
     if(this.counter!=0){
         this.counter--;
        $(sl).find('.imagebox').attr('src', this.massive[this.counter]);
    }
}
}




