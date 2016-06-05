$(document).ready(function(){
    $('#form_testing').submit(function(event){
        event.preventDefault(); 
        var fields = getInputFields($(this));
        var Errors = [];

// Перебор полей через цикл

    for(var i=0;i<fields.length;i++){
        if($(fields[i].data('rules')=='required')){
            if(!checkRequired($(fields[i]))){
                Errors.push($(fields[i]));
            }
        }
        if($(fields[i].data('rules') == 'string_only')){
            if(!checkStrings($(fields[i]))){
                Errors.push($(fields[i]));
            }
        }
        if($(fields[i].data('rules')=='numbers_only')){
            if(!checkNumbers($(fields[i]))){
                Errors.push($(fields[i]));
            }
        }
    }

    //Проверка на заполнение массива с ошибками
	if(Errors.length != 0){
			showErrors(Errors);
		}

    });
    
});



//Функция, которая собирает все инпуты в один массив 


function getInputFields(form){
    return form.find('input');
}



//Функция, которая проверят наличие необходимых значений в полях с required

function checkRequired(field){
    if(field.val()==''){
        return false
    }else{
        return true
    }
}

//Функция, которая проверяет наличие необходимых значения в полях с string_only
function checkStrings(field){
    var checking = typeof field.val();
    if(checking!=='string'){
        return false
    }else{
        return true
    }
}

//Функция, которая проверяте наличие необходимых значений в полях с numbers_only
function checkNumbers(field){
    var checking = typeof field.val();
    if(checking!=='number'){
        return false
    }return true
}


//Функция, которая добавляет класс к массиву с ошибками
function showErrors(massive){
    for(var i = 0; i<massive.length; i++){
        massive[i].addClass('mistakes');
    }
}