
import React, { Component } from 'react';

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js"

import "./styles/BadgeEdit.css";

import header from "../images/platziconf-logo.svg"

import api from "../api.js"

import GravatarUrl from "../components/GravatarUrl.js"

import PageLoading from "./PageLoading.js";


class BadgeEdit extends Component {
 	
 	constructor(props) {

 		super(props);

 		this.state = {

		form:{

			email: "realDonaldTrump@gmail.com",
			firstName: "Donald" ,
			jobTitle: "President of USA",
			lastName:"Trump",
			twitter: "realDonaldTrump",
			avatarUrl: ""
		},
		loading: false,
		error: null
		}

 	}


	handleInputChange = async (event) => {
	
		await this.setState({

			form: {
					...this.state.form, //rewriting what was in the object
			[event.target.name] : event.target.value,

			avatarUrl: GravatarUrl(this.state.form.email)
			}	,

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

				this.props.history.push("/badges")
			}

			catch(error) {
				this.setState({
					loading: false,
					error: error
				})
			}
	}



	render() {

		if(this.state.loading) {
			return <PageLoading />
		}

			
		return (
		 
			<section className="BadgeEdit">
		
				<section className="BadgeEdit__hero">

					<img className="BadgeEdit__hero-header" src={header} alt="logo" />
				</section>

				<section className="BadgeEdit__content">

					<Badge
					 		firstName={this.state.form.firstName}
					 		lastName={this.state.form.lastName}
					 		jobTitle={this.state.form.jobTitle}
					 		twitter={this.state.form.twitter}
					 		email={this.state.form.email}
					
					 />

					<BadgeForm 
					title="New Attendant"
						onSubmit={this.handleBadgeFormSubmit}
						onChange={this.handleInputChange}
						error= {this.state.error}
					/>
				</section>

			</section>
		);
	}
}


export default BadgeEdit;

