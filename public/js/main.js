
const cityname = document.getElementById('cityName');
const submitbtn = document.getElementById('searchBtn');
const city_name = document.getElementById('city_name');
// const APIkey = "63524f22716a3f8e4cb530a44e0269b0";
// const ApiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune";

const temp_status = document.getElementById("temp_status");
const temp_real_value = document.getElementById("temp_real_value");
const Datahide = document.querySelector('.midle_layer');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;
   
    if(cityVal === ""){
        city_name.innerText =`Please write the city name before search`;
        Datahide.classList.add('data_hide')
    }else{
        try{
           let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityVal}&appid=63524f22716a3f8e4cb530a44e0269b0`;
           const response = await fetch(url); 
           const data = await response.json();
           const arrData = [data];
           city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
           temp_real_value.innerText = arrData[0].main.temp;
          const tempMood = arrData[0].weather[0].main;
          if(tempMood ==='clear'){
            temp_status.innerHTML ="<i class='fas fa-sun' style = 'color:#eccc68;'></i>";
          } else if (tempMood ==='cloud') {
            temp_status.innerHTML=" <i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
          } else if (tempMood ==='Rain') {
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
          } else{
            temp_status.innerHTML="<i class='fas fa-sun' style = 'color: #eccc68;'></i>"
          }
          Datahide.classList.remove('data_hide')
           
        }catch{
            city_name.innerText =`Please write the city name properly`;
            Datahide.classList.add('data_hide')
        }
    }
}

submitbtn.addEventListener('click', getInfo);