
function seterror(id, error){
    getElementsById('formerror')[0].innerHTML= error;
}

function validateForm(){
    var returnval = true;

    var name=document.forms['myForm']['fname'].value;
    if (name.lenght<3){
        seterror('name', 'Name is too short');
        returnval = false;
    }
    
    var name=document.forms['myForm']['lname'].value;
    if (name.lenght<3){
        seterror('name', 'Name is too short');
        returnval = false;
    }

    var name=document.forms['myForm']['uage'].value;
    if (name.lenght>3){
        seterror('name', 'Wrong age input');
        returnval = false;
    }

    var name=document.forms['myForm']['unumber'].value;
    if (name.lenght !=10){
        seterror('name', 'Phone number should be of 10 digits');
        returnval = false;
    }

    return returnval;
}