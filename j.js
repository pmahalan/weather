$(document).ready(function () {
    //in jQuery, what does .ready do???

    const weatherUrl = "https://openweathermap.org/api"

    //https://openweathermap.org/apiEdinburgh2e7aa3ec88b7d2439a8b916c6274910c
    //https://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22

    //https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid="


    const weatherApiKey = "2e7aa3ec88b7d2439a8b916c6274910c"
    //our API URL and key.

    const query = weatherUrl + "Edinburgh" + weatherApiKey
    //console.log(query)
    //we set 'query' equal to weather url + a city + api key.
    //will console logging this display weather facts for Edinburgh???

    function currentWeather(searchValue) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=2e7aa3ec88b7d2439a8b916c6274910c",
            type: "GET"
        }).then(function (response) {
            console.log(response)
            var title = $(".today").html("<h1>" + response.name + " Weather Details</h1>" + "Temperature" + response.main.temp);
            //THIS WORKS ^ refer to this!!
        })
    }
    //in the function above:
    // (1) in line 15 there's c&units=imperial, to convert from celcius to farenheit, but does that work? 
    //(it was presented during the startup, looks wrong..
    // (2) in line 19, it's referring to a class of 'today'. will weatherAPI know what to do with this?
    // we haven't given anything a class of 'today'.

    function getForecast(searchValue) {
        $.ajax({
            url: "https://openweathermap.org/api" + searchValue + "2e7aa3ec88b7d2439a8b916c6274910c",
            type: "GET"
        }).then(function (response) {
            console.log(reponse)

            $(".forecast").html("<p>Feels like" + response.list[0].main.feels_like + "</p>");
            //The line above should get the forecast for 'searchValue'!!! if you look at the JS object in the console log, 'feels like' should be under main.
            //Repeat this process - line 35 - for each element. 
            //Humidity, wind speed, UV index. (UV index might coe fromt another api??)
        })
    }
    //above in line 35, it says '.forecast' but i haven't given anything a class of forecast...
    //

    function getUV(lat, lon) {
        $.ajax({
            ulr: "https://openweathermap.org/api" + "2e7aa3ec88b7d2439a8b916c6274910c" + "c&lat" + lat + "&lon" + lon,
            type: "GET"
        }).then(function (response) {
            console.log(response)

            $(".uv").html("<p>uv" + response.value + "</p>");
        })
    }
    $(".search-button").on("click", function () {
        var searchValue = $("#search-value").val()
        console.log(searchValue)
        //search weather function here (search value)

        currentWeather(searchValue)
        getForecast(searchValue)
        getUV(response.coord.lat, response.coord.lon)
    })
})
