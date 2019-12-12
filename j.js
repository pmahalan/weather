$(document).ready(function(){

    const weatherUrl = "http://api.openweather..."
    //put in the actual URL 
    const weatherApiKey = "$appid=..."
    //AND THIS with teh actual api key.


const query = weatherUrl + "dallas" + weatherApiKey
console.log(query)
    function currentWeather(searchValue) {

    }


function currentWeather(searchValue){
    $.ajax({
        url: weatherUrl + searchValue + weatherApiKey + "c&units=imperial",
        type: "GET",
    }).then(function(response){
        console.log(response)
        var title = $(".today").html("<h1>" + response name +" Weather Details</h1>" + "Temperature" + response.main.temp);
    })
    }

function getForecast (searchValue){
    $.ajax({
        url: "http://api.openweathe..." + searchValue +"apikey"
        type: "GET"
    }).then(function(response){
        console.log(reponse)

        $(".forecast").html("<p>Feels like"+ response.list[0].main.feels_like + "</p>");
    })
}

function getUV(lat, lon) {
    $.ajax({
        ulr: "openweathermaplink" + "apikey" + "c&lat" + lat + "&lon" + lon
        type: "GET",
        
    }).then(function(reponse){
        console.log(response)

        $(".uv").html("<p>uv" + response.value+ "</p>");
    })
}

        $("search-button").on("click", function(){
            var serachValue = $("#search-value").serachValue

            //search weather function here (search value)
            alert("This works!")

            currentWeather(searchValue)
            getForecast(searchValue)
            getUV(response.coord.lat,response.coord.lon)
        })
})
