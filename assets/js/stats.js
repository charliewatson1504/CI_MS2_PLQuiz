function getData(url){
	return new Promise(function(resolve, reject){
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.setRequestHeader("x-rapidapi-key", "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6");
		xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
		xhr.onload = function(){
			if(xhr.status == 200){
				resolve(data = JSON.parse(xhr.response));
			} else{
				reject(xhr.statusText);
			}
		};
		xhr.send();
	});
};