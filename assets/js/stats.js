result = [];

fetch("https://v3.football.api-sports.io/leagues", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6"
	}
})
.then((res) => res.json())
.catch((err) => console.log(err));
