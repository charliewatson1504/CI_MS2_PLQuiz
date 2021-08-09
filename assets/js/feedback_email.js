/*
Function to sent feedback email using emailjs.com
The API used is from here - https://www.email.js.com/
Credit: Code Institute material "Sending Emails Using EmailJS"
*/

const feedbackFormCall = document.getElementById('feedback-form');

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
			console.log('Failed to send', error);
			failed();
		}
	);
	return false;
}

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

function validateFormEmail() {
	let formEmail = document.getElementById('email').value;
	let validateEmail = document.getElementById('feedbackEmail');
	// credit - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
	const emailFormat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (emailFormat.test(String(formEmail).toLowerCase())){
		validateEmail.innerText = '';
	} else {
		validateEmail.innerText = 'Enter a valid email';
		validateEmail.style.color = 'red';
	}
}

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

function loader () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	<div class="loader"></div>
	</div>`;
}

function success () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	Thank you for your feedback!
	</div>
	<div class="modal-footer">
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`;
}

function failed () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	Something went wrong please close and try again
	</div>
	<div class="modal-footer">
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`;
}

feedbackFormCall.addEventListener('submit', loader);