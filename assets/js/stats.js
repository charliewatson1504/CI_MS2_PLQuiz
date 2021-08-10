/**
 * stats.js is used by the stats.html file to load data from
 * thesportsdb [https://rapidapi.com/theapiguy/api/thesportsdb/] via rapid api [https://rapidapi.com/hub].
 */
// stats variables to access DOM elements in the stats.html file
const tableBtn = document.getElementById('table-btn');
const table2020Btn = document.getElementById('btn-2020');
const table2021Btn = document.getElementById('btn-2021');
const fixturesBtn = document.getElementById('fixtures-btn');
const tableElement = document.getElementById('table-list');

let rank = [];
let teams = [];
let badge = [];
let played = [];
let points = [];
let form = [];
let fixtures = [];
let date = [];
let time = [];
let events = [];
/**
 * event listeners to invoke functions
 * when the table and fixture buttons are clicked.
 */
tableBtn.addEventListener('click', function(){
	unhide(document.getElementById('seasons'));
});
table2020Btn.addEventListener('click', getTableData2020);
table2021Btn.addEventListener('click', getTableData2021);
fixturesBtn.addEventListener('click', getFixtureData);
fixturesBtn.addEventListener('click', function(){
	hide(document.getElementById('seasons'));
});
/**
 * getTableData2020 function accesses the api by invoking the XMLHttpRequest.
 * it uses a key and host to access the data - this is not the most secure way
 * to store this information so a future improvement would be to store this in 
 * a backend application.
 * function checks if a 200 status code is returned then the table data for 2020 season is displayed.
 * if status code is not 200 then error is logged to the console and error message displayed
 * to the user.
 */
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
			<th></th>
			<th>Team</th>
			<th>Played</th>
			<th>Points</th>
			<th>Form</th>
			</tr>`;
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
			console.log(xhr.statusText); // log error to console to allow inspection of error if it occurs
			tableElement.innerHTML = `<p>Error with trying to get table information. Please try again.</p>`;
		}
	};
	xhr.send();
	return ;
}
/**
 * getTableData2021 function accesses the api by invoking the XMLHttpRequest.
 * it uses a key and host to access the data - this is not the most secure way
 * to store this information so a future improvement would be to store this in 
 * a backend application.
 * function checks if a 200 status code is returned then the table data for 2021 season is displayed.
 * if status code is not 200 then error is logged to the console and error message displayed
 * to the user.
 */
function getTableData2021(){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://thesportsdb.p.rapidapi.com/lookuptable.php?s=2021-2022&l=4328");
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
			<th></th>
			<th>Team</th>
			<th>Played</th>
			<th>Points</th>
			<th>Form</th>
			</tr>`;
			for (i = 0; i < rank.length; i++){
				tableElement.innerHTML += `
				<td>${rank[i]}</td>
				<td><img src="${badge[i]}"</td>
				<td>${teams[i]}</td>
				<td>${played[i]}</td>
				<td>${points[i]}</td>
				<td>${form[i]}</td>`;
				}
		} else{
			console.log(xhr.statusText); // log error to console to allow inspection of error if it occurs
			tableElement.innerHTML = `<p>Error with trying to get table information. Please try again.</p>`;
		}
	};
	xhr.send();
	return ;
}
/**
 * getFixtureData function accesses the api by invoking the XMLHttpRequest.
 * it uses a key and host to access the data - this is not the most secure way
 * to store this information so a future improvement would be to store this in 
 * a backend application.
 * function checks if a 200 status code is returned then the upcoming fixtures are displayed.
 * if status code is not 200 then error is logged to the console and error message displayed
 * to the user.
 */
function getFixtureData(){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://thesportsdb.p.rapidapi.com/eventsnextleague.php?id=4328");
	xhr.setRequestHeader("x-rapidapi-key", "6ac09b72d5msh34d2f29a0d7e971p11ca0djsnf30428cae1c6");
	xhr.setRequestHeader("x-rapidapi-host", "thesportsdb.p.rapidapi.com");
	xhr.onload = function(){
		if(xhr.status == 200){
			let fixturesLoaded = JSON.parse(xhr.response);
			date = fixturesLoaded.events.map(element => element.dateEventLocal);
			time = fixturesLoaded.events.map(element => element.strTimeLocal);
			events = fixturesLoaded.events.map(element => element.strEvent);
			tableElement.innerHTML = `
			<tr>
			<th>Date and Time</th>
			<th>Teams</th>
			</tr>`;
			for (i = 0; i < date.length; i++){
				tableElement.innerHTML += `
				<tr>
				<td class="date time">${date[i]} @ ${time[i]}</td>
				<td>${events[i]}</td>
				</tr>
				`;
				}
		} else{
			console.log(xhr.statusText); // log error to console to allow inspection of error if it occurs
			tableElement.innerHTML = `<p>Error with trying to get fixture information. Please try again.</p>`;
		}
	};
	xhr.send();
	return ;
}
/**
 * unhide function is to display the 2 season buttons when the table button is clicked.
 * @param {*} element [the DOM element the function is being called on]
 */
function unhide (element) {
	element.classList.remove('hidden');
	return ;
}
/**
 * hide function is used to hide the 2020 and 2021 buttons when the 
 * fixtures button is clicked.
 * @param {*} element [the DOM element the function is being called on]
 */
function hide (element) {
	element.classList.add('hidden');
	return ;
}