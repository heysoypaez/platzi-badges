
/*
const $element = document.createElement("h2");

$element.innerHTML = "Platzi Badges is here";

$container.appendChild($element)

*/

import React from "react";
import ReactDOM from "react-dom";

import BadgeNew from "./components/pages/BadgeNew.js"
import Badges from "./components/pages/Badges.js"
import App from "./components/App.js"


import "./global.css"

//import "boostrap/dist/css/boostrap.css"; error

const app = document.getElementById('app');

ReactDOM.render( <App/> , app )