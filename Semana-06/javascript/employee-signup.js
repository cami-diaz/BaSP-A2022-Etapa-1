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

  //lastName validation
  var lastName = document.getElementById('lastName');
  var lastNameError = document.getElementById ('lastName-error');
  function validateLastName(){
    if (lastName.value.length < 4 || numberValidator(lastName.value)){
      return false;
    }
    else{
      return true;
    }
  }

  lastName.onblur = function(){
    if (validateLastName(lastName.value)){
      lastName.style.border = "3px solid green";
      lastNameError.style.display="none";
    } else {
      lastName.style.border = "3px solid red";
      lastNameError.style.color="red";
      lastNameError.style.fontSize="20px";
      lastNameError.style.display="block";
      lastNameError.style.margin="7px 0";
    }
  }
  lastName.onfocus = function(){
    lastNameError.style.display = "none";
    lastName.style.border = "3px solid blue";
  }

  //dni validation
  var dni = document.getElementById('dni');
  var dniError = document.getElementById ('dni-error');

  function validateDni(){
      if (dni.value.length < 8){
          return false;
      }
      else{
          return true;
      }
  }

  dni.onblur = function(){
    if (validateDni(dni.value)){
      dni.style.border = "3px solid green";
      dniError.style.display="none";
    } else {
      dni.style.border = "3px solid red";
      dniError.style.color="red";
      dniError.style.fontSize="20px";
      dniError.style.display="block";
      dniError.style.margin="7px 0";
    }
  }
  dni.onfocus = function(){
    dniError.style.display = "none";
    dni.style.border = "3px solid blue";
  }

  //date of birth validation
  var date = document.getElementById('date');
  var dateError = document.getElementById ('birthDate-error');

  function validateDate(){
    if(date.value !== "") {
      return true
    } else return false
  }

  date.onblur = function(){
    if (validateDate(date.value)){
        date.style.border = "3px solid green";
        dateError.style.display="none";
    } else {
        date.style.border = "3px solid red";
        dateError.style.color="red";
        dateError.style.fontSize="20px";
        dateError.style.display="block";
        dateError.style.margin="7px 0";
    }
  }

  date.onfocus = function(){
    dateError.style.display = "none";
    date.style.border = "3px solid blue";
  }

  //phone validation
  var phone = document.getElementById('phone');
  var phoneError = document.getElementById ('phone-error');

  function validatePhone(){
      if (phone.value.length !== 10){
          return false;
      }
      else{
          return true;
      }
  }

  phone.onblur = function(){
    if (validatePhone(phone.value)){
      phone.style.border = "3px solid green";
      phoneError.style.display="none";
    } else {
      phone.style.border = "3px solid red";
      phoneError.style.color="red";
      phoneError.style.fontSize="20px";
      phoneError.style.display="block";
      phoneError.style.margin="7px 0";
    }
  }
  phone.onfocus = function(){
    phoneError.style.display = "none";
    phone.style.border = "3px solid blue";
  }

  //adress validation
  var adress = document.getElementById('adress');
  var adressError = document.getElementById('adress-error');
  function validateAdress(){
      var space = adress.value.indexOf(" ");
      if(adress.value.length >= 5 && space > 0 && numberValidator && letterValidator(adress.value)){
          return true;
      }
      else{
          return false;
      }
  }
  adress.onblur = function(){
    if (validateAdress(adress.value)){
      adress.style.border = "3px solid green";
      adressError.style.display="none";
    } else {
      adress.style.border = "3px solid red";
      adressError.style.color="red";
      adressError.style.fontSize="20px";
      adressError.style.display="block";
      adressError.style.margin="7px 0";
    }
  }
  adress.onfocus = function(){
    adressError.style.display = "none";
    adress.style.border = "3px solid blue";
  }

  //city validation
  var city = document.getElementById('city');
  var cityError = document.getElementById ('city-error');

  function validateCity(){
    if (city.value.length < 3){
      return false;
    }
    else{
      return true;
    }
  }

  city.onblur = function(){
    if (validateCity(city.value)){
      city.style.border = "3px solid green";
      cityError.style.display="none";
    } else {
      city.style.border = "3px solid red";
      cityError.style.color="red";
      cityError.style.fontSize="20px";
      cityError.style.display="block";
      cityError.style.margin="7px 0";
    }
  }
  city.onfocus = function(){
    cityError.style.display = "none";
    city.style.border = "3px solid blue";
  }

    //zip validation
    var zip = document.getElementById('zip');
    var zipError = document.getElementById ('zip-error');

    function validateZip(){
      if (zip.value.length < 4 || zip.value.length > 5){
        return false;
      }
      else{
        return true;
      }
    }

    zip.onblur = function(){
      if (validateZip(zip.value)){
        zip.style.border = "3px solid green";
        zipError.style.display="none";
      } else {
        zip.style.border = "3px solid red";
        zipError.style.color="red";
        zipError.style.fontSize="20px";
        zipError.style.display="block";
        zipError.style.margin="7px 0";
      }
    }
    zip.onfocus = function(){
      zipError.style.display = "none";
      zip.style.border = "3px solid blue";
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

  //repeatPassword validation
  var repeatPassword = document.getElementById('repeatPassword');
  var repeatPasswordError = document.getElementById ('repeatPassword-error');

  function validateRepeatPassword(){
    if (repeatPassword.value !== password.value || repeatPassword.value.length === 0){
      return false;
    }
    else{
      return true;
    }
  }

  repeatPassword.onblur = function(){
    if (validateRepeatPassword(repeatPassword.value)){
      repeatPassword.style.border = "3px solid green";
      repeatPasswordError.style.display="none";
    } else {
      repeatPassword.style.border = "3px solid red";
      repeatPasswordError.style.color="red";
      repeatPasswordError.style.fontSize="20px";
      repeatPasswordError.style.display="block";
      repeatPasswordError.style.margin="7px 0";
    }
  }
  repeatPassword.onfocus = function(){
    repeatPasswordError.style.display = "none";
    repeatPassword.style.border = "3px solid blue";
  }

    //Button
    var form = document.getElementById('formulary');
    form.addEventListener('submit',function(e){
      console.log(form)
        e.preventDefault();
        var errorFields = "";
        var result = true;
        if (!validateName()){
          errorFields += "Name\n";
          name.style.border = "3px solid red";
          nameError.style.fontSize="20px";
          nameError.style.display="block";
          nameError.style.margin="7px 0";
          nameError.style.color="red";
          result = true;
        }
        if (!validateLastName()){
          errorFields+= "Last Name\n";
          lastName.style.border = "3px solid red";
          lastNameError.style.fontSize="20px";
          lastNameError.style.display="block";
          lastNameError.style.margin="7px 0";
          lastNameError.style.color="red";
          result = true;
        }
        if (!validateDni()){
          errorFields+= "Dni\n";
          dni.style.border = "3px solid red";
          dniError.style.fontSize="20px";
          dniError.style.display="block";
          dniError.style.margin="7px 0";
          dniError.style.color="red";
          result = true;
        }
        if (!validateDate()){
          errorFields+= "Date\n";
          date.style.border = "3px solid red";
          dateError.style.fontSize="20px";
          dateError.style.display="block";
          dateError.style.margin="7px 0";
          dateError.style.color="red";
          result = true;
        }
        if (!validatePhone()){
          errorFields+= "Phone\n";
          phone.style.border = "3px solid red";
          phoneError.style.fontSize="20px";
          phoneError.style.display="block";
          phoneError.style.margin="7px 0";
          phoneError.style.color="red";
          result = true;
        }
      if (!validateAdress()){
        errorFields+= "Adress\n";
        adress.style.border = "3px solid red";
        adressError.style.fontSize="20px";
        adressError.style.display="block";
        adressError.style.margin="7px 0";
        adressError.style.color="red";
        result = true;
      }
      if (!validateCity()){
        errorFields+= "City\n";
        city.style.border = "3px solid red";
        cityError.style.fontSize="20px";
        cityError.style.display="block";
        cityError.style.margin="7px 0";
        cityError.style.color="red";
        result = true;
      }
      if (!validateZip()){
        errorFields += "Zip\n";
        zip.style.border = "3px solid red";
        zipError.style.fontSize="20px";
        zipError.style.display="block";
        zipError.style.margin="7px 0";
        zipError.style.color="red";
        result = true;
      }
      if (!validateMail()){
          errorFields += "E-Mail\n";
          email.style.border = "3px solid red";
          emailError.style.fontSize="20px";
          emailError.style.display="block";
          emailError.style.margin="7px 0";
          emailError.style.color="red";
          result = true;
      }
      if (!validatePassword()){
          errorFields += "Password\n";
          password.style.border = "3px solid red";
          passwordError.style.fontSize="20px";
          passwordError.style.display="block";
          passwordError.style.margin="7px 0";
          passwordError.style.color="red";
          result = true;
      }
      if (!validateRepeatPassword()){
        errorFields += "Repeat Password\n";
        repeatPassword.style.border = "3px solid red";
        repeatPasswordError.style.fontSize="20px";
        repeatPasswordError.style.display="block";
        repeatPasswordError.style.margin="7px 0";
        repeatPasswordError.style.color="red";
        result = true;
      }
  
      if(validateName(name.value) && validateLastName(lastName.value) && validateDni(dni.value) && validateDate(date.value) && validatePhone(phone.value) && validateAdress(adress.value) && validateCity(city.value) && validateZip(zip.value) && validateMail(email.value) && validatePassword(password.value) && validateRepeatPassword(repeatPassword.value)){
        alert("Name: " + name.value + "\n Last Name: "+ lastName.value + "\n DNI: " + dni.value + "\n Date: " + date.value + "\n Phone: " + phone.value + "\n Adress: " + adress.value + "\n City: " + city.value + "\n Zip: " + zip.value + "\n E-mail: " + email.value + "\n Password: " + password.value+"\n" + "\n Repeat Password: " + repeatPassword.value);
        form.reset();
        name.style.border = "1.5px solid #373867";
        lastName.style.border = "1.5px solid #373867";
        email.style.border = "1.5px solid #373867";
        dni.style.border = "1.5px solid #373867";
        date.style.border = "1.5px solid #373867";
        phone.style.border = "1.5px solid #373867";
        adress.style.border = "1.5px solid #373867";
        city.style.border = "1.5px solid #373867";
        password.style.border = "1.5px solid #373867";
        zip.style.border = "1.5px solid #373867";
        repeatPassword.style.border = "1.5px solid #373867";
      }
      else if(result){
        alert("Please check the following fields for possible errors:\n" + errorFields);
      }
    });
}