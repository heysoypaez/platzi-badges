import React, { Component } from 'react';
import "./styles/BadgesList.css"
import twitterLogo from "../images/Twitter_Logo_Blue.svg"


class BadgesList extends Component {

	render() {
		return (
					<section className="Badges__list">
							
							<section className="Badges__container">
								<ul>
									{this.props.badges.map(
										(badge) => {

											return (

											  <li key={badge.id} className="BadgeItem" >

											  	<figure>
											  		<img 
											  			src={badge.avatarUrl} 
											  			alt={`avatar ${badge.firstName} ${badge.lastName}`}
											  			className="BadgeItem__avatar"
											  		/>
											  	</figure>

											  	<section className="BadgeItem__details">
											  		<h3> {badge.firstName} {badge.lastName}  </h3>

											  		<a 
											  			href={`https://twitter.com/${badge.twitter}`}
											  			target="_blank"
											  		>
											  			<img 
											  				src={twitterLogo} 
											  				alt="twitter Logo" 
											  				height={40}
											  				width={40}
											  			/>
											  			{`@${badge.twitter}`}
											  		</a>

											  		<p>{badge.jobTitle}</p>
											  	</section>
											  	
											  </li>

											)
										}
									)}
								</ul>
							</section>
						</section>
		);
	}
}

export default BadgesList
