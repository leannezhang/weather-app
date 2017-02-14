class WeatherApp {
    constructor() {
        // TODO: N-10
        // a map contains city, its current weather and 10 days forcast
        this.cityWeather = {}

        this.cityDropDownE = document.getElementById('cityDropdown')
        this.cityDropDownE.addEventListener('change', this.selectCity.bind(this), false)
        this.selectedCity = decodeURI(this.cityDropDownE.value)
        this.sendRequest(this.selectedCity)
    }

    selectCity(event) {
        // TODO: N-9
        console.log(event.target.value);
        this.selectedCity = decodeURI(event.target.value)
        if (!this.cityWeather[this.selectedCity]) {
            this.sendRequest(this.selectedCity)
        }
        else {
            this.displayCurrentWeather(this.selectedCity)
        }
        console.log(this.cityWeather)
    }

    sendRequest(city) {
        // TODO: N-8
        const format ='%22)&format=json'
        const base_uri = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}${format}`

        // TODO: N-7
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
        // TODO: N-6
        const item = json.query.results.channel.item
        // TODO: N-5
        if (item) {
            // add current weather
            this.cityWeather[city] = {}
            this.cityWeather[city].current = item['condition']
            this.cityWeather[city].forecast = item['forecast']
            this.displayCurrentWeather(city)
        }
    }

    displayCurrentWeather(city) {

        // TODO: N-4
        if (this.cityWeather[city]) {
            const cityE = document.querySelector('.current .city')
            cityE.textContent = city
            // TODO: N-3
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
        // TODO: Step N-2
        const forecastE = document.querySelectorAll('.forecast .item')
        // TODO: Step N-1
        const dateE = forecastE[0].querySelector('.date')
        const highTempE = forecastE[0].querySelector('.hightemp')
        const lowTempE = forecastE[0].querySelector('.lowtemp')
        const descriptionE = forecastE[0].querySelector('.description')
        dateE.textContent = forecastArray[0].day + ', ' + forecastArray[0].date
        highTempE.textContent = forecastArray[0].high + '°F'
        lowTempE.textContent = forecastArray[0].low + '°F'
        descriptionE.textContent = forecastArray[0].text
        // TODO: Step N
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

// TODO: N-11
const weatherApp = new WeatherApp()
