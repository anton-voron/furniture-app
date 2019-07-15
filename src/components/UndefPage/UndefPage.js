import React from 'react';
import { Link } from 'react-router-dom';

import './UndefPage.css';

const UndefPage = () => {

  	return (
  		<section className = "absolute-central">
	  		<div className = "text-center wrapper-central">
	  			<h2> At first you have to enter your name </h2> 
	  			<Link to="/"className="submit-button gradient-border wrapper-central m-5">Login</Link>
	  		</div>
  		</section>
  	)
};

export default UndefPage;