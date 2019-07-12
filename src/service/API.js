import FurnitureAPI from './FurnitureAPI.js';
import FurnitureData from './FurnitureData.js';



const API = new FurnitureAPI();

FurnitureData.forEach(item => API.createItem(item[0], item[1], item[2], item[3], item[4]));
console.log(API);

export default API;