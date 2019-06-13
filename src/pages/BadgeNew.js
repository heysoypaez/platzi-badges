import React, { Component } from 'react';

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js"

import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg"

import api from "../api.js"


class BadgeNew extends Component {
 
	state = {
		form:{

			email: "realDonaldTrump@gmail.com",
			firstName: "Donald" ,
			jobTitle: "President of USA",
			lastName:"Trump",
			twitterUserName: "realDonaldTrump",
			avatarUrl: ""
		},

		loading: false,
		error: null
	}

	handleInputChange = async (event) => {
	
		await this.setState({

			form: {
					...this.state.form, //rewriting what was in the object
			[event.target.name] : event.target.value
			}		
		});
	}

	handleBadgeFormSubmit = async (event) => {
			event.preventDefault()
			console.log("Form was submitted", this.state)

				this.setState({
					loading: true,
					error: null
				})

			try {
				await api.badges.create(this.state.form)
				this.setState({
					loading: false,
				})
			}

			catch(error) {
				this.setState({
					loading: false,
					error: error
				})
			}
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
					
					 />

					<BadgeForm 
						onSubmit={this.handleBadgeFormSubmit}
						onChange={this.handleInputChange}
					/>
				</section>

			</section>

		);
	}
}


export default BadgeNew;