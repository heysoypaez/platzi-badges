import React from "react";
import md5  from "md5";


function GravatarUrl(email) {

	const hash = md5(email);
	const gravatar = `https://gravatar.com/avatar/${hash}=identicon`;

	return gravatar;	
}

export default GravatarUrl;


