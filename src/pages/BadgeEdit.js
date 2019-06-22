import React, { Component } from 'react';

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js"

import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg"

import api from "../api.js"

import GravatarUrl from "../components/GravatarUrl.js"

import PageLoading from "./PageLoading.js";


class BadgeEdit extends Component {
 
 	constructor(props) {
 		super(props)

 		this.state = {
			form:{

				email: "realDonaldTrump@gmail.com",
				firstName: "Donald" ,
				jobTitle: "President of USA",
				lastName:"Trump",
				twitter: "realDonaldTrump",
				avatarUrl: ""
			},
			loading: true,
			error: null,
			badgeId: this.props.match.params.badgeId
		}


 	}
	
 	componentDidMount() {

 		this.fetchData();
 	}




	render() {

		if(this.state.loading) {
			return <PageLoading />
		}

			
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
					 		twitter={this.state.form.twitter}
					 		email={this.state.form.email}
					
					 />

					<BadgeForm 
						title="Edit Attendant"
						onSubmit={this.handleBadgeFormSubmit}
						onChange={this.handleInputChange}
						error= {this.state.error}
					/>
				</section>

			</section>
		);
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
				await api.badges.update( this.state.badgeId , this.state.form)
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

	fetchData = async () => {

		this.setState({
			loading: true,
			error: null
		});

		try {
			const data = await api.badges.read(
			   this.state.badgeId
			);



			this.setState({
				loading: false,
				error: null,
				form: data
			})
		}

		catch(error) {

		this.setState({
			loading: false,
			error: error
		})

	}}
}


export default BadgeEdit;