$(document).ready(function(){
    $("#fname").focus();

    $("#contact_us").validate({
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            }
        }
    });
});