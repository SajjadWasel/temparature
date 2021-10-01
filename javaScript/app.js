const API_KEY = `87c31cf26d3b30752856499582f39e3a`;
const searchTemperature = () => {
    /* ---declaring the input and setting url--- */
    let cityInput = document.getElementById("city-input");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${API_KEY}&units=metric`;
    console.log(url);
    /* ------fetching the temperature------ */
    fetch(url)
        .then(res => res.json())
        .then(data => loadTemperature(data))
    /* ----clearing the input field */
    cityInput.value = "";
}

const setData = (id, text) => {
    document.getElementById(id).innerText = text;
}

/* -------loading the temperature--------- */
const loadTemperature = (allData) => {
    const city = setData("city-name", allData.name);
    const temperature = setData("temperature", allData.main.temp);
    const weather = setData("weather-status", allData.weather[0].main);
    // console.log(allData);
    const iconCode = allData.weather[0].icon;
    const icon = document.getElementById("weather-icon").setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}@2x.png`);
}