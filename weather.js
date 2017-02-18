class WeatherApp {
    constructor() {
        // TODO: 1: Create a data structure that stores the current weather and forecast for all cities
        this.cityWeather = {}

        // TODO: 2 Listen when a dropdown list is changed
        const cityDropDownE = document.getElementById('cityDropdown')
        cityDropDownE.addEventListener('change', this.selectCity.bind(this), false)
        const selectedCity = decodeURI(cityDropDownE.value)

        // TODO: 3 Fetch data for the current selected city
        this.sendRequest(selectedCity)
    }

    selectCity(event) {
        // TODO: 2-1: Display value
        console.log(event.target.value);
        const selectedCity = decodeURI(event.target.value)

        // TODO: 11: Get the city weather info or display it
        if (!this.cityWeather[selectedCity]) {
            this.sendRequest(selectedCity)
        }
        else {
            this.displayCurrentWeather(selectedCity)
        }
        console.log(this.cityWeather)
    }

    sendRequest(city) {
        // TODO: 4: Build query string to get weather information using Yahoo API
        const format ='%22)&format=json'
        const base_uri = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}${format}`

        // TODO: 5: Fetch data using getJSON
        $.getJSON(base_uri)
            .done(( json ) => {
                this.processResponse(city, json)
            })
            .fail(( jqxhr, textStatus, error ) => {
                const err = textStatus + ", " + error
                console.log( "Request Failed: " + err )
            })
    }

    processResponse(city, json) {
        // TODO: 6: access the weather information
        const item = json.query.results.channel.item
        // TODO: 7: store in the cityWeather object in our memory
        if (item) {
            // add current weather
            this.cityWeather[city] = {}
            this.cityWeather[city].current = item['condition']
            this.cityWeather[city].forecast = item['forecast']
            // Display current weather
            this.displayCurrentWeather(city)
        }
    }

    displayCurrentWeather(city) {

        // TODO: 8 Display weather in the DOM
        if (this.cityWeather[city]) {

            // TODO 9: display city name
            const cityE = document.querySelector('.current .city')
            cityE.textContent = city
            // TODO: 10: display date, temperature, and description
            const dateE = document.querySelector('.current .date')
            const tempE = document.querySelector('.current .temp')
            const descriptionE = document.querySelector('.current .description')
            dateE.textContent = this.cityWeather[city].current.date
            tempE.textContent = this.cityWeather[city].current.temp + '°F'
            descriptionE.textContent = this.cityWeather[city].current.text


            this.displayForecast(this.cityWeather[city].forecast)
        }
    }

    displayForecast(forecastArray) {
        // TODO: 12: get forecast element from the DOM
        const forecastE = document.querySelectorAll('.forecast .item')
        // TODO: 13: Display 1 day forecast
        const dateE = forecastE[0].querySelector('.date')
        const highTempE = forecastE[0].querySelector('.hightemp')
        const lowTempE = forecastE[0].querySelector('.lowtemp')
        const descriptionE = forecastE[0].querySelector('.description')
        dateE.textContent = forecastArray[0].day + ', ' + forecastArray[0].date
        highTempE.textContent = forecastArray[0].high + '°F'
        lowTempE.textContent = forecastArray[0].low + '°F'
        descriptionE.textContent = forecastArray[0].text

        // TODO: 14: display 10 days forecasts
        for (let i=0; i < forecastArray.length; i++) {
            const dateE = forecastE[i].querySelector('.date')
            const highTempE = forecastE[i].querySelector('.hightemp')
            const lowTempE = forecastE[i].querySelector('.lowtemp')
            const descriptionE = forecastE[i].querySelector('.description')
            dateE.textContent = forecastArray[i].day + ', ' + forecastArray[i].date
            highTempE.textContent = forecastArray[i].high + '°F'
            lowTempE.textContent = forecastArray[i].low + '°F'
            descriptionE.textContent = forecastArray[i].text
        }
    }
}

// Instantiate the weather app
const weatherApp = new WeatherApp()
