/*
feedback_email.js is used by all pages that contain the feedback modal.
Function to send feedback email using emailjs.com.
*/

const feedbackFormCall = document.getElementById('feedback-form');
/**
 * sendMail function uses the emailjs API to send the feedback to the site
 * owner when feedback is submitted.
 * The API used is from here - https://www.email.js.com/
 * Credit: Code Institute material "Sending Emails Using EmailJS"
 * @param {*} feedbackForm - The feedback form object
 */
function sendMail (feedbackForm) {
	emailjs.init('user_qNvMIMV6zD18pi4TUdgwz');
	emailjs.send('service_lzcqdd6', 'premier_league', {
		'from_name': feedbackForm.name.value,
		'from_email': feedbackForm.email.value,
		'message': feedbackForm.feedback.value
	}).then(
		function (response) {
			success();
		},
		function (error) {
			console.log('Failed to send', error); // log error to console to allow inspection of error if it occurs
			failed();
		}
	);
	return false;
}
/**
 * validateFormName function checks if the user has entered anything in
 * the name box on the feedback form when clicking out of the box.
 */
function validateFormName() {
	let formName = document.getElementById('name').value;
	let validateName = document.getElementById('feedbackName');
	if (formName === ''){
		validateName.innerText = 'Enter your name';
		validateName.style.color = 'red';
	} else {
		validateName.innerText = '';
	}

}
/**
 * validateFormEmail function checks if the user has entered anything in
 * the email box and if it is a valid email address on the feedback 
 * form when clicking out of the box.
 */
function validateFormEmail() {
	let formEmail = document.getElementById('email').value;
	let validateEmail = document.getElementById('feedbackEmail');
	// credit to stackoverflow for the format to use when validating an email - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	const emailFormat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailFormat.test(String(formEmail).toLowerCase())){
		validateEmail.innerText = '';
	} else {
		validateEmail.innerText = 'Enter a valid email';
		validateEmail.style.color = 'red';
	}
}
/**
 * validateFormText function checks if the user has entered anything in
 * the text box on the feedback form when clicking out of the box.
 */
function validateFormText() {
	let formFeedback = document.getElementById('feedback').value;
	let validateFeedback = document.getElementById('feedbackText');
	if (formFeedback === ''){
		validateFeedback.innerText = 'Enter your feedback';
		validateFeedback.style.color = 'red';
	} else {
		validateFeedback.innerText = '';
	}
}
/**
 * loader function displays a spinning circle when the user clicks submit
 * on the feedback.
 */
function loader () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	<div class="loader"></div>
	</div>`;
}
/**
 * success function - when a successful response is returned by the API it first hides the loader 
 * then displays a success message to the user thanking them for the feedback.
 */
function success () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	Thank you for your feedback!
	</div>
	<div class="modal-footer">
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`;
}
/**
 * failed function - when a failed response is returned by the API it first hides the loader 
 * then displays a failed message to the user and asks them to try again.
 */
function failed () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	Something went wrong please close and try again
	</div>
	<div class="modal-footer">
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`;
}
// event listener for when a user clicks submit on the feedback modal.
feedbackFormCall.addEventListener('submit', loader);