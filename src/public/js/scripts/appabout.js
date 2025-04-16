
import { generateTemplate, loadHeaderFooter,getParam, generateTemplateRegions, generateTemplatePageCity } from '../modules/utils.mjs';
import data from '../modules/data.mjs';


//Funtcion
const page = getParam('page');
//Initiate Variable 


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

