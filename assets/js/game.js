import fetch from 'node-fetch';

const question = document.getElementById('question');
const option = Array.from(document.getElementsByClassName('option-text'));

let currentQuestion = {};
let questionsAvailable = [];
let questionNumber = 0;
let allowClick = true;
let score = 0;

let questions = [];

fetch('./assets/js/questions.json')
	.then((res) => {
		return res.json();
})
	.then(loadedQuestions => {
	console.log(loadedQuestions);
})
	.catch((err) => {
		console.error(err);
	});

