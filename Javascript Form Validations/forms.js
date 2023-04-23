function validate(fName){
    var validFName = /^[1-4][A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}/;
    var validEmail = /@.com/
    if(!fName.value.match(valid) ){
        alert("Wrong First Name!!");
        return false;
    }else{
        alert("Form is Valid");
        return true;
    }

}
