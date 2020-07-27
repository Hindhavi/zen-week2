

var url ='https://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=cff08398c2a5fd36f2e2f0aca53fa28d'
fetch (url)
.then(res=>res.json())
.then(data=>console.log(data))