$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            emailadd:{
                required:true,
                email:true

            },
            passwrd:{
                required:true,
                minlength:6,
                maxlength:8
            },
            day:{
                required:true,

            },
            gen:{
                required:true
            }
        },
        messages:
        {
            fname:{
                required:"true"
        
            }
        }
        
    })
})