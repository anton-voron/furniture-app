import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header.js';
import UndefPage from '../UndefPage/UndefPage.js';
import Login from '../Login/Login.js';
import API from '../../service/API.js';
import SideSelector from '../SideSelector/SideSelector.js';
import ItemList from '../ItemList/ItemList.js';
import IndexItem from '../Item/IndexItem.js';


import { HashRouter, Route } from 'react-router-dom';



class App extends Component {

	state ={
		data: API,
		selectItem: null,
		item: null,
		userName: '',
		isLoggedIn: false,
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

	onLogin = (name) => {
  		return this.setState({
  			userName: name,
  			isLoggedIn: !this.state.isLoggedIn})
  	}

  	logOut = (evt) => {
  		return this.setState({
  			userName: '',
  			isLoggedIn: !this.state.isLoggedIn
  		})
  	}

	render() {
		const {data, selectItem, item, userName, isLoggedIn} = this.state;
		  return (
		  	<HashRouter> 
				  	<Route path="/" exact={true} render={() => <Login onLogin={this.onLogin}/> } />
				  	<Route path="/catalog"
				  		render = {() => {
				  			if (isLoggedIn) { 
				  			return ( 
				  			<div>
					  			<Header logOut = {this.logOut} userName={userName}/>
						    	<section className = "row container">
							    	<SideSelector data = {data.getData} onIndicatorSelected = {this.onIndicatorSelected}/>
							    	<ItemList data={data.getList(selectItem)} img={data.getItemImage} onItemSelected = {this.onItemSelected}/> 
						    	</section>
					    	</div>)
				  		} else {
				  			return ( <UndefPage />)
				  		}    
					    	 }} />
			    	<Route  path ='/item/:id' 
			    	render = {({match, location, history}) => {
			    	match.params.id = item;
			    		if (isLoggedIn) {
			    		return (
			    			<div>
				    			<Header logOut = {this.logOut} userName={userName}/>
				    			<section className = "container">
				    				<IndexItem item = {data.getItem(item)} img={data.getItemImage} />
				    			</section>
			    			</div> 
			    			) }
			    		else { return ( <UndefPage />)}
			    	} } />
		    </HashRouter>
		   );
		
	}
}


export default App;
