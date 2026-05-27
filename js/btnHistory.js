import {date} from "./index.js"
import {time} from "./index.js"

class climateHistory {
    constructor(city, forecastImg, tempMax, tempMin, thermal, rain, humidity, pressure, visibility, forecast, wind, direcWind, latitude, longitude) {
        this.date = date()
        this.time = time()  
        this.city = city
        this.forecastImg = forecastImg
        this.tempMax = tempMax
        this.tempMin = tempMin
        this.thermal = thermal
        this.rain = rain
        this.humidity = humidity
        this.pressure = pressure
        this.visibility = visibility
        this.forecast = forecast
        this.wind = wind 
        this.direcWind = direcWind
        this.latitude = latitude
        this.longitude = longitude
    }
}
const arrayHistory = []

export function resultForecastHistory(dados) {
    const historyClimate = new climateHistory(
        dados.name, 
        dados.weather[0].icon, 
        Number(dados.main.temp_max).toFixed(0) + '°C', 
        Number(dados.main.temp_min).toFixed(0) + '°C', 
        Number(dados.main.feels_like).toFixed(0) + '°C',
        dados.clouds.all + '%',
        dados.main.humidity + '%', 
        dados.main.pressure + 'hPa',
        Number(dados.visibility / 1000).toFixed(0) + 'km',
        dados.weather[0].description,  
        dados.wind.speed + 'm/s',
        dados.wind.deg + '°',
        Number(dados.coord.lat).toFixed(2) + '°',
        Number(dados.coord.lon).toFixed(2) + '°')
        
        arrayHistory.push(historyClimate)
    }

 export const btnHistory = document.querySelector('#history')

btnHistory.addEventListener('click', () => {
    alert('Histórico de pesquisa enviado, para visualizá-lo acesse o console')
    console.log(arrayHistory)
})
