// a map contains city, its current weather and 10 days forcast
const cityWeather = {}

const cityDropDownE = document.getElementById('cityDropdown')
cityDropDownE.addEventListener('change', selectCity, false)

let selectedCity = decodeURI(cityDropDownE.value)
sendRequest(selectedCity)

function selectCity() {
    const selectedCityE = cityDropDownE.options[cityDropDownE.selectedIndex]
    selectedCity = selectedCityE.value
    if (!cityWeather[selectedCity]) {
        sendRequest(selectedCity)
    }
    else {
        displayCurrentWeather(selectedCity)
    }
    console.log(cityWeather)
}

function sendRequest(city) {
    // TODO: N-8
    //const city = selectedCity
    //const format ='%22)&format=json'
    //const base_uri = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}${format}`

    // TODO: N-7
    //$.getJSON(base_uri)
    //    .done(( json ) => {
    //        processResponse(city, json)
    //    })
    //    .fail(( jqxhr, textStatus, error ) => {
    //        const err = textStatus + ", " + error
    //        console.log( "Request Failed: " + err )
    //    })
}
// Assume the query is correct
function processResponse(city, json) {
    // TODO: N-6
    //const item = _.get(json, 'query.results.channel.item')
    // TODO: N-5
    //if (item) {
    //    // add current weather
    //    cityWeather[city] = {}
    //    cityWeather[city].current = item['condition']
    //    cityWeather[city].forecast = item['forecast']
    //    displayCurrentWeather(city)
    //}
}

function displayCurrentWeather(city) {

    // TODO: N-4
    //if (cityWeather[city]) {
        //const cityE = document.querySelector('.current .city')
        //cityE.textContent = city
        // TODO: N-3
        //const dateE = document.querySelector('.current .date')
        //const tempE = document.querySelector('.current .temp')
        //const descriptionE = document.querySelector('.current .description')
        //dateE.textContent = cityWeather[city].current.date
        //tempE.textContent = cityWeather[city].current.temp + '°F'
        //descriptionE.textContent = cityWeather[city].current.text
        //displayForecast(cityWeather[city].forecast)
    //}
}

function displayForecast(forecastArray) {
    // TODO: Step N-2
    //const forecastE = document.querySelectorAll('.forecast .item')
    // TODO: Step N-1
    //const dateE = forecastE[0].querySelector('.date')
    //const highTempE = forecastE[0].querySelector('.hightemp')
    //const lowTempE = forecastE[0].querySelector('.lowtemp')
    //const descriptionE = forecastE[0].querySelector('.description')
    //dateE.textContent = forecastArray[0].day + ', ' + forecastArray[0].date
    //highTempE.textContent = forecastArray[0].high + '°F'
    //lowTempE.textContent = forecastArray[0].low + '°F'
    //descriptionE.textContent = forecastArray[0].text
    // TODO: Step N
    //for (let i=0; i < forecastArray.length; i++) {
    //    const dateE = forecastE[i].querySelector('.date')
    //    const highTempE = forecastE[i].querySelector('.hightemp')
    //    const lowTempE = forecastE[i].querySelector('.lowtemp')
    //    const descriptionE = forecastE[i].querySelector('.description')
    //    dateE.textContent = forecastArray[i].day + ', ' + forecastArray[i].date
    //    highTempE.textContent = forecastArray[i].high + '°F'
    //    lowTempE.textContent = forecastArray[i].low + '°F'
    //    descriptionE.textContent = forecastArray[i].text
    //}
}