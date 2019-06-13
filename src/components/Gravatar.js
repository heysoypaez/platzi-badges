import React from "react";
import GravatarUrl from "./GravatarUrl.js";


function Gravatar(props) {

	
	return (
	   <picture>
			<img 
				className="Badge_avatar"
		  	src={ GravatarUrl(props.email) } 
			  alt="avatar"
			/>
		</picture>
	);
}

export default Gravatar;