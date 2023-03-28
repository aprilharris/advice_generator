let request = new XMLHttpRequest();
let url = "https://api.adviceslip.com/advice";

request.open("GET", url, true );

request.onload = function() {
  //code block goes below this line
  let data = JSON.parse(this.response);
   if(request.status >= 200 && request.status < 400) {
    $("#advice").text(data["slip"].advice );
   }
};


request.send();






// //create XHR request
// let request = new XMLHttpRequest();
// //store api in url in a variable 
// let url = "https://api.adviceslip.com/advice";
// //perpare the request 
// request.open("GET", url, true);
// //create onLoad event handler
// request.onload = function() {
  
//   let data = JSON.parse(this.response);
  
// };
// request.onload = function() {

// //parse JSON data and make it readable 
//   let data = JSON.parse(this.response);
//   if(request.status >= 200 && request.status < 400) {
//     $("#advice").text(data["slip"].advice);
//   }

  
// };
  


// //send request
// request.send();