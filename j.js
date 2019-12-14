$(document).ready(function() {

    //on-click + search field function.
    $(".search-button").on("click", function() {
        var searchValue = $("#search-value").val()

        Temperatureandwindandhumidity(searchValue)
    })

    //From this API we're pulling info on temperature, windspeed, and humidity.
    function Temperatureandwindandhumidity(searchValue) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=2e7aa3ec88b7d2439a8b916c6274910c",
            type: "GET"
        }).then(function (response) {
            console.log(response)
            $(".temperature").html("<h1>" + response.name + " Current Weather Details</h1>" + "Temperature: " + response.main.temp);

            $(".windspeed").html("<p> Wind speed: </p>" + response.wind.speed);

            $(".humidity").html("<p> Humidity: </p>" + response.main.humidity);
        })
        }
    })

    // Since the above API doesn't offer information on UV index or a 5-day forecast, we're referring to a second one below. (DarkSky.)

    var darkkey = "9f68d2be222dbb1a918e1f5457bf6724/"
    var lat = 
    var lon = 

    function getUV(lat,lon) {

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkkey + lat + "," + lon,
            type: "GET"
        }).then(function(moreinfo) {
            console.log(moreinfo);
        })
    }