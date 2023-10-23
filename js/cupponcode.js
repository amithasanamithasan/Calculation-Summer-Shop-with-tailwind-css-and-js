const buttoncupon = function buttoncupon(event){
    const Cuponcode=event.target.value;
    const inputfield= document.getElementById('user-input');
    inputfield.value=Cuponcode;

    const submitButton =document.getElementById('submit');
    if( inputfield.value== ""){
        submitButton.disabled=true;
    }
    else{
        submitButton.disabled = false;
    }
}