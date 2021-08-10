/**
 * game-end.js is used by the quiz-end.html file.
 * it pulls data from local storage that was set their
 * by the game.js file.
 */

// variables for accessing parts of the DOM on quiz-end.html.
const finalScoreHtml = document.getElementById('final-score');
const localStorageTable = document.getElementById('q-and-a');
// variables for accessing the local storage.
const finalScore = localStorage.getItem('mostRecentScore');
const pullQuestionAndAnswer = localStorage.getItem('qAndA');

const pulledQuestionAndAnswer = JSON.parse(pullQuestionAndAnswer);

// variables for mapping object data from JSON pulled from local storage.
let pulledQuestion = pulledQuestionAndAnswer.map(element => element.question);
let pulledAnswer = pulledQuestionAndAnswer.map(element => element.answer);
let pulledRightAnswer = pulledQuestionAndAnswer.map(element => element.correctAnswer);
let pulledRightOrWrong = pulledQuestionAndAnswer.map(element => element.rightOrWrong);
// displays the users answered questions with question, their answer and the correct answer.
localStorageTable.innerHTML = `
			<tr>
			<th class="width50"><h1>Question</h1></th>
			<th class="width25"><h1>Your Answer</h1></th>
			<th class="width25"><h1>Correct Answer</h1></th>
			</tr>`;
			// loop to iterate through all answered questions
			for (i = 0; i < pulledQuestion.length; i++){
				localStorageTable.innerHTML += `
				<tr>
				<td class="width50">${pulledQuestion[i]}</td>
				<td class="width25 ${pulledRightOrWrong[i]}">${pulledAnswer[i]}</td>
				<td class="width25">${pulledRightAnswer[i]}</td>
				</tr>`;
			}
// display users final score pulled from local storage.
finalScoreHtml.innerHTML = `Final Score ${finalScore}`;