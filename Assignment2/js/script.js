// question 1 
function getInput() { // gets input from text box for guessing game 
	var target1;
	var humanGuess;
	
	humanGuess = document.getElementById("humanGuess").value;
	return humanGuess;
}	



function randomNumber(a) { // generates random number from 0 to a 
	var randomInteger;
	randomInteger = Math.floor(Math.random()*a);
	return randomInteger
}

// global variables otherwise they would update whenever button is clicked
var countclick = 0;
var randomInt = randomNumber(100);


function compareGuess() { // compares input and chose number, outputs 3 different message based on the result of the comparison
	var guess; 
	var result;
	var textOutput1 ="";
	var textOutput2 ="";
	var target1;
	var target2; 

	guess = getInput();
	target1 = document.getElementById("computerGuess");
	target2 = document.getElementById("computerAnswer");
	
	
	if (guess == randomInt ) {
		result = 1; 
		countclick ++; 
	} else if (guess > randomInt) {
		result = 2;
		countclick++;
	} else if (guess < randomInt) {
		result = 3; 
		countclick ++;
	}
	
	if (result == 1) {
		textOutput1 = "Congratulations!";
		textOutput2 = "You have guessed the number in only " + countclick + " tries. The chosen number was " + randomInt + ". Please refresh the page to start again";
	} else if (result == 2) {
		textOutput1 = "Try again!" ;
		textOutput2 = "This is your try number " + countclick + ", the number you are looking for is lower than the one you entered. ";
	} else if (result == 3) {
		textOutput1 = "Try again!" ;
		textOutput2 = "This is your try number " + countclick + ", the number you are looking for is higher than the one you entered. ";
		}
	target1.innerHTML = textOutput1;
	target2.innerHTML = textOutput2;
}

function try1() {
	var target1; 
	
	target1 = document.getDocumentById("1");
	target1.innerHTML = "test successful";
}

// question 2 
var playerCount = 0; // setting global variable so it's only affected by refresh


var game = new Object(); // initializing object 
game.user1 =""; // used to determine xs and os 
game.user2 =""; // used to determine xs and os
game.user1History = []; // moves will be stored there
game.user2History = []; // moves will be stored there
game.currentUser=""; // used to see whose turn it is to play 
game.move = 1;
game.winner = 0; // used to set the winner
game.user1wins = 0;
game.user2wins = 0;

function getInput2(clicked_id) { // set who has Xs and who has Os
	if (clicked_id == "user1X") {
		game.user1 ="X";
		game.user2 ="O";
	} else if (clicked_id == "user1O") {
		game.user1 ="O";
		game.user2 ="X";
	}
	
}	

function confirmChoice() { // removes the choices once the confirm button is clicked
		var target1;
		var target2; 
		var target3; 
		var target4;
		
		target1 = document.getElementById("user1Xs");
		target2 = document.getElementById("user1Os");
		target3 = document.getElementById("playerTurn");
		target4 = document.getElementById("confirmChoices");
		
		if (game.user1 == "X" || game.user1 == "O"){
			target1.innerHTML = ""; // remove choices 
			target2.innerHTML = ""; // remove choices
			target3.innerHTML= "Player 1 chose " + game.user1 + ". Player 2 chose " + game.user2; // display confirmation message
			target4.innerHTML = "Press to start the game"; // update button messsage
			target4.setAttribute("onclick","startGame()") // update button onclick to start the game 
		} else {
			target3.innerHTML ="Please make a choice before clicking on confirm."
		}
		 
}

function startGame() {
	var i = 1;
	var target;
	var target1;
	var target2;
	var xPlayer;
	
	target1 = document.getElementById("confirmChoices"); 
	target2 = document.getElementById("playerTurn");
	
	for (i = 1; i < 10; i ++) { // looping through images to update the onclick function 
		target = document.getElementById(i);
		target.setAttribute("onclick", onclick ="updatePlayerTurn(), makeMove(this.id), checkWinner()")
	}
	
	if (game.user1 == "X") {
		xPlayer = "Player 1"; 
	} else if (game.user1 == "O") {
		xPlayer = "Player 2"; 
	}
	
	target1.remove(); // removing the button
	target2.innerHTML = xPlayer + " chose Xs, so he will begin. Click on any the tic tac toe board to make your first move.";
}

