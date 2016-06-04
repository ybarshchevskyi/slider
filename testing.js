//// Функциональный подход
var sliderarr = ['1.png','2.png','3.png'];
var counter = 0;

$(document).ready(function(){
    $('.row.left').on('click', changeSlideLeft);
    $('.row.right').on('click', changeSlideRight);
})

function changeSlideLeft(){
    if(counter!=0){
         counter--;
        $('.imagebox').attr('src', sliderarr[counter]);
    }
   
}
function changeSlideRight(){
    if(counter!=sliderarr.length-1){
        counter++;
        $('.imagebox').attr('src', sliderarr[counter]); 
    }
}

//Через обьект







//Конструктор калькулятор

function Calculator(){
    this.read = function(){
        this.a = prompt('Введите первое число', 1);
        this.b = prompt('Введите второе число', 2);
    },
    this.sum = function(){
        return this.a+this.b
    },
    this.mul = function(){
        return this.a*this.b
    }
};



