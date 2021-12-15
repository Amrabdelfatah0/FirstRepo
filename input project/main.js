function Login(){
    var username=$("#UserNameText").val();
    var password=$("#PasswordText").val();
    var email=$("#EmailText").val();
    var age=$("#AgeText").val();
    var formValidation = inputValidation();
    if (formValidation==true) { 
         $("#loginFeedback").show("slow");
    } else {
        alert("fill inputs first");
    }
}
function clearInputs(){
    $("#userNameTXT").val("");
    $("#passwordTXT").val("");
}

function inputValidation(){
    var Valid;
    var username=$("#userNameTXT").val();
    var password=$("#passwordTXT").val();
    var email=$("#EmailText").val();
    var age=$("#AgeText").val();

   
    if (username!=""&&password!=""&&email!=""&&age!="") {
        Valid=true;
    } else {
        Valid=false;
    }
    return Valid;
}