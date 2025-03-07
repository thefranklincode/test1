var a = new XMLHttpRequest();
console.log(Request);
request.open("get", "https://restcountries.com/v3.1/all", true)
request.send()
request.onload = function () {
  var data = request.responce
  var result = json.parse(data);


}



// Request.open("get", "http
// s://restcountries.com/v3.1/all")
// requestAnimationFrame.send()
