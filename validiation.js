function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
//on Keypress only alphabet---->onkeypress="return isAlphabetKey(event);"
function isAlphabetKey(evt)
{
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
    return false;
        return true;
}
function NoSpace(evt){
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((e.which>=65 && e.which<91) || (e.which==8 /**Here 8 if for the Backspace**/) || (e.which=="your key code"))
     
    return false;
        return true;
}
