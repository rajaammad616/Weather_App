const Key = "3de15bd57be09ceea6530ae8de6493f4";
const URL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input= document.querySelector("#searchByCity");
const searchButton= document.querySelector("#Btn");
const Icon=document.querySelector("#icon");

async function getTemp(city) {
     const response= await fetch(URL + city + `&appid=${Key}`)
     let data= await response.json();
     console.log(data);
     
     

     document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°C";
     document.querySelector("#city").innerHTML=data.name;
     document.querySelector("#humidity").innerHTML=Math.round(data.main.humidity) + "%";
     document.querySelector("#wind").innerHTML=Math.round(data.wind.speed) + "km/h";

     if(data.weather[0].main=="Rain"){
          Icon.src="assets/rains.png";
     } else if(data.weather[0].main=="Clouds"){
          Icon.src="assets/clouds.png";
     } else if(data.weather[0].main=="Mist"){
          Icon.src="assets/mist.png";
     } else if(data.weather[0].main=="Snow"){
          Icon.src="assets/snow.png";
     } else if(data.weather[0].main=="Drizzle"){
          Icon.src="assets/drizzle.png";
     } else if(data.weather[0].main=="Clear"){
          Icon.src="assets/sun.png";
     }

}

searchButton.addEventListener("click", ()=>{
     getTemp(input.value);
})
