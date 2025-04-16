
import { generateTemplate, loadHeaderFooter,getParam, generateTemplateRegions, generateTemplatePageCity } from '../modules/utils.mjs';
import data from '../modules/data.mjs';


//Funtcion
const town = getParam('city');
//Initiate Variable 
const titre = document.querySelector('#titreReg');
titre.innerText = `Regions of ${town}`;
(async function setTemplate(){
  const regions = new data('regions');
  const maps = new data('city');
  let region = await regions.getData();
  let map = await maps.getData();
  region = region.filter(item => item.Province === town);

  map = map.filter(item => item.City === town);
  const mapcont = document.querySelector('.map');
  mapcont.innerHTML = map[0].Map;
  generateTemplatePageCity(town)
  region.forEach(element => {
  generateTemplateRegions(element.Town);
  });

})();

//AIzaSyBoZTiXV2HW6XtjcxlTa2bGyoUEiuFh6KU
document.addEventListener('DOMContentLoaded', async () => {
await loadHeaderFooter();
const lastModDate = document.querySelector('#lastModified')
const currentYear = document.querySelector('#currentyear') 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = 'Last modification :'+ document.lastModified
});
//Get all the city here in Madagascar


const getWeekday = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
};