function updatePlayerTurn() {
	var target1;
	var textPlayer
	
	target1 = document.getElementById("playerTurn")
	
	if (playerCount %2 == 0) {;
		game.currentUser = "X";
		textPlayer = "O"; // when X is playing, it only gets updated after the turn so when game.currentUser = x, o should be displayed in the text
	} else if (playerCount % 2 == 1) {
		game.currentUser = "O";
		textPlayer = "X"; // when X is playing, it only gets updated after the turn so when game.currentUser = o, x should be displayed in the text
	}
	
	game.move = playerCount;
	playerCount++;
	target1.innerHTML = "It's " + textPlayer + "'s time to play!";
	 
}

function makeMove (clickedId) { // updates game history and visual display + removes onclick so the case cant be replayed
var array;
var arrayLength;

	if (game.currentUser == "X"){
		if (game.user1 =="X") {
			array = game.user1History; // if user1 is current user, update his game history
			arrayLength = array.length; 
			array[arrayLength] = clickedId; // move 0 will be in index 0, ...
			document.getElementById(clickedId).setAttribute("onclick", "makeOtherMove()"); // changes onclick so it can't be chosen again
			if (clickedId %2 != 0) {
				document.getElementById(clickedId).setAttribute("src", "img/greyX.png");
			} else if (clickedId % 2 == 0 ) {
				document.getElementById(clickedId).setAttribute("src", "img/whiteX.png");
			}
		} else if (game.user2 == "X"){ // if user2 is current user, update his game history
			array = game.user2History;
			arrayLength = array.length;
			array[arrayLength] = clickedId; // move 0 will be in index 0, ...
			document.getElementById(clickedId).setAttribute("onclick", "makeOtherMove()"); // changes onclick so it can't be chosen again
			if (clickedId %2 != 0) {
				document.getElementById(clickedId).setAttribute("src", "img/greyX.png");
			} else if (clickedId % 2 == 0 ) {
				document.getElementById(clickedId).setAttribute("src", "img/whiteX.png");
			}
		}
	} else if (game.currentUser == "O") { // if user2 is current user, update his game history
		if (game.user1 == "O") {
			array = game.user1History;
			arrayLength = array.length;
			array[arrayLength] = clickedId; // move 0 will be in index 0, ...
			document.getElementById(clickedId).setAttribute("onclick", "makeOtherMove()"); // changes onclick so it can't be chosen again
			if (clickedId %2 != 0) {
				document.getElementById(clickedId).setAttribute("src", "img/greyO.png");
			} else if (clickedId % 2 == 0 ) {
				document.getElementById(clickedId).setAttribute("src", "img/whiteO.png");
			}
		} else if (game.user2 == "O") {// if user2 is current user, update his game history
			array = game.user2History;
			arrayLength = array.length;
			array[arrayLength] = clickedId; // move 0 will be in index 0, ...
			document.getElementById(clickedId).setAttribute("onclick", "makeOtherMove()"); // changes onclick so it can't be chosen again
			if (clickedId %2 != 0) {
				document.getElementById(clickedId).setAttribute("src", "img/greyO.png");
			} else if (clickedId % 2 == 0 ) {
				document.getElementById(clickedId).setAttribute("src", "img/whiteO.png");
			}
		} 
	}
	// document.getElementById("test12345").innerHTML = game.user1History;
	// document.getElementById("test123456").innerHTML = game.user2History;

}

