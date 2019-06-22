import React from 'react';
import {createPortal} from "react-dom";
import "./styles/Modal.css"

function Modal(props) {

	const modalDOM = document.getElementById("modal")
			
	if(!props.isOpen) {
		return null
	}

	return (
				
		createPortal(
				
			<section className="Modal">

				<section className="Modal__container">
				
						<button
						 onClick={props.onClose} 
						 className="Modal__close-button"
						>
						X
						</button>

						{props.children}
					</section>

					
				</section>
				,
					modalDOM
			)
		);
}

export default Modal;
