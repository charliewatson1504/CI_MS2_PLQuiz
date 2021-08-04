const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const pointsPerCorrectScore = 50;
const totalQuizQuestions = 5;

let currentQuestion = {};
let questionsAvailable = [];
let questionNumber = 0;
let allowClick = true;
let score = 0;

let questions = [
	{
	  "question": "Who won the Euro 2020 tournament?",
	  "option1": "Italy",
	  "option2": "Poland",
	  "option3": "England",
	  "option4": "Germany",
	  "answer": 1
	},
	 {
	  "question": "In which stadium was the final played?",
	  "option1": "Wembley Stadium",
	  "option2": "Stadio Olimpico",
	  "option3": "Olympic Stadium",
	  "option4": "Krestovsky Stadium",
	  "answer": 1
	},
	 {
	  "question": "Which team was ranked highest going into the tournament?",
	  "option1": "England",
	  "option2": "Italy",
	  "option3": "Belgium",
	  "option4": "Germany",
	  "answer": 3
	},
	 {
	  "question": "Who refereed the final of Euro 2020?",
	  "option1": "Orel Grinfeld",
	  "option2": "Bjorn Kuipers",
	  "option3": "Danny Makkelie",
	  "option4": "Sergei Karasev",
	  "answer": 2
	},
	 {
	  "question": "Where did the opening ceremony take place?",
	  "option1": "Rome",
	  "option2": "London",
	  "option3": "Madrid",
	  "option4": "Paris",
	  "answer": 1
	},
	 {
	  "question": "Along with Patrik Schick, who scored 5 goals at Euro 2020?",
	  "option1": "Harry Kane",
	  "option2": "Karim Benzema",
	  "option3": "Romelu Lukaku",
	  "option4": "Christiano Ronaldo",
	  "answer": 4
	},
	 {
	  "question": "Who won player of the tournament?",
	  "option1": "Kyle Walker",
	  "option2": "Pedri",
	  "option3": "Romelu Lukaku",
	  "option4": "Gianluigi Donnarumma",
	  "answer": 4
	},
	 {
	  "question": "Which company created the match ball for Euro 2020?",
	  "option1": "Adidas",
	  "option2": "Nike",
	  "option3": "Umbro",
	  "option4": "Reebok",
	  "answer": 1
	},
	 {
	  "question": "What drink was removed by Christiano Ronaldo in his press conference",
	  "option1": "Pepsi",
	  "option2": "Coca Cola",
	  "option3": "Irn Bru",
	  "option4": "Dr Pepper",
	  "answer": 2
	},
	 {
	  "question": "How many goals were scored on 'Magic Monday'?",
	  "option1": "11",
	  "option2": "13",
	  "option3": "14",
	  "option4": "16",
	  "answer": 3
	},
	 {
	  "question": "What record was broken at this tournament for any European Championship since the introduction of the group stage in 1980?",
	  "option1": "Most clean sheets",
	  "option2": "Worst discipline",
	  "option3": "Highest attendance",
	  "option4": "Most goals scored",
	  "answer": 4
	},
	 {
	  "question": "What was the name of the official song for the tournament?",
	  "option1": "We love the animals",
	  "option2": "We are the people",
	  "option3": "We are the animals",
	  "option4": "We love the people",
	  "answer": 2
	},
	 {
	  "question": "What was the name of the official mascot?",
	  "option1": "Skillzy",
	  "option2": "Ballzy",
	  "option3": "Glovezy",
	  "option4": "Bootzy",
	  "answer": 1
	},
	 {
	  "question": "Who had the worst discipline of the tournament?",
	  "option1": "Ethan Ampadu",
	  "option2": "Marko Arnautovic",
	  "option3": "Grzegorz Krychowiak",
	  "option4": "Ezgjian Alioski",
	  "answer": 3
	},
	 {
	  "question": "How many own goals were scored in the tournament?",
	  "option1": "11",
	  "option2": "15",
	  "option3": "7",
	  "option4": "9",
	  "answer": 1
	}
      ];

beginQuiz = () => {
	getANewQuestion();
};

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
		console.log(answerClassApply);
		const applyClassTo = userSelection.parentElement.classList.add(answerClassApply);
		setTimeout(() => {
			userSelection.parentElement.classList.remove(answerClassApply);
			allowClick = true
			getANewQuestion();
		}, 1000);
	});
});
beginQuiz();
