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
      email.classList.add("inputSuccess");
      email.classList.remove("focusInput");
      email.classList.remove("inputWithError")
      emailError.classList.add("errorHidden");
    } else {
      email.classList.add("inputWithError")
      emailError.classList.add("errorDisplayed")
      email.classList.remove("focusInput")
    }
  }
  email.onfocus = function(){
    emailError.classList.add("errorHidden");
    emailError.classList.remove("errorDisplayed");
    email.classList.add("focusInput")
    email.classList.remove("inputSuccess")
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
      password.classList.add("inputSuccess");
      password.classList.remove("focusInput");
      password.classList.remove("inputWithError");
      passwordError.classList.add("errorHidden");
    } else {
      password.classList.add("inputWithError");
      passwordError.classList.add("errorDisplayed");
      password.classList.remove("focusInput");
    }
  }
  password.onfocus = function(){
    passwordError.classList.add("errorHidden");
    passwordError.classList.remove("errorDisplayed");
    password.classList.add("focusInput");
    password.classList.remove("inputSuccess");
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