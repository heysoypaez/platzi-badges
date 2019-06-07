import React, { Component } from 'react';
import "./styles/NavBar.css";
import logo from "../images/logo.svg"

import {Link} from "react-router-dom"

 class NavBar extends Component {

	render() {

		return (
			<section className="NavBar">

				<Link className="NavBar-anchor" to="/">
				<img src={logo} alt="logo" />
					<h3 className="NavBar-title">
				 		<span className="NavBar-title-conference"> Conference  </span>  
				 		<span className="NavBar-title-badges"> Badges </span>
				 </h3>
				</Link>

			</section>
		);

	}
}


export default NavBar;