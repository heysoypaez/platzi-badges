import React from "react";

import ImageConfLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar.js"


class Badge extends React.Component {

	render() {

			const {

				firstName,
				lastName,
				jobTitle,
				twitter,
				email


			} = this.props;

			return(

			       	<article className="Badge">

			       			<figure className="Badge_header">
			       				<img src={ImageConfLogo} alt=" Logo de la conferencia" />	
			       			</figure> 

			       			<section className="Badge_section-name">
			       			
			      				<Gravatar email={email} />
			       			
			       				<h1> {firstName} <br /> {lastName} </h1>

			       			</section>

			       			<section className="Badge_section-info">
			       				<h3> {jobTitle} </h3>
			       				<div>

				       				<a href={`https://twitter.com/${twitter}`}>
				       				@{twitter} 
				       				</a> 
			       				</div>
			       			</section>

			       			<section className="Badge_footer">
			       				<p>#platziconfs</p>
			       			</section>
			       			
			       	</article>
			 )
	}


}

export default Badge;