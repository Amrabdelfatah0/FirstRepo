function Login(){
    var username=$("UserNameTextv").val();
    var password=$("#PasswordTextv").val();
    
    var formValidation = inputValidation();
    if (formValidation==true) { 
         $("#loginFeedback").show("slow");
    }
     else {
        alert("fill inputs first");
    }
}
function gon(){
    var username=$("UserNameTextv").val();
    var password=$("#PasswordTextv").val();
    var formValidation = inputValidation();
     if (formValidation==true) { 
          $("#modalContent").fadeIn("slow");
    }
     else {
        alert("fill inputs first");
    }

}




function clearInputs(){
    $("#UserNameTextv").val("");
    $("#PasswordTextv").val("");
}





function inputValidation(){
    var Valid;
    var username=$("#UserNameTextv").val();
    var password=$("#PasswordTextv").val();
   
    if (username!=""&&password!="") {
        Valid=true;
    } else {
        Valid=false;
    }
    return Valid;
}