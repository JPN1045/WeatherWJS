async function getWeather() {
    console.log("Getting weather data");
    const apiKey = "6506d19375a04f2f8ec65321252102";
    const city = document.getElementById("nameOfCity").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if( data.cod === "404"){
            alert("City not found");
            return;
        }

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("localTime").textContent = `⏱︎  ${data.location.localtime}`;
        document.getElementById("temperature").textContent = `🌡 ${data.current.temp_c}°C`;
        document.getElementById("condition").textContent = `☁ ${data.current.condition.text}`;
        document.getElementById("humidity").textContent = `💧༄ ${data.current.humidity}`;
    }catch(error){
        alert("Can't fetch weather data!!!")
    }
}