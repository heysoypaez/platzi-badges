
/*
const $element = document.createElement("h2");

$element.innerHTML = "Platzi Badges is here";

$container.appendChild($element)

*/

import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge.js"
import "./global.css"

//import "boostrap/dist/css/boostrap.css"; error

const app = document.getElementById('app');

ReactDOM.render(

 <Badge
 		firstName="Daniel"
 		lastName="Páez"
 		jobTitle="Ethical Frontend Engineer"
 		twitterUserName="heysoypaez"
 		avatar="https://secure.gravatar.com/avatar/5201999281068f1d63445496fbccfe06"

 /> , app )