const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const scoreId = document.getElementById('score-ID');
const questionNumberId = document.getElementById('question-number')
const progressBarInner = document.getElementById('progress-bar-inner')
const pointsPerCorrectScore = 50;
const totalQuizQuestions = 10;


let currentQuestion = {};
let questionsAvailable = [];
let questionNumber = 0;
let allowClick = true;
let score = 0;

let questions = [];
let questionAndAnswer = [];

beginQuiz = () => {
	questionsAvailable = [...questions];
	score = 0;
	questionNumber = 0;
	getANewQuestion();
};

fetch('assets/js/questions.json')
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
	if (questionsAvailable.length === 0 || questionNumber >= totalQuizQuestions) {
		localStorage.setItem('mostRecentScore', score);
		return window.location.assign('/quiz-end.html');
	}

	let questionIndex = Math.floor(Math.random() * questionsAvailable.length);
	currentQuestion = questionsAvailable[questionIndex];
	question.innerText = currentQuestion.question;
		
	options.forEach((option) => {
		const num = option.dataset['num'];
		option.innerHTML = currentQuestion['option' + num];
	});

	questionNumber++;
	questionNumberId.innerHTML = `Question ${questionNumber} of ${totalQuizQuestions}`;

	let progressBarWidth = (questionNumber/totalQuizQuestions) * 100;
	progressBarInner.style.width = `${progressBarWidth}%`;

	questionsAvailable.splice(questionIndex, 1)
};

options.forEach((option) => {
	option.addEventListener('click', (e) => {
		if (!allowClick) return;
		allowClick = false;
		const userSelection = e.target;
		const answerToQuestion = userSelection.dataset['num'];
		const answerClassApply = answerToQuestion == currentQuestion.answer ? 'right' : 'wrong';
		const answerScoreApply = answerToQuestion == currentQuestion.answer ? pointsPerCorrectScore : 0;
		userSelection.classList.add(answerClassApply);
		score += answerScoreApply;
		scoreId.innerText = score;
		let currentQuestionAndAnswer = {
			question: currentQuestion.question,
			answer: userSelection.innerText,
			rightOrWrong: answerClassApply
		};
		questionAndAnswer.push(currentQuestionAndAnswer);
		let questionAndAnswerToLocalStorage = JSON.stringify(questionAndAnswer);
		localStorage.setItem('qAndA', questionAndAnswerToLocalStorage);
		setTimeout(() => {
			userSelection.classList.remove(answerClassApply);
			allowClick = true
			getANewQuestion();
		}, 500);
	});
});
