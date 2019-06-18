
import React from "react";

import ReactDOM from "react-dom"

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg"
import {Link} from "react-router-dom";
import Badge from "../components/Badge.js";


function BadgeDetails(props) {
	
	const {

			firstName,
			lastName,
			jobTitle,
			twitter,
			email,
			id
		
	} = props.badge

	return(
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
						<Link to={`/badges/${id}/edit`} className="btn"> Edit </Link>
						<Link to={`/badges/${id}`} className="btn delete" > Delete </Link>
					</section>

						{
								ReactDOM.createPortal(
								<h1>Realmente no estoy aqui</h1>,
								document.getElementById("modal")
								)
						}

				</section>
			</section>
	)
}


export default BadgeDetails;


