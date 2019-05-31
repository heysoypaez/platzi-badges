import React, { Component } from 'react';
import "./styles/NavBar.css";
import logo from "../images/logo.svg"

 class NavBar extends Component {

	render() {

		return (
			<div className="NavBar">

				<a className="NavBar-anchor" href="/">
				<img src={logo} alt="logo" />
					<h3 className="NavBar-title">
				 		<span className="NavBar-title-conference"> Conference  </span>  
				 		<span className="NavBar-title-badges"> Badges </span>
				 </h3>
				</a>

			</div>
		);

	}
}


export default NavBar;