import React, { Component } from 'react';

import BadgeNew from "./pages/BadgeNew.js"
import Badges from "./pages/Badges.js"
import NotFound from "./pages/NotFound.js"

import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import Layout from "./Layout.js"

function App(props) {
	// body...
 
		return (
			<BrowserRouter>
				<Layout>
				<Switch>

					<Route exact path="/" component={Badges} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />

					<Route component={NotFound} />

				</Switch>
				</Layout>
			</BrowserRouter>
		);
	
}

export default  App;