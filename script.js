let valueSearch = document.getElementById('search');
let city = document.getElementById('city');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let clouds = document.querySelector('.clouds');
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit' ,(event)=>{
  event.preventDefault();
  if(valueSearch.value != '') {
    searchWeather();
  };
});

let id = '0299c2b01fb8d7d0b9b8c37c793dd5af';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
  fetch(url + '&q=' + valueSearch.value)
  .then(responsive => responsive.json())
  .then(data => {
    if(data.cod == 200) {
      city.querySelector('figcaption').innerHTML = data.name;
      city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
      temperature.querySelector('img').src = 'https://openweathermap.com/img/wn/'+data.weather[0].icon+'@4x.png';
      temperature.querySelector('figcaption span').innerHTML = Math.floor(data.main.temp);
      clouds.innerHTML = data.clouds.all;
      humidity.innerHTML = data.main.humidity;
      pressure.innerHTML = data.main.pressure;
      description.innerHTML = data.weather[0].description;
    }else {
      main.classList.add('error');
      setTimeout(() => {
        main.classList.remove('error');
      }, 1000);
    }
    valueSearch.value = '';
  })
}

const initApp = () => {
  valueSearch.value = 'Kathmandu';
  searchWeather();
}
initApp();