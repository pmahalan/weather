$(document).ready(function(){

    const weatherUrl = "http://api.openweather..."
    const weatherApiKey = "$appid=..."

function currentWeather(searchValue){
    $.ajax({
        url: weatherUrl + searchValue + weatherApiKey,
        type: "GET",
    }).then(function(response){
        console.log(response)
    })
    }

        $("search-button").on("click", function(){
            var serachValue = $("#search-value").serachValue

            //search weather function here (search value)
            alert("This works!")

            currentWeather(searchValue)
        })
})
