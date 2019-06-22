import React, {  useState , useMemo } from 'react';
import "./styles/BadgesList.css"
import twitterLogo from "../images/Twitter_Logo_Blue.svg"
import {Link} from "react-router-dom"

function useSearchBadges(badges) {

	const [query, setQuery] = useState("")
	const [filteredBadges, setFilteredBadges] = useState(badges)


	useMemo( ()  => {
		const result = badges.filter(

			badge => (

				// return badge.firstName === query
			 `${badge.firstName} ${badge.lastName}`
			 .toLowerCase()
			 .includes(query.toLowerCase())
			)
		);		

		setFilteredBadges(result)
	}, [badges, query])

	return {query, setQuery, filteredBadges}
}


function BadgesList(props) {

	const {badges} = props;
	const { query, setQuery, filteredBadges} = useSearchBadges(badges);

	const handleChange = (event) => setQuery(event.target.value);


		if(filteredBadges.length === 0) {
			return (
			  <section>
			  	<form>
						<label><h2> Filter Badges </h2> </label>
						<input type="text" value={query} onChange={handleChange} />
				</form>
			  <h2>We didn't find any Badge :/</h2>
			  <h3><i>But you can create the first now</i></h3>
			  <br />
			  <Link className="btn" to="/badges/new">Do it</Link>
			  </section>
			)
		}

		return (

			<section className="Badges__list">
							
				<section className="Badges__container">
					
					<form>
						<label><h2> Filter Badges </h2> </label>
						<input type="text" value={query} onChange={handleChange} />
					</form>

					<ul>
					{filteredBadges.map(
						
						(badge) => (

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
						  			rel="noopener noreferrer" 
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
						  		<Link to={`/badges/${badge.id}/edit`} >Edit</Link>
						  		<Link to={`/badges/${badge.id}`}>View 		</Link>
						  	</section>
		  		
						  </li>

											)
										
									)}
								</ul>
							</section>
					</section>
		);
	
}

export default BadgesList
