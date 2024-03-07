const key = "7a4678a760609bad63de730dab5c171b"

function showScreenData(data, location, state){

    document.querySelector(".city").innerHTML = "Tempo em "+ location[0].name + ", "
    document.querySelector(".state-country").innerHTML = location[0].state + ", " + location[0].country
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(data.main.temp) + "°C"
    document.querySelector(".feels_like").innerHTML = "Sensação Térmica: " + Math.floor(data.main.feels_like) + "°C"
    document.querySelector(".temp-min-max").innerHTML = "Mínima: " + Math.floor(data.main.temp_min) + "°C e Máxima: " + Math.floor(data.main.temp_max) + "°C"

    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".text-prev").innerHTML = data.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade: " + data.main.humidity + "%"
}

async function searchCity(city){

    const location = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`).then( response => response.json())

    const lat = location[0].lat
    const lon = location[0].lon
    const state = location[0].state 

    console.log(location)

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    console.log(data)

    showScreenData(data, location, state)
}

function buttonClick(){
 
    const city = document.querySelector(".input-city").value
    searchCity(city)
}