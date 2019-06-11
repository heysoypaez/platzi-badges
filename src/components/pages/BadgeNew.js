import React, { Component } from 'react';

import Badge from "../Badge.js";
import BadgeForm from "../BadgeForm.js"

import "../styles/BadgeNew.css";

import header from "../../images/badge-header.svg"


class BadgeNew extends Component {
 
	state = {
		form:{}
	}

	handleInputChange = async (event) => {
	
		await this.setState({

			form: {
					...this.state.form, //rewriting what was in the object
			[event.target.name] : event.target.value
			}		
		});
	}

	handleSubmitClick = event => {

		console.log("Button was clicked")
	}

	handleBadgeFormSubmit = event => {
			event.preventDefault()
			console.log("Form was submitted", this.state)
	}

	render() {
			
		return (
		 
			<section className="BadgeNew">
		
				<section className="BadgeNew__hero">

					<img className="BadgeNew__hero-header" src={header} alt="logo" />
				</section>

				<section className="BadgeNew__content">

					<Badge
					 		firstName={this.state.form.firstName}
					 		lastName={this.state.form.lastName}
					 		jobTitle={this.state.form.jobTitle}
					 		twitterUserName={this.state.form.twitterUserName}
					 		email={this.state.form.email}
					 		avatar="https://secure.gravatar.com/avatar/5201999281068f1d63445496fbccfe06"
					 />

					<BadgeForm 
						onSubmit={this.handleBadgeFormSubmit}
						onChange={this.handleInputChange}
						onClick={this.handleSubmitClick}
					/>
				</section>

			</section>

		);
	}
}


export default BadgeNew;