import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <Link className="navbar-brand" to="/Catalog">Furniture App</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarColor01">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <Link className="nav-link" to="/catalog">Catalog</Link>
		      </li>
		    </ul>

		    <p className="name-title">Hello, {props.userName} </p>
		    <form className="form-inline my-2 my-lg-0">
		   	  <button className="btn btn-secondary my-2 my-sm-0" onClick = {props.logOut}>Log Out</button>
		    </form>
		  </div>
		</nav>
	);
}

export default Header;