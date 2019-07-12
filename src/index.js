/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/


export default class FurnitureAPI {



_data = [];

idIndicator = 0;
listItemId = 0;

createItem = (newIndicator, newItemName, newManufacturer, newMaretial, newPrice) => {
  const idx = this._data.map(item => item.indicator).indexOf(newIndicator);
  if(idx === -1){
  	const newItemObj = {
      id: this.idIndicator++,
      indicator: newIndicator,
      list: [
        {listItemId: this.listItemId++,
         itemName: newItemName,
         manufacturer: newManufacturer,
         material: newMaretial,
         cost: newPrice
        }
      ]
    }
    this._data.push(newItemObj);
    console.log(this._data)
  } else {
  	const configIndicator = this._data[idx].list;
  	const idxList = configIndicator.find((item) => {
  		return (item.itemName === newItemName && item.manufacturer === newManufacturer)}) 
  	if(!idxList) {
  		const newListObj = {
  		 listItemId: this.listItemId++,
         itemName: newItemName,
         manufacturer: newManufacturer,
         material: newMaretial,
         cost: newPrice
        }
     configIndicator.push(newListObj);
     console.log(this._data)
  	} else { 
        console.log('this company, type and taste already exist in Data');
      }
  }
}

getData = async () => {
    return this._data.map(item => item);
};

getList = async (id) => {
    return this._data.find(item => item.id === id).list;
};

getItem = async (id) => {
    const lol = this.getList.find(item => item.id === id);
    console.log(lol)
};

};

const loh = new FurnitureAPI();
loh.createItem('Сhair', 'Кocking chair', 'Italia', 'Wood', 200)
loh.createItem('Сhair', 'Кocking chair', 'Germany', 'Wood', 200)
loh.createItem('СLOLhair', 'Кocking chair', 'Germany', 'Wood', 200)
loh.getData()
loh.getList(1)
loh.getItem(0)