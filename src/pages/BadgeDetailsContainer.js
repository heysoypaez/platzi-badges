import React, { Component } from 'react';

import PageLoading from "./PageLoading.js";
import PageError from "./PageError.js";


import BadgeDetails from "./BadgeDetails.js"

import api from "../api.js"; 

 class BadgeDetailsContainer extends Component {

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

		return (

	   <BadgeDetails
			badge={this.state.data}
	   /> 
		)
	}
}


export default BadgeDetailsContainer;
