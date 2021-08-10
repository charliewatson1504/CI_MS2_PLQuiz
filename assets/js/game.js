/**
 * game.js is used by the game.html file to display the quiz questions and options.
 * It also displays a question number the user is one, a progress bar that fills
 * as they go through the game and score counter showing how many answers the 
 * user has got right.
 */

// variables to access DOM elements
const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const scoreId = document.getElementById('score-ID');
const questionNumberId = document.getElementById('question-number');
const progressBarInner = document.getElementById('progress-bar-inner');

const pointsPerCorrectScore = 1;
const totalQuizQuestions = 10;
// quiz variables
let currentQuestion = {};
let questionsAvailable = [];
let questionNumber = 0;
let allowClick = true;
let score = 0;
let questions = [];
let questionAndAnswer = [];
/**
 * beginQuiz function runs when the user starts the quiz.
 * pulls a set of new questions and then
 * it clears previous scores and question counter.
 * Finally it runs the getANewQuestion function.
 */
beginQuiz = () => {
	questionsAvailable = [...questions];
	score = 0;
	questionNumber = 0;
	getANewQuestion();
};

/**
 * fetch method is used to access the question objects
 * held in the questions.json file.
 */
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
/**
 * getANewQuestion function first checks if there are any available questions left or
 * if the question number is at the total questions has been hit.
 * It pulls and randomises the question order then displays the question.
 * Then iterates through the options relating to that question and displays them.
 */
getANewQuestion = () => {
	if (questionsAvailable.length === 0 || questionNumber >= totalQuizQuestions) {
		localStorage.setItem('mostRecentScore', score);
		return window.location.assign('quiz-end.html');
	}

	let questionIndex = Math.floor(Math.random() * questionsAvailable.length);
	currentQuestion = questionsAvailable[questionIndex];
	question.innerText = currentQuestion.question;

	options.forEach((option) => {
		const num = option.dataset.num;
		option.innerHTML = currentQuestion['option' + num];
	});
	
	questionNumber++; // increments the question number displayed to the user.
	questionNumberId.innerHTML = `Question ${questionNumber} of ${totalQuizQuestions}`;

	let progressBarWidth = (questionNumber/totalQuizQuestions) * 100; // increases the progress bar with each question.
	progressBarInner.style.width = `${progressBarWidth}%`;

	questionsAvailable.splice(questionIndex, 1); // takes a question off the available questions left.
};
/**
 * when a user clicks on an option this checks if the answer is right or wrong and adds the relevant class
 * to the DOM element which highlights the answer either green or red. Also the question, user answer and correct
 * answer are all set to local storage as a json string. This is then pulled by the quiz-end.js file and displayed
 * on the quiz-end.html page.
 * There is a timeout to prevent the user from clicking on a second answer and gives 500ms display of the red or green.
 * Finally the getANewQuestion function is called to move onto the next question or go to the quiz end page.
 */
options.forEach((option) => {
	option.addEventListener('click', (e) => {
		if (!allowClick) return;
		allowClick = false;
		const userSelection = e.target;
		const answerToQuestion = userSelection.dataset.num;
		const answerClassApply = answerToQuestion == currentQuestion.answer ? 'right' : 'wrong';
		const answerScoreApply = answerToQuestion == currentQuestion.answer ? pointsPerCorrectScore : 0;
		userSelection.classList.add(answerClassApply);
		score += answerScoreApply;
		scoreId.innerText = score;
		const rightAnswer = currentQuestion['option' + currentQuestion.answer];
		let currentQuestionAndAnswer = {
			question: currentQuestion.question,
			answer: userSelection.innerText,
			rightOrWrong: answerClassApply,
			correctAnswer: rightAnswer
		};
		questionAndAnswer.push(currentQuestionAndAnswer);
		let questionAndAnswerToLocalStorage = JSON.stringify(questionAndAnswer);
		localStorage.setItem('qAndA', questionAndAnswerToLocalStorage);
		setTimeout(() => {
			userSelection.classList.remove(answerClassApply);
			allowClick = true;
			getANewQuestion();
		}, 500);
	});
});
