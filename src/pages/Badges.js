import React, { Component } from 'react';

import PageLoading from "./PageLoading.js"
import PageError from "./PageError.js"

import confLogo from "../images/badge-header.svg"
import BadgesList from "../components/BadgesList.js"
import { Link} from "react-router-dom";
import api from "../api"

import "./styles/Badges.css"

 class Badges extends Component {


constructor(props) {
	super(props);
	console.log(1, "Constructor");


 	this.state = {

 		data: undefined,
 		error: null,
 		loading: true
 	}

}


	fetchData = async () => {
		this.setState({
			loading: true,
			error: null
		})

		try {

			const data = await api.badges.list();

			this.setState({
				loading: false,
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

	componentDidMount() {

		console.log(3, "Component Did Mount")
		this.fetchData();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(5, "componentDidUpdate(prevProps, prevState)")

		console.log(
		  {prevProps: prevProps}, 
		  {prevState: prevState}
		)

				console.log(
		  {Props: this.props}, 
		  {State: this.state}
		)
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutId);
		//Limpiamos memoria
		console.log(6, "componentWillUnmount()" )	
	}


	render() {

		console.log(2,4, "render")

				
			if	(this.state.loading) {
				return (
				   <PageLoading />
				)
			}

			if	(this.state.error) {
				return (
				  <PageError error={this.state.error} />
				)
			}

					
		
		return (
				<section className="Badges">

					<section className="Badges__hero">
						<section className="Badges__container">
							<figure>
								<img 
									src={confLogo} 
									alt="Conf logo " 
									className="Badges_conf-logo"/>
							</figure>
						</section>
					</section>

					<section className="Badges__container">

						<section className="Badges__buttons" >
					
							<Link to={"/badges/new"} className="btn"> 
								New badge
							</Link>
							
						</section>

						<BadgesList badges={this.state.data}/>

					</section>
				</section>
		);
	}
}

export default Badges;
