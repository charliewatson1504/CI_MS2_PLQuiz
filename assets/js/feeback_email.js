/*
Function to sent feedback email using emailjs.com
The API used is from here - https://www.email.js.com/
Credit: Code Institute material "Sending Emails Using EmailJS"
*/

const feedbackFormCall = document.getElementById('feedback-form');

function sendMail (feedbackForm) {
	emailjs.init('user_qNvMIMV6zD18pi4TUdgwz')
	emailjs.send('Outlook', 'premier_league', {
		'from_name': feedbackForm.name.value,
		'from_email': feedbackForm.email.value,
		'message': feedbackForm.feedback.value
	}).then(
		function (response) {
			success();
		},
		function (error) {
			console.log('Failed to send', error)
		}
	);
	return false;
};

function success () {
	feedbackFormCall.innerHTML = 
	`<div class="modal-body">
		Thank you for your feedback!
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	</div>`
}