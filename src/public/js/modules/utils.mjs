// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}
export async function loadHeaderFooter() {
  try{
    const headerTemplate = await loadTemplate('../partials/header.html');
    const footerTemplate = await loadTemplate('../partials/footer.html');
  
    const headerElement = document.querySelector('#main-header');
    const footerElement = document.querySelector('#main-footer');
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
  } catch (error) {
    console.error('Error loading header and footer');
  }
}
async function getWeather(city) {
  const apikey = '2ba6bc17ae61fe3ec7a53f767a44d6c5';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
  }
}
function formatTime(timestamp) {
  const date = new Date(timestamp * 1000); 
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product
}
export async function generateTemplate(city){
 
  //const apiname = 'wdd231';

     let data = await getWeather(city);
    
   
        
      const weatherElement = document.querySelector('.weather');
      const template = `<div class='box'>
      <a href='/city/?city=${city}'>
              <div class='head-box'>
                   <h2>${city}</h2>
                   
              </div>
              <div class='body-box'>
                  <ul>
                      <li class='cont'><span id='temp'>${data['main'].temp}</span>°C <img alt='icon' src='http://openweathermap.org/img/wn/${data['weather'][0].icon}@2x.png' id='icon'><span id='currtemp'>${data['weather'][0].description}</span></li>
                      <li ><span>Humidity: </span><span class='cont' id='humidity'>${data['main'].humidity}</span></li>
                      <li ><span>Sunrise: </span><span class='cont' id='sunrise'>${formatTime(data['sys'].sunrise)}</span></li>
                      <li ><span>Sunset: </span><span class='cont' id='sunset'>${formatTime(data['sys'].sunset)}</span></li>
                   </ul>
  
              </div>
          </a>
      </div>`;
      weatherElement.innerHTML = weatherElement.innerHTML + template;
    }

    export async function generateTemplatePageCity(city){

    
         let data = await getWeather(city);
        
       
            
          const weatherElement = document.querySelector('.province');
          const template = `
                      
                       <h2>${city}</h2>
                       
                 
                      <div class = 'detail'>
                      <ul>
                          <li class='cont'><span id='temp'>${data['main'].temp}</span>°C <img alt='icon' src='http://openweathermap.org/img/wn/${data['weather'][0].icon}@2x.png' id='icon'><span id='currtemp'>${data['weather'][0].description}</span></li>
                          <li ><span>Humidity: </span><span class='cont' id='humidity'>${data['main'].humidity}</span></li>
                          <li ><span>Sunrise: </span><span class='cont' id='sunrise'>${formatTime(data['sys'].sunrise)}</span></li>
                          <li ><span>Sunset: </span><span class='cont' id='sunset'>${formatTime(data['sys'].sunset)}</span></li>
                       </ul>
                       </div>
      
                  
          `;
          weatherElement.innerHTML = template;
        }

    export async function generateTemplateRegions(city){
 
      //const apiname = 'wdd231';
    
         let data = await getWeather(city);
        
       
            
          const weatherElement = document.querySelector('.regions');
          const template = `<div class='box'>
                  <div class='head-box'>
                       <h2>${city}</h2>
                       
                  </div>
                  <div class='body-box'>
                      <ul>
                          <li class='cont'><span id='temp'>${data['main'].temp}</span>°C <img alt='icon' src='http://openweathermap.org/img/wn/${data['weather'][0].icon}@2x.png' id='icon'><span id='currtemp'>${data['weather'][0].description}</span></li>
                          <li ><span>Humidity: </span><span class='cont' id='humidity'>${data['main'].humidity}</span></li>
                          <li ><span>Sunrise: </span><span class='cont' id='sunrise'>${formatTime(data['sys'].sunrise)}</span></li>
                          <li ><span>Sunset: </span><span class='cont' id='sunset'>${formatTime(data['sys'].sunset)}</span></li>
                       </ul>
      
                  </div>
          </div>`;
          weatherElement.innerHTML = weatherElement.innerHTML + template;
        }
      
  


