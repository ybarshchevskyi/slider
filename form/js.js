$(document).ready(function(){
	var form = new Form($('#form1'));
	form.init();
});

/**
 * Функция конструктор дл обьекта с правилами проверки полей
 *
 * методом выступает анонимная фуркция, принимает обьект JQuery возвращает bool
 */

function ValidationRules(){
	this.required = function(field){
		if(field.val() == ''){
			return false;
		}
		return true;
	}

	this.email = function(field){
		if(field.val().length < 3){
			return false;
		}

		return true;
	}
}
/**
 * Фнкция конструктор формы
 *
 * @property jQueryObject 		form 				форма, с которой работаем
 * @property jQueryObject 		fields 				поля формы, с которой работаем
 * @property ValidationRules 	validationRules 	обьект с методами валидации
 * @property array 				validationErrors 	массив содержаший поля с ошибками валидации
 *
 * @method init 		вешает перехватчики событий
 * @method checkInp 	проверка едеиничного поля
 * @method checkForm 	проверка формы перед отправкой
 * @method showError 	отображение ошибок
 *
 */
function Form(form){
	this.form = form;
	this.fields = form.find('input');
	this.valudationRules = new ValidationRules();
	this.validationErrors = [];
	this.init = function(){
		this.form.submit(checkForm);
		$(this.fields).keydown(checkInp);
	}
	var self = this;
	function checkInp(event){
		var inp = $(event.target);
		var rules = $(inp).data('rules');
			if(rules !== undefined){
				if(self.valudationRules[rules](inp)){
					inp.addClass('success');
					inp.removeClass('error');
				}
			}

	}
	function checkForm(event){
		for(var i = 0; i < self.fields.length; i++){
			var rules = $(self.fields[i]).data('rules');
			if(rules !== undefined){
				if(!self.valudationRules[rules]($(self.fields[i]))){
					self.validationErrors.push(self.fields[i]);
				}
			}
		}

		if(self.validationErrors.length != 0){
			event.preventDefault();
			self.showErrors();
		}
	}

	this.showErrors = function(){
	for(var i = 0; i < this.validationErrors.length; i++){
		$(this.validationErrors[i]).addClass('error');
	}
}
}

