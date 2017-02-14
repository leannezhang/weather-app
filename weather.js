// a map contains city, its current weather and 10 days forcast
var cityWeather = {};

var cityDropDownE = document.getElementById('cityDropdown');
cityDropDownE.addEventListener('change', selectCity, false);

var selectedCity = decodeURI(cityDropDownE.value);
sendRequest(selectedCity);

function selectCity(event) {
    var selectedCityE = cityDropDownE.options[cityDropDownE.selectedIndex];
    selectedCity = selectedCityE.value;
    if (!cityWeather[selectedCity]) {
        sendRequest(selectedCity);
    }
    else {
        displayCurrentWeather(selectedCity);
    }
    console.log(cityWeather);
}

function sendRequest(city) {
    var city = selectedCity;
    var format ='%22)&format=json';
    var base_uri = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}${format}`;

    $.getJSON(base_uri)
        .done(function( json ) {
            processResponse(city, json);
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}
// Assume the query is correct
function processResponse(city, json) {
    var item = _.get(json, 'query.results.channel.item');
    if (item) {
        // add current weather
        cityWeather[city] = {};
        cityWeather[city].current = item['condition'];
        cityWeather[city].forecast = item['forecast'];
        displayCurrentWeather(city);
    }
}

function displayCurrentWeather(city) {

    if (cityWeather[city]) {
        var cityE = document.querySelector('.current .city');
        var dateE = document.querySelector('.current .date');
        var tempE = document.querySelector('.current .temp');
        var descriptionE = document.querySelector('.current .description');
        cityE.textContent = city;
        dateE.textContent = cityWeather[city].current.date;
        tempE.textContent = cityWeather[city].current.temp + '°F';
        descriptionE.textContent = cityWeather[city].current.text;
        displayForecast(cityWeather[city].forecast);
    }
}

function displayForecast(forecastArray) {
    if (forecastArray.length !== 10) {
        console.log('forecast should be 10 days');
        return ;
    }
    var forecastE = document.querySelectorAll('.forecast .item');
    for (var i=0; i < forecastArray.length; i++) {
        var dateE = forecastE[i].querySelector('.date');
        var highTempE = forecastE[i].querySelector('.hightemp');
        var lowTempE = forecastE[i].querySelector('.lowtemp');
        var descriptionE = forecastE[i].querySelector('.description');
        dateE.textContent = forecastArray[i].day + ', ' + forecastArray[i].date;
        highTempE.textContent = forecastArray[i].high + '°F';
        lowTempE.textContent = forecastArray[i].low + '°F';
        descriptionE.textContent = forecastArray[i].text;
    }
}