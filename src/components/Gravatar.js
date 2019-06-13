import React from "react";
import md5  from "md5";



function Gravatar(props) {

	const email = props.email;
	const hash = md5(email);
	const gravatar = `https://gravatar.com/avatar/${hash}=identicon`;

	return (
	   <picture>
			<img 
				className="Badge_avatar"
		  	src={gravatar} 
			  alt="avatar"
			/>
		</picture>
	);
}

export default Gravatar;