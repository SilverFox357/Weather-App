let weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.773201&lon=-111.933984&exclude=minutely,hourly&units=imperial&appid=1c1edf97afc959b7574363ff88f09454";

fetch(weatherURL).then(function (response) {

    response.json().then(function (data) {

        console.log(data);            
    });