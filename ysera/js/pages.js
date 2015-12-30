var PAGE_TEAM_COUNT = 0;
var PAGE_TEAM_NAME = 1;

var pageCurrent;

var createTeamCountPage = function() {
	console.log("create team count pages");
	
	var message = document.getElementById(MESSAGE_MAIN);
	message.innerHTML = "";
	message.innerHTML += returnMainMessage("Welcome");
	
	var input = document.getElementById(INPUT_MAIN);
	input.innerHTML = "";
	input.innerHTML += "<input id=\"" + INPUT_TEAM_COUNT + "\" class=\"form-control\"" +
			" type=\"number\" min=\"" + MIN_TEAM + "\" max=\"" + MAX_TEAM + "\" placeholder=\"How many teams play?(2-4)\">";
	
	setPrevTrue(false);
};

var createTeamNamePage = function() {
	var count = document.getElementById(INPUT_TEAM_COUNT).value;
	if(count == "" || count < MIN_TEAM || count > MAX_TEAM) {
		pageCurrent--;
		console.log("[ERROR] invalid value for team count");
	} else {
		console.log("create team name pages");
		
		var count = document.getElementById(INPUT_TEAM_COUNT).value;
		console.log(count + " teams play game");
		
		var input = document.getElementById(INPUT_MAIN);
		input.innerHTML = "";
		
		for (var i = 0; i < count; i++) {
			input.innerHTML += "<input id=\"" + INPUT_TEAM_NAME + i + "\" class=\"form-control\"" +
					" type=\"text\" placeholder=\"#" + (i + 1) +" team name\">";
		}
		
		setPrevTrue(true);
	}
};

var createPage = function(value) {
	pageCurrent = pageCurrent + value;
	
	if(pageCurrent < 0) {
		pageCurrent = 0;
	}
	
	switch(pageCurrent) {
		case PAGE_TEAM_COUNT:
			createTeamCountPage();
			break;
		case PAGE_TEAM_NAME:
			createTeamNamePage();
			break;
	}
};
