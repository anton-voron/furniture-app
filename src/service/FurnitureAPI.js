export default class FurnitureAPI {
_data = [];
_listItem = [];

idIndicator = 0;
listItemId = 0;
_imageBase = 'https://starwars-visualguide.com/assets/img';

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
    } else { 
        console.log('this company, type and taste already exist in Data');
      }
  }
}

getData = () => {
    return this._data.map(item => item);
};

getList = (id) => {
  if(id!=null){
    const res = this._data.find(item => item.id === id).list;
    this._listItem = res;
    return this._listItem;
  }
};

getItem = (id) => {
  if(id!=null){
    const obj = this._listItem.reduce((accumulator, item) => {
          if(item.listItemId === id) {
            Object.assign(accumulator, item);
          }
          return accumulator;        }, {});
    console.log(obj)
    return obj;
  }
};

getItemImage = (id) => {
   return `${this._imageBase}/starships/${id}.jpg`
};

}