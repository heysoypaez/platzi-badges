
/*
const $element = document.createElement("h2");

$element.innerHTML = "Platzi Badges is here";

$container.appendChild($element)

*/

import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./components/pages/BadgeNew.js"
import "./global.css"

//import "boostrap/dist/css/boostrap.css"; error

const app = document.getElementById('app');

ReactDOM.render( <BadgeNew /> , app )