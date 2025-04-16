
import { generateTemplate, loadHeaderFooter } from '../modules/utils.mjs';
import data from '../modules/data.mjs';


//Funtcion

//Initiate Variable 

(async function retrievecity(){
  const cities = new data('city');
  let citys = await cities.getData();

  citys.forEach(element => {
   generateTemplate(element.City);
  });

})();


document.addEventListener('DOMContentLoaded', async () => {
await loadHeaderFooter();
const lastModDate = document.querySelector('#lastModified')
const currentYear = document.querySelector('#currentyear') 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = 'Last modification :'+ document.lastModified
});
//Get all the city here in Madagascar

const container = document.querySelector('.extrait')

const getWeekday = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
};

