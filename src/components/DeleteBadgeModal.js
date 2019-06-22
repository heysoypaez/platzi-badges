
import React from "react";
import Modal from "./Modal.js"

function DeleteBadgeModal(props) {
	
	return(
		<Modal isOpen={props.isOpen} onClose={props.onClose} >

		<section className="DeleteBadgeModal">



		<h1>Are you sure?</h1>
		<p>You are about to delete this badge.</p>

		<section>
			<button className="btn delete" onClick={props.onDeleteBadge}>Delete</button>
			<button className="btn" onClick={props.onClose}>Cancel</button>
		</section>




		</section>
		 </Modal>
		
	)
}

export default DeleteBadgeModal;


