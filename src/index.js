
/*
const $element = document.createElement("h2");

$element.innerHTML = "Platzi Badges is here";

$container.appendChild($element)

*/

import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge.js"

//import "boostrap/dist/css/boostrap.css"; error

const app = document.getElementById('app');

ReactDOM.render( <Badge /> , app )