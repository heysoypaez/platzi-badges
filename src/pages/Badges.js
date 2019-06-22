import React, { Component } from 'react';

import PageLoading from "./PageLoading.js"
import PageError from "./PageError.js"

import confLogo from "../images/badge-header.svg"
import BadgesList from "../components/BadgesList.js"
import { Link} from "react-router-dom";
import api from "../api"
import MiniLoader from "../components/MinilLoader.js";

import "./styles/Badges.css"

 class Badges extends Component {


constructor(props) {
	super(props);

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

		this.fetchData();

		//every 5 seconds executes this function
		this.interval = setInterval(this.fetchData, (1000*30) )
	}

	componentDidUpdate(prevProps, prevState) {

	}

	componentWillUnmount() {
		//Limpiamos memoria

		clearInterval(this.interval)
	
	}


	render() {
				
		if(this.state.loading && !this.state.data) {
			return (
			   <PageLoading />
			)
		}

		if(this.state.error) {
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

						{
							this.state.loading && 
							<MiniLoader />
						}
											
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
