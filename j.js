$(document).ready(function() {
    //.ready basically lets jQuery run when the page has loaded and when everything's ready...

    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    const weatherApiKey = "&APPID=2e7aa3ec88b7d2439a8b916c6274910c"
    //our API URL and key.

    //on-click + search field function.
    $(".search-button").on("click", function() {
        var searchValue = $("#search-value").val()

        Temperatureandwindandicon(searchValue)

    })

    //From this API we're pulling info on temperature, windspeed, and humidity.
    function Temperatureandwindandicon(searchValue) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=2e7aa3ec88b7d2439a8b916c6274910c",
            type: "GET"
        }).then(function (response) {
            console.log(response)
            $(".temperature").html("<h1>" + response.name + " Current Weather Details</h1>" + "Temperature: " + response.main.temp);
            //THIS WORKS ^ refer to this!!

            $(".windspeed").html("<p> Wind speed: </p>" + response.wind.speed);
            //^This SHOULD display the wind speed.

            $(".humidity").html("<p> Humidity: </p>" + response.main.humidity);

        })
    }
})
//_________________________________________
$.ajax({
    url: "https://weatherbit-v1-mashape.p.rapidapi.com",
    method: "GET"
}).then(function(BBeight) {
    console.log(BBeight);
})
