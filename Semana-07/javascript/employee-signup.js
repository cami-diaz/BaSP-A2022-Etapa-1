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
      name.classList.add("inputSuccess");
      name.classList.remove("focusInput");
      name.classList.remove("inputWithError");
      nameError.classList.add("errorHidden");
    } else {
      name.classList.add("inputWithError");
      nameError.classList.add("errorDisplayed");
      name.classList.remove("focusInput");
    }
  }

  name.onfocus = function(){
    nameError.classList.add("errorHidden");
    nameError.classList.remove("errorDisplayed");
    name.classList.add("focusInput");
    name.classList.remove("inputSuccess");
    name.classList.remove("inputWithError");
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
      lastName.classList.add("inputSuccess");
      lastName.classList.remove("focusInput");
      lastName.classList.remove("inputWithError");
      lastNameError.classList.add("errorHidden");
    } else {
      lastName.classList.add("inputWithError");
      lastNameError.classList.add("errorDisplayed");
      lastName.classList.remove("focusInput");
    }
  }

  lastName.onfocus = function(){
    lastNameError.classList.add("errorHidden");
    lastNameError.classList.remove("errorDisplayed");
    lastName.classList.add("focusInput");
    lastName.classList.remove("inputSuccess");
    lastName.classList.remove("inputWithError");
  }

  //dni validation
  var dni = document.getElementById('dni');
  var dniError = document.getElementById ('dni-error');

  function validateDni(){
      if (dni.value.length < 8 || !numberValidator(dni.value)){
          return false;
      }
      else{
          return true;
      }
  }

  dni.onblur = function(){
    if (validateDni(dni.value)){
      dni.classList.add("inputSuccess");
      dni.classList.remove("focusInput");
      dni.classList.remove("inputWithError");
      dniError.classList.add("errorHidden");
    } else {
      dni.classList.add("inputWithError");
      dniError.classList.add("errorDisplayed");
      dni.classList.remove("focusInput");
    }
  }
  dni.onfocus = function(){
    dniError.classList.add("errorHidden");
    dniError.classList.remove("errorDisplayed");
    dni.classList.add("focusInput");
    dni.classList.remove("inputSuccess");
    dni.classList.remove("inputWithError");
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
      date.classList.add("inputSuccess");
      date.classList.remove("focusInput");
      date.classList.remove("inputWithError");
      dateError.classList.add("errorHidden");
    } else {
      date.classList.add("inputWithError");
      dateError.classList.add("errorDisplayed");
      date.classList.remove("focusInput");
    }
  }

  date.onfocus = function(){
    dateError.classList.add("errorHidden");
    dateError.classList.remove("errorDisplayed");
    date.classList.add("focusInput");
    date.classList.remove("inputSuccess");
    date.classList.remove("inputWithError");
  }

  //phone validation
  var phone = document.getElementById('phone');
  var phoneError = document.getElementById ('phone-error');

  function validatePhone(){
      if (phone.value.length !== 10 || !numberValidator(phone.value)){
          return false;
      }
      else{
          return true;
      }
  }

  phone.onblur = function(){
    if (validatePhone(phone.value)){
      phone.classList.add("inputSuccess");
      phone.classList.remove("focusInput");
      phone.classList.remove("inputWithError");
      phoneError.classList.add("errorHidden");
    } else {
      phone.classList.add("inputWithError");
      phoneError.classList.add("errorDisplayed");
      phone.classList.remove("focusInput");
    }
  }
  phone.onfocus = function(){
    phoneError.classList.add("errorHidden");
    phoneError.classList.remove("errorDisplayed");
    phone.classList.add("focusInput");
    phone.classList.remove("inputSuccess");
    phone.classList.remove("inputWithError");
  }

  //adress validation
  var adress = document.getElementById('adress');
  var adressError = document.getElementById('adress-error');
  function validateAdress(){
      var space = adress.value.indexOf(" ");
      if(adress.value.length >= 5 && space > 0 && numberValidator(adress.value) && letterValidator(adress.value)){
          return true;
      }
      else{
          return false;
      }
  }

  adress.onblur = function(){
    if (validateAdress(adress.value)){
      adress.classList.add("inputSuccess");
      adress.classList.remove("focusInput");
      adress.classList.remove("inputWithError");
      adressError.classList.add("errorHidden");
    } else {
      adress.classList.add("inputWithError");
      adressError.classList.add("errorDisplayed");
      adress.classList.remove("focusInput");
    }
  }

  adress.onfocus = function(){
    adressError.classList.add("errorHidden");
    adressError.classList.remove("errorDisplayed");
    adress.classList.add("focusInput");
    adress.classList.remove("inputSuccess");
    adress.classList.remove("inputWithError");
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
      city.classList.add("inputSuccess");
      city.classList.remove("focusInput");
      city.classList.remove("inputWithError");
      cityError.classList.add("errorHidden");
    } else {
      city.classList.add("inputWithError");
      cityError.classList.add("errorDisplayed");
      city.classList.remove("focusInput");
    }
  }
  city.onfocus = function(){
    cityError.classList.add("errorHidden");
    cityError.classList.remove("errorDisplayed");
    city.classList.add("focusInput");
    city.classList.remove("inputSuccess");
    city.classList.remove("inputWithError");
  }

  //zip validation
  var zip = document.getElementById('zip');
  var zipError = document.getElementById ('zip-error');

  function validateZip(){
    if (zip.value.length < 4 || zip.value.length > 5 || letterValidator(zip.value)){
      return false;
    }
    else{
      return true;
    }
  }

  zip.onblur = function(){
    if (validateZip(zip.value)){
      zip.classList.add("inputSuccess");
      zip.classList.remove("focusInput");
      zip.classList.remove("inputWithError");
      zipError.classList.add("errorHidden");
    } else {
      zip.classList.add("inputWithError");
      zipError.classList.add("errorDisplayed");
      zip.classList.remove("focusInput");
    }
  }
  zip.onfocus = function(){
    zipError.classList.add("errorHidden");
    zipError.classList.remove("errorDisplayed");
    zip.classList.add("focusInput");
    zip.classList.remove("inputSuccess");
    zip.classList.remove("inputWithError");
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
      email.classList.remove("inputWithError");
      emailError.classList.add("errorHidden");
    } else {
      email.classList.add("inputWithError");
      emailError.classList.add("errorDisplayed");
      email.classList.remove("focusInput");
    }
  }

  email.onfocus = function(){
    emailError.classList.add("errorHidden");
    emailError.classList.remove("errorDisplayed");
    email.classList.add("focusInput");
    email.classList.remove("inputSuccess");
    email.classList.remove("inputWithError");
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
    password.classList.remove("inputWithError");
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
      repeatPassword.classList.add("inputSuccess");
      repeatPassword.classList.remove("focusInput");
      repeatPassword.classList.remove("inputWithError");
      repeatPasswordError.classList.add("errorHidden");
    } else {
      repeatPassword.classList.add("inputWithError");
      repeatPasswordError.classList.add("errorDisplayed");
      repeatPassword.classList.remove("focusInput");
    }
  }
  repeatPassword.onfocus = function(){
    repeatPasswordError.classList.add("errorHidden");
    repeatPasswordError.classList.remove("errorDisplayed");
    repeatPassword.classList.add("focusInput");
    repeatPassword.classList.remove("inputSuccess");
    repeatPassword.classList.remove("inputWithError");
  }
    //Button
    var form = document.getElementById('formulary');
    var create = document.getElementById('create');
    create.addEventListener('click', createEvent);
  
    function createEvent() {
      if (
        validateName(name.value)
        && validateLastName(lastName.value)
        && validateDni(dni.value)
        && validateDate(date.value)
        && validatePhone(phone.value)
        && validateCity(city.value)
        && validateZip(zip.value)
        && validateMail(email.value)
        && validatePassword(password.value)
        && validateRepeatPassword(repeatPassword.value)
      ) {
          fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${name.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${date.value}&phone=${phone.value}&address=${adress.value}&city=${city.value}&zip=${zip.value}&email=${email.value}&password=${password.value}&repeatPassword=${repeatPassword.value}`)
            .then(response => response.json())
            .then(data => {
              if(data.success) {
              localStorage.setItem('name', name.value);
              localStorage.setItem('lastName', lastName.value);
              localStorage.setItem('dni', dni.value);
              localStorage.setItem('date', date.value);
              localStorage.setItem('phone', phone.value);
              localStorage.setItem('adress', adress.value);
              localStorage.setItem('city', city.value);
              localStorage.setItem('zip', zip.value);
              localStorage.setItem('email', email.value);
              localStorage.setItem('password', password.value);
              localStorage.setItem('repeatPassword', repeatPassword.value);
              alert('Sign up successful! Name: ' + name.value
              + '. Surname: ' + lastName.value
              + '. DNI: ' + dni.value
              + '. Date of birth: ' + date.value
              + '. Phone Number: ' + phone.value
              + '. Address: ' + adress.value
              + '. City: ' + city.value
              + '. Postcode: ' + zip.value
              + '. Email: ' + email.value
              + '. Password: ' + password.value
              + '. Repeat Password: ' + repeatPassword.value + '. Please, confirm.');
              // form.reset();
              name.classList.remove("inputSuccess");
              lastName.classList.remove("inputSuccess");
              dni.classList.remove("inputSuccess");
              date.classList.remove("inputSuccess");
              phone.classList.remove("inputSuccess");
              adress.classList.remove("inputSuccess");
              city.classList.remove("inputSuccess");
              zip.classList.remove("inputSuccess");
              email.classList.remove("inputSuccess");
              password.classList.remove("inputSuccess");
              repeatPassword.classList.remove("inputSuccess");
            }})
              .catch(error => console.error(error));
      } else {
        if (!validateName()){
          name.classList.add("inputWithError");
          nameError.classList.add("errorDisplayed");
          name.classList.remove("focusInput");
        }
        if (!validateLastName()){
          lastName.classList.add("inputWithError");
          lastNameError.classList.add("errorDisplayed");
          lastName.classList.remove("focusInput");
        }
        if (!validateDni()){
          dni.classList.add("inputWithError");
          dniError.classList.add("errorDisplayed");
          dni.classList.remove("focusInput");
        }
        if (!validateDate()){
          date.classList.add("inputWithError");
          dateError.classList.add("errorDisplayed");
          date.classList.remove("focusInput");
        }
        if (!validatePhone()){
          phone.classList.add("inputWithError");
          phoneError.classList.add("errorDisplayed");
          phone.classList.remove("focusInput");
        }
      if (!validateAdress()){
        adress.classList.add("inputWithError");
        adressError.classList.add("errorDisplayed");
        adress.classList.remove("focusInput");
      }
      if (!validateCity()){
        city.classList.add("inputWithError");
        cityError.classList.add("errorDisplayed");
        city.classList.remove("focusInput");
      }
      if (!validateZip()){
        zip.classList.add("inputWithError");
        zipError.classList.add("errorDisplayed");
        zip.classList.remove("focusInput");;
      }
      if (!validateMail()){
        email.classList.add("inputWithError");
        emailError.classList.add("errorDisplayed");
        email.classList.remove("focusInput");
      }
      if (!validatePassword()){
        password.classList.add("inputWithError");
        passwordError.classList.add("errorDisplayed");
        password.classList.remove("focusInput");
      }
      if (!validateRepeatPassword()){
        repeatPassword.classList.add("inputWithError");
        repeatPasswordError.classList.add("errorDisplayed");
        repeatPassword.classList.remove("focusInput");
      }
        alert('Please, check you information is correct.');
        throw new Error
      }
    };
  }