import React, { Component } from 'react';
import './App.css';
import API from '../../service/API.js';
import SideSelector from '../SideSelector/SideSelector.js';
import ItemList from '../ItemList/ItemList.js';
import Item from '../Item/Item.js';

class App extends Component {

	state ={
		data: API,
		selectItem: null,
		item: null
	}

	onIndicatorSelected = (id) => {
		this.setState({
			selectItem: id
		})
	}

	onItemSelected = (id) => {
		this.setState({
			item: id
		})
	}

	render() {
		const {data, selectItem, item} = this.state;
	  return (
	    <div className="container">
	    	<SideSelector data = {data.getData} onIndicatorSelected = {this.onIndicatorSelected}/>
	    	<section className = "row">
	    	 	<ItemList data={data.getList(selectItem)} img={data.getItemImage} onItemSelected = {this.onItemSelected}/>
	    	</section>
	    	<Item item={data.getItem(item)} img={data.getItemImage}/>
	    </div>
	  );
	}
}


export default App;
