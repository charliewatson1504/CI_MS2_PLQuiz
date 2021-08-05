let teams = [];
let names =[];

fetch("https://api-football-v1.p.rapidapi.com/v3/countries", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then((response) => {
	return response.json();
})
.then((data) => {
	teams = JSON.parse(data);
	console.log(teams);
})
.then((teams) => {
	names = teams.response;
	console.log(names);
})
.catch(err => {
	console.error(err);
});