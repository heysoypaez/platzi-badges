import React, { Component, Fragment } from 'react';
import confLogo from "../images/platziconf-logo.svg"

import PageLoading from "./PageLoading.js";
import PageError from "./PageError.js";

import Badge from "../components/Badge.js";

import api from "../api.js"; 
import {Link} from "react-router-dom";

import "./styles/BadgeDetails.css";

 class BadgeDetails extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {
 			loading: true,
 			error: null,
 			badgeId: this.props.match.params.badgeId,
 			data: undefined
 		}
 	}

 	fetchData = async() => {

 		this.setState({
 			loading: true,
 			error: null
 		})

 		try {

 			const data = await api.badges.read(this.state.badgeId)

	 		this.setState({
 				loading: false,
 				error: null,
 				data: data
 			})
 		}

 		catch(error) {

 			this.setState({
 				loading: false,
 				error: error
 			})	
 		}
 	}

 	componentDidMount = () => {

 		this.fetchData();
 	}

	render() {

		if(this.state.loading) {
			return <PageLoading />
		}

		if(this.state.error) {
			return <PageError error={this.state.error} />
		}

		const {
			firstName,
			lastName,
			jobTitle,
			twitter,
			email
		} = this.state.data

		const { badgeId } = this.state

		return (
			<section className="BadgeDetails">

				<section className="BadgeDetails__hero">
						
					<figure>
						<img src={confLogo} alt="Logo de la conferencia" />
					</figure>

					<section>
						<h1> {firstName} {lastName} </h1>
					</section>
				</section>

				<section className="BadgeDetails__content">
					
					<section>
						<Badge
							firstName={firstName}
							lastName={lastName}
							jobTitle={jobTitle}
							twitter={twitter}
							email={email}
						 />
					</section>

					<section className="BadgeDetails__content-actions">
						<Link to={`/badges/${badgeId}/edit`} className="btn"> Edit </Link>
						<Link to={`/badges/${badgeId}`} className="btn delete"> Delete </Link>
					</section>

				</section>
			</section>
		);
	}
}

export default BadgeDetails;