function checkWinner () {

	var user1;
	var user2; 
	var winner = 0;
	
	
	
	// winningCombinations = [	1, 2, 3, // not used, but reminder of winning combinations
	// 	 						1, 4, 7,
	//							1, 5, 9,
	//							2, 5, 8,
	//							3, 5, 7,
	//							3, 6, 9,
	//							4, 5, 6,
	//							7, 8, 9]
	
	user1 = game.user1History; // setting shortcut
	user2 = game.user2History; // setting shortcut
	
	var user1has1 = user1.includes("1");
	var user1has2 = user1.includes("2");
	var user1has3 = user1.includes("3");
	var user1has4 = user1.includes("4");
	var user1has5 = user1.includes("5");
	var user1has6 = user1.includes("6");
	var user1has7 = user1.includes("7");
	var user1has8 = user1.includes("8");
	var user1has9 = user1.includes("9");
	
	if (user1has1 == true && user1has2 == true && user1has3 == true) {
		winner = 1;
	}	else if (user1has1 == true && user1has4 == true && user1has7 == true) {
		winner = 1;	
	}	else if (user1has1 == true && user1has5 == true && user1has9 == true) {
		winner = 1;
	}	else if (user1has2 == true && user1has5 == true && user1has8 == true) {
		winner = 1;
	}	else if (user1has3 == true && user1has5 == true && user1has7 == true) {
		winner = 1;
	}	else if (user1has3 == true && user1has6 == true && user1has9 == true) {
		winner = 1;
	}	else if (user1has4 == true && user1has5 == true && user1has6 == true) {
		winner = 1;
	}	else if (user1has7 == true && user1has8 == true && user1has9 == true) {
		winner = 1;
	} 

	var user2has1 = user2.includes("1");
	var user2has2 = user2.includes("2");
	var user2has3 = user2.includes("3");
	var user2has4 = user2.includes("4");
	var user2has5 = user2.includes("5");
	var user2has6 = user2.includes("6");
	var user2has7 = user2.includes("7");
	var user2has8 = user2.includes("8");
	var user2has9 = user2.includes("9");
	

	if (user2has1 == true && user2has2 == true && user2has3 == true) {
		winner = 2;
	}	else if (user2has1 == true && user2has4 == true && user2has7 == true) {
		winner = 2;	
	}	else if (user2has1 == true && user2has5 == true && user2has9 == true) {
		winner = 2;
	}	else if (user2has2 == true && user2has5 == true && user2has8 == true) {
		winner = 2;
	}	else if (user2has3 == true && user2has5 == true && user2has7 == true) {
		winner = 2;
	}	else if (user2has3 == true && user2has6 == true && user2has9 == true) {
		winner = 2;
	}	else if (user2has4 == true && user2has5 == true && user2has6 == true) {
		winner = 2;
	}	else if (user2has7 == true && user2has8 == true && user2has9 == true) {
		winner = 2;
	} 
	if (winner == 1 || winner == 2) {
		endGame(winner);
	}
	// document.getElementById("test1234567").innerHTML = winner;
}

function makeOtherMove () { // tells player to chose another move if this case was chosen previously
	var target;
	
	target = document.getElementById("playerTurn");
	target.innerHTML = "This move was already performed, please make another move";
}

function endGame(result) {
	var i = 1;
	var target;
	var target1;
	var target2;
	

	for (i = 1; i < 10; i ++) { // removes onclick so game can't be played anymore
		target = document.getElementById(i);
		target.setAttribute("onclick", onclick="null");
	}
	if (result == 1 ) {
		game.user1wins++;
	} else if (result == 2) {
		game.user2wins++;
	}
	target1 = document.getElementById("playerTurn");
	target2 = document.getElementById("buttonTest");
	target1.innerHTML = "Player " + result + " won. The score is " + game.user1wins + " for player 1 and " + game.user2wins + " for player 2";
	target2.insertAdjacentHTML("beforeend", "<button id ='confirmChoices' type='button' class='btn btn-success' onclick ='startNewGame()'> Start new game !</button>");

}

function startNewGame () {
	var i = 1;
	var target;
	var target1;
	var target2;
	var target3;
	var target4;
	
	target1 = document.getElementById("user1Xs");
	target2 = document.getElementById("user1Os");
	target3 = document.getElementById("buttonTest");
	target4 = document.getElementById("playerTurn")
	
	target1.insertAdjacentHTML("beforeend", "<label class='form-check-label'><input id = 'user1X' type='radio' class='form-check-input' name ='optradio' onclick ='getInput2(this.id)'> Player 1 is Xs, Player 2 is Os </label>");
	target2.insertAdjacentHTML("beforeend", "<label class='form-check-label'><input id = 'user1O' type='radio' class='form-check-input' name ='optradio' onclick ='getInput2(this.id)'> Player 1 is Os, Player 2 is Xs </label>");
	target3.innerHTML ="";
	target3.insertAdjacentHTML("beforeend", "<button id ='confirmChoices' type='button' class='btn btn-success' onclick ='confirmChoice()'>Confirm your choice</button>");
	target4.innerHTML = "Choose your sides, and confirm you choices";
	for (i = 1; i < 10; i ++) {
		target = document.getElementById(i);
		target.setAttribute("onclick", "null");
		if (i % 2 == 0) {
			target.setAttribute("src", "img/FFFFFF.jpeg");
		} else if (i % 2 == 1) {
			target.setAttribute("src", "img/CDCDCD.jpeg");
		}
	}
	 
	game.user1History = [];
	game.user2History = [];
	playerCount = 0;
	game.user1 ="";
	game.user2 ="";
}

