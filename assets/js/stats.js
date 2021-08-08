const tableBtn = document.getElementById('table-btn');
const fixturesBtn = document.getElementById('fixtures-btn');
const tableElement = document.getElementById('table-list')

let rank = [];
let teams = [];
let badge = [];
let fixtures = [];

function getTableData2020(){
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
			played = tablesLoaded.table.map(element => element.intPlayed);
			points = tablesLoaded.table.map(element => element.intPoints);
			form = tablesLoaded.table.map(element => element.strForm);
			tableElement.innerHTML = `
			<tr>
			<th>Position</th>
			<th>Team</th>
			<th>Badge</th>
			<th>Played</th>
			<th>Points</th>
			<th>Form</th>
			</tr>`
			for (i = 0; i < rank.length; i++){
				tableElement.innerHTML += `
				<tr>
				<td>${rank[i]}</td>
				<td><img src="${badge[i]}"</td>
				<td>${teams[i]}</td>
				<td>${played[i]}</td>
				<td>${points[i]}</td>
				<td>${form[i]}</td>
				</tr>`;
			}
		} else{
			console.log(xhr.statusText);
		};
	};
	xhr.send();
};

function getTableData2021(){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://thesportsdb.p.rapidapi.com/lookuptable.php?s=2021-2020&l=4328");
	xhr.setRequestHeader("x-rapidapi-key", "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6");
	xhr.setRequestHeader("x-rapidapi-host", "thesportsdb.p.rapidapi.com");
	xhr.onload = function(){
		if(xhr.status == 200){
			let tablesLoaded = JSON.parse(xhr.response);
			rank = tablesLoaded.table.map(element => element.intRank);
			teams = tablesLoaded.table.map(element => element.strTeam);
			badge = tablesLoaded.table.map(element => element.strTeamBadge);
			played = tablesLoaded.table.map(element => element.intPlayed);
			points = tablesLoaded.table.map(element => element.intPoints);
			form = tablesLoaded.table.map(element => element.strForm);
			for (i = 0; i < rank.length; i++){
				tableElement.innerHTML += `
				<td>${rank[i]}</td>
				<td>${teams[i]}</td>
				<td><img src="${badge[i]}"</td>
				<td>${played[i]}</td>
				<td>${points[i]}</td>
				<td>${form[i]}</td>`;
				}
				console.log(tablesLoaded);
		} else{
			console.log(xhr.statusText);
		};
	};
	xhr.send();
};

function getFixtureData(){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://thesportsdb.p.rapidapi.com/eventsnextleague.php?id=4328");
	xhr.setRequestHeader("x-rapidapi-key", "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6");
	xhr.setRequestHeader("x-rapidapi-host", "thesportsdb.p.rapidapi.com");
	xhr.onload = function(){
		if(xhr.status == 200){
			let fixturesLoaded = JSON.parse(xhr.response);
			console.log(fixturesLoaded);
			// date = fixturesLoaded.events.map(element => element.intRank);
			// time = fixturesLoaded.events.map(element => element.strTeam);
			// home = fixturesLoaded.events.map(element => element.strTeamBadge);
			// away = fixturesLoaded.events.map(element => element.strTeamBadge);
			// for (i = 0; i < rank.length; i++){
			// 	tableElement.innerHTML += `<td>${date[i]} @ ${time[i]}</td><td>${home[i]} vs ${away[i]}</td>`;
			// 	}
			// 	console.log(fixturesLoaded);
		} else{
			console.log(xhr.statusText);
		};
	};
	xhr.send();
};
getTableData2020();
getFixtureData();