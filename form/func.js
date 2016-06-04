$(document).ready(function(){
	$('#form1').submit(function(e){
		e.preventDefault();
		var fields = getFields($(this));
		var errors = [];
		for(var i = 0; i < fields.length; i++){

			if($(fields[i]).data('rules') == 'required'){
				if(!required($(fields[i]))){
					errors.push($(fields[i]));
				}
			}

			if($(fields[i]).data('rules') == 'email'){
				if(!checkEmail($(fields[i]))){
					errors.push($(fields[i]));
				}
			}
		}

		if(errors.length != 0){
			showErrors(errors);
		}
	});
});

function showErrors(errors){
	for(var i = 0; i < errors.length; i++){
		$(errors[i]).addClass('error');
	}
}

function getFields(form){
	return form.find('input');
}

function required(field){
	if(field.val() == ''){
		return false;
	}
	return true;
}

function checkEmail(field){
	if(field.val().length < 3){
		return false;
	}
	return true;
}
