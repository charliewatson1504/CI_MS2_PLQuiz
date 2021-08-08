const finalScoreHtml = document.getElementById('final-score');
const localStorageTable = document.getElementById('q-and-a');
const finalScore = localStorage.getItem('mostRecentScore');
const pullQuestionAndAnswer = localStorage.getItem('qAndA');
const pulledQuestionAndAnswer = JSON.parse(pullQuestionAndAnswer);
console.log(pulledQuestionAndAnswer);

let pulledQuestion = pulledQuestionAndAnswer.map(element => element.question);
let pulledAnswer = pulledQuestionAndAnswer.map(element => element.answer);
let pulledRightOrWrong = pulledQuestionAndAnswer.map(element => element.rightOrWrong);

localStorageTable.innerHTML = `
			<tr>
			<th>Question</th>
			<th>Answer</th>
			</tr>`
			for (i = 0; i < pulledQuestion.length; i++){
				localStorageTable.innerHTML += `
				<tr>
				<td>${pulledQuestion[i]}</td>
				<td>${pulledAnswer[i]}</td>
				</tr>`;
			};
finalScoreHtml.innerHTML = `Final Score ${finalScore}`;