// question 3
var dictation = new Object();
dictation.answers = [];
dictation.correctAnswer = [];
dictation.answered = [];
dictation.solution = [];
dictation.numberOfQuestions;
dictation.possibleQuestions = ["cat", "hat", "intermittent", "technology", "wallpaper", "earth", "hamburger","sandwich"];
dictation.practice=[];

function getInput3(clicked_id) { // retrieve answer
	var target;
	var answer;
	var correctDom;
	var divDom;
	var divTarget;
	var answerNumber;
	
	answerNumber = clicked_id.charAt(clicked_id.length-1); // gets last character of the button which is the number of the question
	correctDom = "input" + answerNumber; // sets the dom to get the value as input#
	divDom = "div" + answerNumber;
	answerNumber = clicked_id.charAt(clicked_id.length-1); // gets last character of the button which is the number of the question

	target = document.getElementById(correctDom); // setting a shortcut for input dom
	divTarget = document.getElementById(divDom); // removes input option and puts placeholder text until everything is answered
	
	answer = target.value;
	divTarget.innerHTML = "Thanks for answering, once all the questions are answered you will see if you had the right answer!"
	
	dictation.answers[answerNumber - 1] = answer; // text that was entered is entered in the answers array
	dictation.answered[answerNumber -1] = true; // changes answered status to true
	
	if (checkFinished() == true) {
		checkAnswers();
		}
	console.log(dictation.answered, dictation.answers, checkFinished(), dictation.correctAnswer);

}

function urlGenerator (string) { // generates url based on chosen word
	var firstLetter;
	var firstThreeLetters;
	var firstFiveLetters;
	var len;
	var i;
	var underScore = "_";
	var url;
	console.log(string)
	len = string.length;
	
	firstLetter = string.slice(0,1);
	
	if (len < 3) {
		for (i = 1; i + len < 3; i ++) {
		}
		firstThreeLetters = string + underScore.repeat(i);
	} else {
		firstThreeLetters = string.slice(0,3);
	}
	
	if (len < 5) {
		for (i = 1; i + len < 5; i ++) {
		}
		firstFiveLetters = string + underScore.repeat(i);
	} else {
		firstFiveLetters = string.slice(0,5);
	}
	url = "https://dictionary.cambridge.org/media/english/us_pron/" + firstLetter + "/" + firstThreeLetters + "/" + firstFiveLetters + "/" + string + ".mp3";
	// console.log(url)
	return url;
	
}

function generateQuestions() { // generate the number of questions selected by the user 
	var target;
	var questionx;
	var questionId;
	var randomQuestion;
	var randomInt;
	var sourcex;
	var sourceId;
	var answerx;
	var answerId;
	var i = 0 ;
	var j;
	var questions;
	
	target = document.getElementById("questions");
	questions = dictation.possibleQuestions; // shortcut so we dont have to type the whole thing everytime
	
	for (i = 0; i < dictation.numberOfQuestions; i++) { // i is selected number from the earlier list
		dictation.answered[i] = false; // set the base state of answered to false
		randomInt = randomNumber(dictation.possibleQuestions.length); // 
		randomQuestion = questions[randomInt]; // randomly chosing a word as a question
		dictation.solution[i] = randomQuestion ; // adding question to the correct answer array
		questions.splice(questions.indexOf(randomQuestion), 1); // removes chosen question from array, so we won't choose the same question twice
	
		j = i + 1;
		
		// adds the needed HTML for the question 
		target.insertAdjacentHTML("beforeend", "<div class ='row'> <div class = 'col-sm-6'> <h3 id ='questionx'> Question X </h3> <audio controls> <source id ='sourcex' src ='https://dictionary.cambridge.org/media/english/us_pron/c/cat/cat__/cat.mp3' type='audio/mpeg'> </audio></div><div class = 'col-sm-6'>  <h3 id ='answerx'> Answer X</h3> <div class='input-group mb-3' id ='divx'> <input type ='text' class = 'form-control' placeholder ='Type in your answer' id ='inputx'> <div class='input-group-append'> <button class ='btn btn-info' type ='button' id = 'buttonx' onclick ='getInput3(this.id)'> Go </button> </div> </div> </div> </div>")
		
		// changes the id/text for question#
		changeId("question", j, undefined, "Question");
		
		// changes the id of source# + src is the same as the question assigned to it 
		changeId("source", j, randomQuestion);
		
		// changes id/text for answer#
		changeId("answer", j, undefined, "Answer");
		
		// changes id for input#
		changeId("input", j);
		
		// changes id for button#
		changeId("button", j);
		
		// changes id for div#
		changeId("div", j);
	}
	// console.log(dictation.solution, randomInt, dictation.numberOfQuestions, dictation.possibleQuestions)

	document.getElementById("numberSelection").remove(); // removes button once it is clicked
}

