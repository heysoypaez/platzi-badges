import React, { Component } from 'react';

import confLogo from "../../images/platziconf-logo.svg"
import astronauts from "../../images/astronauts.svg"

import "../styles/Home.css"

import {Link} from "react-router-dom"


class Home extends Component {
	render() {
		return (
			<section className="Home">
			
				<section className="Home__hero">
				
					<figure>
						<img src={confLogo} alt="Logo Platzi Conf" />						
					</figure>

					<h1 className="Home__Title">
					Badge <br /> Management <br /> System
					</h1>

					<Link to="/badges" className="btn">
						Start
					</Link>

				</section>
				
				<section className="Home__Icon-container">
				
					<figure>
						<img src={astronauts} alt="Logo Platzi Badges" className="Home__Icon-image" />						
					</figure>

				</section>
				
			</section>
		);
	}
}

export default Home;