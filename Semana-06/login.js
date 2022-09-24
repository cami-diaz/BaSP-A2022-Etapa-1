window.onload = function () {
    var form = document.getElementById("form");
    form.addEventListener("blur", function( event ) {
  event.target.style.background = "#AACE9B";
}, true);
    form.addEventListener("focus", function( event ) {
  event.target.style.background = "white";
}, true);

    var loginButton = document.getElementsByClassName("loginButton");
    loginButton.onclick = function(){
        


    }
}
