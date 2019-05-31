import React, { Component } from 'react';
import Badge from "../Badge.js";

import "../styles/BadgeNew.css";

import header from "../../images/badge-header.svg"

import NavBar from "../NavBar.js"


class BadgeNew extends Component {
	render() {
		return (
			<section className="BadgeNew">
				
				<NavBar />
		
				<section className="BadgeNew__hero">
					<img className="BadgeNew__hero-header" src={header} alt="logo" />
				</section>

				<section>

					<Badge
					 		firstName="Daniel"
					 		lastName="Páez"
					 		jobTitle="Ethical Frontend Engineer"
					 		twitterUserName="heysoypaez"
					 		avatar="https://secure.gravatar.com/avatar/5201999281068f1d63445496fbccfe06"

					 />

				{/* AttendeForm  */}

				 </section>

			</section>
		);
	}
}


export default BadgeNew;