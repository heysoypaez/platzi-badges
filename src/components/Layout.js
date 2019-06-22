
import React, {Fragment} from "react";

import NavBar from "./NavBar.js";

function Layout(props) {
	
	return(

	<Fragment>
		<NavBar />
		{props.children}
	</Fragment>
	)
	
}

export default Layout;
