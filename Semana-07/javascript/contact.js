window.onload = function() {

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

  //name validation
  var name = document.getElementById('name');
  var nameError = document.getElementById ('name-error');

  function validateName(){
    if (name.value.length < 4 || numberValidator(name.value)){
      return false;
    }
    else{
      return true;
    }
  }

  name.onblur = function(){
    if (validateName(name.value)){
      name.style.border = "3px solid green";
      nameError.style.display="none";
    } else {
      name.style.border = "3px solid red";
      nameError.style.color="red";
      nameError.style.fontSize="20px";
      nameError.style.display="block";
      nameError.style.margin="7px 0";
    }
  }
  name.onfocus = function(){
    nameError.style.display = "none";
    name.style.border = "3px solid blue";

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

  
//Contact area validation
var contact = document.getElementById('contact');
var contactError = document.getElementById ('contact-error');

function validateContact(){
  if(contact.value !== "") {
    return true
  } else return false
}

contact.onblur = function(){
  if (validateContact(contact.value)){
      contact.style.border = "3px solid green";
      contactError.style.display="none";
  } else {
      contact.style.border = "3px solid red";
      contactError.style.color="red";
      contactError.style.fontSize="20px";
      contactError.style.display="block";
      contactError.style.margin="7px 0";
  }
}

contact.onfocus = function(){
  contactError.style.display = "none";
  contact.style.border = "3px solid blue";
}


  //message validation
var areMessage = document.getElementById('areaMessage');
var messageError = document.getElementById ('areaMessage-error');

function validateAreaMessage(){
  if (areMessage.value.length < 3){
    return false;
  }
  else{
    return true;
  }
}

areMessage.onblur = function(){
  if (validateAreaMessage(areMessage.value)){
    areMessage.style.border = "3px solid green";
    messageError.style.display="none";
  } else {
    areMessage.style.border = "3px solid red";
    messageError.style.color="red";
    messageError.style.fontSize="20px";
    messageError.style.display="block";
    messageError.style.margin="7px 0";
  }
}
areMessage.onfocus = function(){
  messageError.style.display = "none";
  areMessage.style.border = "3px solid blue";
}

//Button SEND
var form = document.getElementById('formulary');
form.addEventListener('submit',function(e){
  e.preventDefault();
  var errorFields = "";
  var result = true;
  if (!validateName()){
    errorFields += "name\n";
    name.style.border = "3px solid red";
    nameError.style.fontSize="20px";
    nameError.style.display="block";
    nameError.style.margin="7px 0";
    nameError.style.color="red";
    result = true;
  }
  if (!validateMail()){
    errorFields += "email\n";
    email.style.border = "3px solid red";
    emailError.style.fontSize="20px";
    emailError.style.display="block";
    emailError.style.margin="7px 0";
    emailError.style.color="red";
    result = true;
  }
  if (!validateContact()){
  errorFields+= "contact\n";
  contact.style.border = "3px solid red";
  contactError.style.fontSize="20px";
  contactError.style.display="block";
  contactError.style.margin="7px 0";
  contactError.style.color="red";
  result = true;
}
if (!validateAreaMessage()){
  errorFields+= "message\n";
  areMessage.style.border = "3px solid red";
  messageError.style.fontSize="20px";
  messageError.style.display="block";
  messageError.style.margin="7px 0";
  messageError.style.color="red";
  result = true;
}

if(validateName(name.value) && validateEmail(email.value) && validateContact(contact.value) && validateAreaMessage(areMessage.value)){
  alert("name: " + name.value + "\n email: "+ email.value + "\n contact: " + contact.value + "\n areMessage: " + areMessage.value);
  form.reset();
  name.style.border = "1.5px solid #373867";
  email.style.border = "1.5px solid #373867";
  contact.style.border = "1.5px solid #373867";
  areMessage.style.border = "1.5px solid #373867";
}

else if(result){
  alert("Please check the following fields for possible errors:\n" + errorFields);
}
});
}