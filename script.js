//store cookie image in a variable
const cookie = document.querySelector(".cookie");

// wrap all the JS code from version 1 in a function called generateAdvice
function generateAdvice() {
  let request = new XMLHttpRequest();
  let url = "https://api.adviceslip.com/advice";
  request.open("GET",url, true);
  request.onload = function() {
    let data = JSON.parse(this.response);
    //confirm  API server is okay
    if(request.status >=200 && request.status < 400) {
    $("#advice").text(data.slip.advice);
     

  }
}


request.send();
};


cookie.addEventListener("click", generateAdvice);