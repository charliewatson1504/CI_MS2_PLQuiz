const finalScoreHtml = document.getElementById('final-score');
const localStorageTable = document.getElementById('q-and-a');
const finalScore = localStorage.getItem('mostRecentScore');
const pullQuestionAndAnswer = localStorage.getItem('qAndA');
const pulledQuestionAndAnswer = JSON.parse(pullQuestionAndAnswer);
console.log(pulledQuestionAndAnswer);

let pulledQuestion = pulledQuestionAndAnswer.map(element => element.question);
let pulledAnswer = pulledQuestionAndAnswer.map(element => element.answer);
let pulledRightAnswer = pulledQuestionAndAnswer.map(element => element.correctAnswer);
let pulledRightOrWrong = pulledQuestionAndAnswer.map(element => element.rightOrWrong);

localStorageTable.innerHTML = `
			<tr>
			<th class="width50"><h1>Question</h1></th>
			<th class="width25"><h1>Your Answer</h1></th>
			<th class="width25"><h1>Correct Answer</h1></th>
			</tr>`
			for (i = 0; i < pulledQuestion.length; i++){
				localStorageTable.innerHTML += `
				<tr>
				<td class="width50">${pulledQuestion[i]}</td>
				<td class="width25 ${pulledRightOrWrong[i]}">${pulledAnswer[i]}</td>
				<td class="width25">${pulledRightAnswer[i]}</td>
				</tr>`;
			};
finalScoreHtml.innerHTML = `Final Score ${finalScore}`;