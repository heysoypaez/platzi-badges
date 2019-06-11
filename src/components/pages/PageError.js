import React, { Component } from 'react';
import "../styles/PageLoading.css"
import Loader from "../Loader.js"
import {Link} from "react-router-dom"

function PageError(props) {
	
		return (
				  <section className="Badges__error">
					  <h1>¡An error! "{props.error.message}" </h1>
					  <h2> I hate when this happens</h2>
					  <h3> But Hey! Go to <Link to="/badges/new"> New Badge </Link> there is not error, i am sure.</h3>
				  </section>
		);
	
}

export default PageError;
