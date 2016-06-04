$(document).ready(function(){
   $('form').submit(function(event){
       event.preventDefault();
       var form = new Form ($(this));
       form.checkIt();
   });
});

function Form(form){
    this.fields = form.find('input');
    this.validationRules = new validationRules();
    this.validationErrors = [];
    
    this.checkIt = function(){
        for(var i = 0; i<this.fields.length;i++){
            var rules = $(this.fields[i]).data('rules');
            
            }
    };
}

function validationRules(){
    this.required = function(field){
        if(field.val() == ''){
            return false;
        }return true;
    };
}