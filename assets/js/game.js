const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const scoreId = document.getElementById('score-ID');
const pointsPerCorrectScore = 50;
const totalQuizQuestions = 5;

let currentQuestion = {};
let questionsAvailable = [];
let questionNumber = 0;
let allowClick = true;
let score = 0;

let questions = [];

beginQuiz = () => {
	questionsAvailable = [...questions];
	score = 0;
	questionNumber = 0;
	getANewQuestion();
};

fetch('../assets/js/questions.json')
	.then((res) => {
		return res.json();
	})
	.then((questionsLoad) => {
		questions = questionsLoad;
		beginQuiz();
	})
	.catch((err) => {
		console.error(err);
	});

getANewQuestion = () => {
	questionsAvailable = [...questions];
	let questionIndex = Math.floor(Math.random() * questionsAvailable.length);
	currentQuestion = questionsAvailable[questionIndex];
	question.innerText = currentQuestion.question;

	options.forEach((option) => {
		const num = option.dataset['num'];
		option.innerHTML = currentQuestion['option' + num];
	});
};

options.forEach((option) => {
	option.addEventListener('click', (e) => {
		if (!allowClick) return;
		allowClick = false;
		const userSelection = e.target;
		const answerToQuestion = userSelection.dataset['num'];
		const answerClassApply = answerToQuestion == currentQuestion.answer ? 'right' : 'wrong';
		const answerScoreApply = answerToQuestion == currentQuestion.answer ? pointsPerCorrectScore : 0;
		userSelection.parentElement.classList.add(answerClassApply);
		score += answerScoreApply;
		scoreId.innerText = score;
		setTimeout(() => {
			userSelection.parentElement.classList.remove(answerClassApply);
			allowClick = true
			getANewQuestion();
		}, 1000);
	});
});
