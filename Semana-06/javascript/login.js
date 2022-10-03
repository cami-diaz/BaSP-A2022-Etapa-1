window.onload = function(){

  function numberValidator(fullWord) {
    var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < fullWord.length; x ++) {
      if (numbersArray.includes(fullWord[x])) {
        return true;
      }
    }
    return false;
  }

  function letterValidator(fullWord) {
    var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var x = 0; x < fullWord.length; x ++) {
      if (letterArray.includes(fullWord[x])) {
        return true;
      }
    }
    return false;
  }

  //email validation
  var email = document.getElementById('email');
  var emailError = document.getElementById('email-error');
  var mailFormat = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  function validateMail(){ 
    if (email.value.match(mailFormat)){
        return true;
    }
    else{
        return false;
    }
  }

  email.onblur = function(){
    if (validateMail(email.value)){
      email.style.border = "3px solid green";
      emailError.style.display="none";
    } else {
      email.style.border = "3px solid red";
      emailError.style.color="red";
      emailError.style.fontSize="20px";
      emailError.style.display="block";
      emailError.style.margin="7px 0";
    }
  }
  email.onfocus = function(){
    emailError.style.display = "none";
    email.style.border = "3px solid blue";
  }

//password validation
var password = document.getElementById('password');
var passwordError = document.getElementById ('password-error');

function validatePassword(){
  if (password.value.length < 8 || !numberValidator(password.value) || !letterValidator(password.value)){
    return false;
  }
  else{
    return true;
  }
}

password.onblur = function(){
  if (validatePassword(password.value)){
    password.style.border = "3px solid green";
    passwordError.style.display="none";
  } else {
    password.style.border = "3px solid red";
    passwordError.style.color="red";
    passwordError.style.fontSize="20px";
    passwordError.style.display="block";
    passwordError.style.margin="7px 0";
  }
}
password.onfocus = function(){
  passwordError.style.display = "none";
  password.style.border = "3px solid blue";
}

//Button
var form = document.getElementById('formulary');
form.addEventListener('submit',function(e){
  console.log(form)
    e.preventDefault();
    var errorFields = "";
    var result = true;
  if (!validateMail()){
      errorFields += "email\n";
      email.style.border = "3px solid red";
      emailError.style.fontSize="14px";
      emailError.style.display="block";
      emailError.style.margin="7px 0";
      emailError.style.color="red";
      result = true;
  }
  if (!validatePassword()){
      errorFields += "Password\n";
      password.style.border = "3px solid red";
      passwordError.style.fontSize="14px";
      passwordError.style.display="block";
      passwordError.style.margin="7px 0";
      passwordError.style.color="red";
      result = true;
  }
  
  if(validateMail(email.value) && validatePassword(password.value)){
    alert("Email: " + email.value + "\n Password: " + password.value);
    form.reset();
    email.style.border = "1.5px solid #373867";
    password.style.border = "1.5px solid #373867";
  }
  else if(result){
    alert("Please check the following fields for possible errors:\n" + errorFields);
  }
});
}