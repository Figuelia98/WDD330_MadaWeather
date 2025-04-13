const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const apikey="2ba6bc17ae61fe3ec7a53f767a44d6c5"
const apiname="wdd231"
let datas ;
const sunset = document.querySelector("#sunset");
const sunrise = document.querySelector("#sunrise");
const temp = document.querySelector("#temp");
const currtemp = document.querySelector("#currtemp");
const icon = document.querySelector("#icon");
const humidity = document.querySelector("#humidity");

const sunset1 = document.querySelector("#sunset1");
const sunrise1 = document.querySelector("#sunrise1");
const temp1 = document.querySelector("#temp1");
const currtemp1 = document.querySelector("#currtemp1");
const icon1 = document.querySelector("#icon1");
const humidity1 = document.querySelector("#humidity1");

const sunset2 = document.querySelector("#sunset2");
const sunrise2 = document.querySelector("#sunrise2");
const temp2 = document.querySelector("#temp2");
const currtemp2 = document.querySelector("#currtemp2");
const icon2 = document.querySelector("#icon2");
const humidity2 = document.querySelector("#humidity2");

const container = document.querySelector(".extrait")
function displaybusiness(houses){
  houses.forEach((house)=>{
      container.innerHTML = container.innerHTML + ` <div class="house">
       <div class="body">
        <figure>
         <img src="${house.image}" alt="${house.type}" loading="lazy">
        <figcaption>${house.type}: ${house.tarif} $ / month</figcaption>
        </figure>
       
       </div>
       <div class="foot">
          <ul>
              <li>
                  <a href="mailto:${house.email}"><i class="fa-solid fa-envelope"></i> <span class="text"> Email</span></a>
              </li>
              <li>
                  <a href="tel:${house.phone}"><span class="text"><i class="fa-solid fa-phone"></i> Phone</span></a>
              </li>
          </ul>
       </div>
   </div>`
    });
}

  fetch('data/houses.json')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Parse the JSON content
})
.then(data => {
  datas = Array.isArray(data) ? data : [data];
  function getRandomSilverOrGold(objects, count = 4) {
    // Filter only objects with status "silver" or "gold"
    const filtered = objects.filter(obj => obj.status === "Avalaible");

    // Shuffle the filtered array randomly
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Return the first `count` elements (or fewer if not enough items)
    return shuffled.slice(0, Math.min(count, filtered.length));
} 
console.log(getRandomSilverOrGold(datas))
  displaybusiness(getRandomSilverOrGold(datas));

 
})
.catch(error => {
  console.error('Error loading the JSON file:', error);
});
const getWeekday = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
};





function formatTime(timestamp) {
  const date = new Date(timestamp * 1000); 
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}





async function getWeather() {
let city = "Antsiranana"
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Weather Data:", data);
    
temp.innerText = data["main"].temp
humidity.innerText = data["main"].humidity;
sunrise.innerText = formatTime(data["sys"].sunrise)
sunset.innerText = formatTime(data["sys"].sunset)
currtemp.innerText = data["weather"][0].description
icon.src = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }

  city = "Toamasina"
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Weather Data:", data);
    
temp1.innerText = data["main"].temp
humidity1.innerText = data["main"].humidity;
sunrise1.innerText = formatTime(data["sys"].sunrise)
sunset1.innerText = formatTime(data["sys"].sunset)
currtemp1.innerText = data["weather"][0].description
icon1.src = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
  city = "Mahajanga"
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Weather Data:", data);
    
temp2.innerText = data["main"].temp
humidity2.innerText = data["main"].humidity;
sunrise2.innerText = formatTime(data["sys"].sunrise)
sunset2.innerText = formatTime(data["sys"].sunset)
currtemp2.innerText = data["weather"][0].description
icon2.src = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
getWeather();

document.addEventListener("DOMContentLoaded", () => {
  const visitorMessage = document.getElementById("visitor-message");
  const lastVisit = localStorage.getItem("lastVisit")
  const nmodal = document.querySelector("#nmodal")
  const now = Date.now();
 console.log(lastVisit)
  if (!lastVisit) {
      visitorMessage.textContent = "Welcome to the best platform for seaching home to rend";
  } else {
      const daysDifference = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

       if(daysDifference < 1) {
          visitorMessage.textContent = "It is a pleasure to have you again";
      }
      else{
         visitorMessage.textContent ="Welcome again";
      }
  }
  nmodal.style.display = "block"

  localStorage.setItem("lastVisit", now);

});