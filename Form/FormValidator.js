$(function(){
    var $userForm =  $("#form-main");
    if($userForm.length){
        $userForm.validate({
        rules : {
            FirstName : {

                required : true
            },
            LastName : {
                required : true
            },
            Address : {
                required : true
            },
            Phone : {
                required : true
            },
            Email : {
                email : true,
                required : true
            },
            Password : {
                required : true
            },
            RPassword : {
                required : true,
                equalTo : '#password'
            },
            Experience : {
                required : true
            },
            ChoicePhone : {
                required : true
            },
            ChoiceEmail : {
                required : true
            },
            Agreement : {
                required : true
            },
            Skills : {
                required : false
            }
        },
        messages : {
            FirstName : {
                required : 'First name is required'
            },
            LastName : {
                required : 'Last name is required'
            },
            Address : {
                required : 'Address is required'
            },
            Phone : {
                required : 'Phone is required'
            },
            Email : {
                required : 'Email is required',
                email : 'Please enter Valid Email'
            },
            Password : {
                required : 'Password is required'
            },
            RPassword : {
                required : 'Confirm Password is required',
                equalTo : 'Please Enter Same Password as Above'
                
            },
            Experience : {
                required : 'Experience is required'
            },
        },
        errorPlacement : function(error,element){
            if(element.is(":checkbox")){
                error.appendTo(element.parents(".choice,.agreement"));
            }
            else{
                error.insertAfter(element);
            }
        }
    })
    }
})