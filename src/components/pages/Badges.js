import React, { Component } from 'react';
import NavBar from "../NavBar.js"

import Layout from "../Layout.js"

import confLogo from "../../images/badge-header.svg"
import loading from "../../images/loading.gif"

import BadgesList from "../BadgesList.js"

import { Switch, Link} from "react-router-dom";


import "../styles/Badges.css"

 class Badges extends Component {


constructor(props) {
	super(props);
	console.log(1, "Constructor");


 	this.state = {

 		data: [],
 		loading: true
 	}

}

componentDidMount() {

	console.log(3, "Component Did Mount")

	this.timeoutId = setTimeout( 
	 () => {

	 	this.setState({

	 		data: [

						  {
						    id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
						    firstName: "Freda",
						    lastName: "Grady",
						    email: "Leann_Berge@gmail.com",
						    jobTitle: "Legacy Brand Director",
						    twitter: "FredaGrady22221-7573",
						    avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
						  },
						  {
						    id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
						    firstName: "Major",
						    lastName: "Rodriguez",
						    email: "Ilene66@hotmail.com",
						    jobTitle: "Human Research Architect",
						    twitter: "ajorRodriguez61545",
						    avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
						  },
						  
						  {
						    id: "63c03386-33a2-4512-9ac1-354ad7bec5ee",
						    firstName: "Daniel",
						    lastName: "Páez",
						    email: "danielpaezsw66@gmail.com",
						    jobTitle: "Ethical Software Developer",
						    twitter: "heysoypaez",
						    avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff4491c78892e55cb7?d=identicon"
						  },
	 		],
	 		loading: false
	 	})
	 } , 
	 3000
	);

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
		
		return (
				<section className="Badges">

					{
						(this.state.loading) &&
						<h1>Patience my friend...</h1>
					}
					

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
