import React from "react";

import ImageConfLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {

	render() {

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
			       					  src="https://www.gravatar.com/avatar?d=identicon" 
			       					  alt="avatar"
			       					/>
			       				</picture>
			       				<h1> Daniel <br /> Páez</h1>

			       			</section>

			       			<section className="Badge_section-info">
			       				<h3> Ethical Frontend Engineer</h3>
			       				<div> @heysoypaez </div>
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