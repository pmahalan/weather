$(document).ready(function() {
    //.ready basically lets jQuery run when the page has loaded and when everything's ready...

    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    const weatherApiKey = "&APPID=2e7aa3ec88b7d2439a8b916c6274910c"
    //our API URL and key.
//__________________________________________________________________________________________________

//__________________________________________________________________________________________________

    $(".search-button").on("click", function () {
        var searchValue = $("#search-value").val()

        Temperature(searchValue)
        wind(searchValue)
        getUV(response.coord.lat, response.coord.lon)

    })
//__________________________________________________________________________________________________

//__________________________________________________________________________________________________

    function Temperature(searchValue) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=2e7aa3ec88b7d2439a8b916c6274910c",
            type: "GET"
        }).then(function (response) {
            console.log(response)
            var title = $(".today").html("<h1>" + response.name + " Current Weather Details</h1>" + "Temperature" + response.main.temp);
            //THIS WORKS ^ refer to this!!
        })
    }
//__________________________________________________________________________________________________

//__________________________________________________________________________________________________

    function wind(searchValue) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=2e7aa3ec88b7d2439a8b916c6274910c",
            type: "GET"
        }).then(function (response) {
            console.log(reponse)
            $(".windspeed").html("<p>Wind speed: " + response.wind.speed + "</p>");
        })
    }
//__________________________________________________________________________________________________

//__________________________________________________________________________________________________

    function getUV(lat,lon) {
        $.ajax({
            ulr: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=2e7aa3ec88b7d2439a8b916c6274910c" + "c&lat" + lat + "&lon" + lon,
            type: "GET"
        }).then(function (response) {
            console.log(response)
            $(".uv").html("<p>uv index:" + response.value + "</p>");
        })
    }
//__________________________________________________________________________________________________

//__________________________________________________________________________________________________

Temperature(searchValue)
feelsLike(searchValue)
getUV(response.coord.lat, response.coord.lon)
})
