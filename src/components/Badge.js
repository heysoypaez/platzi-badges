import React from "react";

import ImageConfLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {

	render() {

			const {

				firstName,
				lastName,
				jobTitle,
				twitterUserName,
				avatar


			} = this.props;

			return(

			       	<article className="Badge">
			       		<div>

			       			<figure className="Badge_header">
			       				<img src={ImageConfLogo} alt=" Logo de la conferencia" />	
			       			</figure> 

			       			<section className="Badge_section-name">
			       				<picture>
			       					<img 
			       						className="Badge_avatar"
			       					  src={avatar} 
			       					  alt="avatar"
			       					/>
			       				</picture>
			       				<h1> {firstName} <br /> {lastName} </h1>

			       			</section>

			       			<section className="Badge_section-info">
			       				<h3> {jobTitle} </h3>
			       				<div>

				       				<a href={`https://twitter.com/${twitterUserName}`}>
				       				@{twitterUserName} 
				       				</a> 
			       				</div>
			       			</section>

			       			<section className="Badge_footer">
			       				<p>#platziconfs</p>
			       			</section>
			       			
			       		</div>
			       	</article>
			 )
	}


}

export default Badge;