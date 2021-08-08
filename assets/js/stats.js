const tableBtn = document.getElementById('table-btn');
const fixturesBtn = document.getElementById('fixtures-btn');
const tableElement = document.getElementById('table-list')

let rank = [];
let teams = [];
let badge = [];
let fixtures = [];

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://thesportsdb.p.rapidapi.com/lookuptable.php?s=2020-2021&l=4328");
xhr.setRequestHeader("x-rapidapi-key", "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6");
xhr.setRequestHeader("x-rapidapi-host", "thesportsdb.p.rapidapi.com");
xhr.onload = function(){
	if(xhr.status == 200){
		let tablesLoaded = JSON.parse(xhr.response);
		rank = tablesLoaded.table.map(element => element.intRank);
		teams = tablesLoaded.table.map(element => element.strTeam);
		badge = tablesLoaded.table.map(element => element.strTeamBadge);
		for (i = 0; i < rank.length; i++){
			tableElement.innerHTML += `<td>${rank[i]}</td><td>${teams[i]}</td><td><img src="${badge[i]}"</td>`;
			}
			console.log(tablesLoaded);
	} else{
		console.log(xhr.statusText);
	};
};
xhr.send();