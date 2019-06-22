import React from 'react';
import "./styles/PageLoading.css"
import Loader from "../components/Loader.js"

function PageLoading(props) {
	
		return (
			<section className="Badges__loading">
				   <h1>Patience</h1>
				   <Loader />
			</section>
		);
	
}

export default PageLoading;
