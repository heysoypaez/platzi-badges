
import React, {useState} from "react";


import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg"
import {Link} from "react-router-dom";
import Badge from "../components/Badge.js";
import DeleteModal from "../components/DeleteBadgeModal.js"

function useIncreaseCount(max) {
	const [count, setCount] = useState(0)

	if(count > max) {
		setCount(0)
	}

	return [count, setCount]
}

function BadgeDetails(props) {
	
	// count , setCount, state and setState
	const [count, setCount] = useIncreaseCount(6) ;


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

						<button className="btn" onClick={

							() => {
								setCount(count + 1)
							}
						} >
							Increase Count: {count} 
						</button>	

						<Link to={`/badges/${id}/edit`} className="btn"> Edit </Link>
						<Link to={`/badges/${id}`} className="btn delete" onClick={props.modalOnOpen} > Delete </Link>
					</section>

						<DeleteModal
						isOpen={props.modalIsOpen}
						onClose={props.modalOnClose}
						onDeleteBadge={props.onDeleteBadge}
						> 
					
						</DeleteModal>

				</section>
			</section>
	)
}


export default BadgeDetails;