function getInput4() { // number of questions selected in the list is assigned to dictation.numberOfQuestions
	var e = document.getElementById("selectionList");
	var selectedNumber = e.options[e.selectedIndex].value; // assigns value of selected number
	dictation.numberOfQuestions = selectedNumber;	
}

function checkFinished() { // returns whether all the questions are answered
	var i = 0; 
	var isFinished = true; 
	
	for (i = 0; i < dictation.numberOfQuestions; i ++) {
		if (dictation.answered[i] == true) {
			isFinished = true;
		} else if (dictation.answered[i] == false) {
			isFinished = false;
			break; 
		}
	}
	return isFinished;
}

function checkAnswers () { // checks if answers are ok
	var i = 0;
	var divId; 
	var j;
	var targetDiv;
	var isWrong = 0;
	var targetButton;
	
	
	
	//console.log("a");
	for (i = 0; i < dictation.numberOfQuestions; i ++) { // looping through divs to change text depending on correctness of answers
		j = i + 1;
		divId = "div" + j;
		targetDiv = document.getElementById(divId);
		
		if (dictation.answers[i] == dictation.solution[i]) {
			dictation.correctAnswer[i] = true;
			targetDiv.innerHTML = "Congratulations ! You answered " + dictation.answers[i] + " and it is the correct answer!"
			
		} else if (dictation.answers[i] != dictation.solution[i]) {
			dictation.correctAnswer[i] = false;
			isWrong = 1;
			targetDiv.innerHTML = "You answered " + dictation.answers[i] + " and the correct answer is " + dictation.solution[i] + ". You need a little bit of practice, when you have revised all of you answers press go to practice!";
		}
	}
	
	if (isWrong == 0) {
		createButton("Start new game","practiceButton", "resetGame()" ); // creates a button 
	} else if (isWrong == 1) {
		createButton("Go to practice", "practiceButton", "createPractice()"); // creates a button 
		console.log(isWrong)
	}
}

function createButton (text, buttonId, onclickFunction) { // creates button in questions div
	var targetDom;
	var targetButton;
	console.log(buttonId)
	targetDom = document.getElementById("questions");
	
	targetDom.insertAdjacentHTML("beforeend", "<div  id = 'practiceButtonId' style= 'text-align:center'> <button type='button' id ='practiceButton' class='btn btn-primary' onclick = 'null'></button></div>");
	targetButton = document.getElementById("practiceButton");
	targetButton.innerHTML = text;
		
	switch (buttonId) {
	case undefined:
		break;
	default:
		targetButton.setAttribute("id", buttonId);
		break;
	}
	
	switch (onclickFunction) {
	case undefined:
		break;
	default:
		targetButton.setAttribute("onclick", onclickFunction)
	}
}

function createPractice() { // create practic
	var i = 0;
	var divId;
	var divTarget;
	var j;
	var buttonTarget;
	
	buttonTarget = document.getElementById("practiceButtonId");
	
	for (i = 0; i < dictation.numberOfQuestions; i ++) {

		if (dictation.correctAnswer[i] == false) { // for all the incorrect answers, makes you repeat them 
			j = i + 1;
			divId = "div" + j;
			dictation.practice[i] = 5; // 5 means we will have to repeat the word 5 times 
			divTarget = document.getElementById(divId);
			divTarget.innerHTML = "";
			divTarget.insertAdjacentHTML("beforeend", "<input type='text' class='form-control' placeholder = 'Type in the word correctly 5 times' id='inputx'><div class ='input-group-append'><button class ='btn btn-info' type ='button' id = 'buttonx' onclick ='getInput5(this.id)'> Go </button> </div>");
			
			changeId("input", j);
			changeId("button", j);
		} else if (dictation.correctAnswer[i] == true) {
			dictation.practice[i] = 0; // 0 means this question was already tested 
		}
	}
	buttonTarget.remove();	 // removes button
	// console.log(dictation.practice);
}
	
