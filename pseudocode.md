1. When user goes onto site
    header
    search bar
    Main panel that will dynamicaly display
        city name (with todays date)
        Humidity
        wind speed
        UV index
            will write a conditional statement that the color will indicuate the UV level
    5 day forecast widget display   
        date
        weather icon/picture
        temp
        Humidity

    if the user has already searched a city
        it will be saved for them to click on again in the future. (to their local storage!?)

    notes

    1. get API key from open weather (I think you already got this last night.)
    2. create an on-click event for the search button.
    3. create a function to search for the weather. 
        make an ajax call to the current weather api
        append data to the page
    4. create a function to get the forecast 
        make an ajax call to the forecast API
        append that to the page
    5. create a function for the UV index
        make AJAX call to the UV API and append that to the searchWeather function (or whatever you name your function!)
        