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

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}
export async function loadHeaderFooter() {
  try{
    const headerTemplate = await loadTemplate('../partials/header.html');
    const footerTemplate = await loadTemplate('../partials/footer.html');

    console.log(headerTemplate);
    console.log(footerTemplate);

    const headerElement = document.querySelector('#main-header');
    const footerElement = document.querySelector('#main-footer');


    //renderWithTemplate(headerTemplate, headerElement);
    //renderWithTemplate(footerTemplate, footerElement);
  } catch (error) {
    console.error('Error loading header and footer');
  }
}

export function generateTemplate(city){

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  try {
    const response = fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = response.json();
    console.log('Weather Data:', data);

    const template = `<div class='box'>
            <div class='head-box'>
                 <h2>Antsiranana</h2>
                 
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
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}