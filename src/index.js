
/*
const $element = document.createElement("h2");

$element.innerHTML = "Platzi Badges is here";

$container.appendChild($element)

*/

import React from "react";
import ReactDOM from "react-dom";

const Element = <h2>Hello! Platzi Badges</h2>
const app = document.getElementById('app');

ReactDOM.render( Element , app )