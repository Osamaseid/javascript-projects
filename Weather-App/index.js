

const apiKey = "6fd6fb85a557a160626a2c850795d2b9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=jimma";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


 async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response == "404"){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
      var data = await response.json();
      
      document.querySelector(".temp").Math.round(".innerHTML=data.main.temp") + "°C";
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
      document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    

    if(data.weather[0].main ==="Clouds"){
      weatherIcon.src ="images/cloud.png";
    }
    else if(data.weather[0].main === "Rain"){
      weatherIcon.src = "images/rain.png";
    }
    else if(data.wether[0].main === "Clear"){
      weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Drizzle"){
      weatherIcon.src = "images/drizzle.png";

    }
    else if(data.weather[0] === "Mist"){
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"; 
    document.querySelector(".error").style.display = "none";

 }
}
 searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);
 })

 checkWeather();