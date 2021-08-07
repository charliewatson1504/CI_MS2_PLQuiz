/*
Function to sent feedback email using emailjs.com
The API used is from here - https://www.email.js.com/
Credit: Code Institute material "Sending Emails Using EmailJS"
*/

const feedbackFormCall = document.getElementById('feedback-form');

function sendMail (feedbackForm) {
	emailjs.init('user_qNvMIMV6zD18pi4TUdgwz')
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
};

function loader () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	<div class="loader"></div>
	</div>`
}

function success () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	Thank you for your feedback!
	</div>
	<div class="modal-footer">
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`
};

function failed () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
	Something went wrong please close and try again
	</div>
	<div class="modal-footer">
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`
};

loader();