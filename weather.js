class WeatherApp {
    constructor() {
        // TODO: 1: Create a data structure that stores the current weather and forecast for all cities

        // TODO: 2 Listen when a dropdown list is changed


        // TODO: 3 Fetch data for the current selected city
    }

    selectCity(event) {
        // TODO: 2-1: Display value

        // TODO: 11: Get the city weather info or display it
        console.log(this.cityWeather)
    }

    sendRequest(city) {
        // TODO: 4: Build query string to get weather information using Yahoo API
        const format ='%22)&format=json'
        const base_uri = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}${format}`

        // TODO: 5: Fetch data using getJSON

    }

    processResponse(city, json) {
        // TODO: 6: access the weather information
        // TODO: 7: store in the cityWeather object in our memory

    }

    displayCurrentWeather(city) {

        // TODO: 8 Display weather in the DOM
    }

    displayForecast(forecastArray) {
        // TODO: 12: get forecast element from the DOM

        // TODO: 13: Display 1 day forecast

    }
}

// Instantiate the weather app
const weatherApp = new WeatherApp()