function getInput5(clicked_id) {
	var answerNumber; 
	var inputDom;
	var inputId;
	var divId;
	var divDom;
	var answer; 
	var indexNumber;
	var placeholderText;
	
	answerNumber = clicked_id.charAt(clicked_id.length-1); 	// gets last character of the button which is the number of the question
	inputId = "input" + answerNumber; 						
	inputDom = document.getElementById(inputId);			
	
	divId = "div" + answerNumber;							
	divDom = document.getElementById(divId);
	
	answer = inputDom.value;	
	indexNumber = answerNumber - 1;						// index number and answer number is NOT the same, setting those 
	
	// console.log(answer, indexNumber, dictation.solution[indexNumber], answer == dictation.solution[indexNumber]);
	
	
	switch (answer == dictation.solution[indexNumber]) {
	case true: // if word is written down correctly
		dictation.practice[indexNumber] --; // everytime you write the word correctly, decrements the number of times you have to write it down by 1 
		inputDom.value = ""; // removes what you wrote, so you have to write it every time 
		if (dictation.practice[indexNumber] > 0) {
			placeholderText = "Type in the word correctly " + dictation.practice[indexNumber] + " times.";
		} else if (dictation.practice[indexNumber] == 0) { // once the number of times you need to write the word = 0, changes the text
			divDom.innerHTML = "Congratulations!";
			switch (checkPracticeOver()) { // if all the practice is done, gives you the option to reset the game 
			case true:
				createButton("Reset the game", "resetButton", "resetGame()")
				break;
			case false: 
				break;
			}
		}
		// console.log("true happens");
		break;
		
	case false:  // if word is not written down correctly 
		placeholderText = "Please type in the word correctly. You need to do it " + dictation.practice[indexNumber] + " times.";
		inputDom.value = "";
		// console.log("false happens");
		break;
	}
	inputDom.setAttribute("placeholder",  placeholderText); 

}

function checkPracticeOver () { // if all the entries of practice = 0, practice is over (returns true)
	var i;
	var practiceOver = false; 
	
	for (i = 0; i < dictation.numberOfQuestions; i++) {
		switch (dictation.practice[i]) {
		case 0: 
			practiceOver = true; 
			break;
		default: 
			practiceOver = false; 
			break;
		}
	}
	return practiceOver;
}

function changeId(name, j, src, innerHTML) { // changes the id when adding multiple divs/inputs/buttons + option to add src and innerHTML
	var namex;
	var nameId;
	var nameTarget; 
	
	namex = name + "x";
	nameId = name + j; 
	nameTarget = document.getElementById(namex);
	
	switch (src) {
	case undefined:
		break;
	default: 
		nameTarget.setAttribute("src", urlGenerator(src))
	}
	switch (innerHTML) {
	case undefined: 
		break;
	default: 
		nameTarget.innerHTML = innerHTML + " " + j;
	}
	nameTarget.setAttribute("id", nameId);
	
	
}

function resetGame() { // resets the game
	var targetRow;
	var targetQuestions;
	
	targetQuestions = document.getElementById("questions");
	targetQuestions.innerHTML ="";
	targetRow = document.getElementById("row");
	targetRow.insertAdjacentHTML("beforeend", "<div id = 'numberSelection' class='container'> <form>\ <div class='form-group'> <label id = 'testing'>Select list (select one):</label> <select class='form-control' id='selectionList' name='sellist1'> <option value = '1'> 1</option><option value = '2'> 2</option><option value = '3'> 3</option><option value = '4'> 4</option><option value = '5'> 5</option>  </select>\ </div><button type='button' class='btn btn-primary' onclick = 'getInput4(), generateQuestions()'>Submit</button></form></div>");
	initDictation(); 
	
}

function initDictation () { // reset the properties of dictation
	dictation.answers = [];
	dictation.correctAnswer = [];
	dictation.answered = [];
	dictation.solution = [];
	dictation.numberOfQuestions;
	dictation.possibleQuestions = ["cat", "hat", "intermittent", "technology", "wallpaper", "earth", "hamburger","sandwich"];
	dictation.practice=[];
}