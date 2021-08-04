let questions = [];
fetch("./assets/js/questions.json")
	.then(res => {
		return res.json();
})
	.then(loadedQuestions => {
	console.log(loadedQuestions);
});