$(document).ready(function(){
    
   
});

//function ValidationRules(fields){
//    
//}; 

var coolForm = new Form($('#form_testing'));


function Form (form){
    this.form = form,
    this.fields = form.find('input'),
    this.errors = []
};