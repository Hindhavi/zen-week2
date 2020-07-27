// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=cff08398c2a5fd36f2e2f0aca53fa28d', true)

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data)
}

// Send request
request.send()