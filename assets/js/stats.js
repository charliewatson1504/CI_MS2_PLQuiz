const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		console.log(JSON.parse(xhr.response));
		data = JSON.parse(xhr.response);
		console.log(data.response[0]);
		// stats.innerHTML = `<img src="${data.data.logo_path}">`;
	}
};

xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39");
xhr.setRequestHeader("x-rapidapi-key", "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6");
xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

xhr.send();