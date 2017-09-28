$(document).ready(function() {

    var number = 60;
    var intervalId;

    function pageLoad () {
    	$("#quiz-main").hide();
    }

    pageLoad();

    $("#start").on("click", function() {
        start();
        console.log("start button clicked");
    })

    // function to start game and display the first question
    function start() {
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        $("#quiz-main").show();
    }

    function decrement() {
        number--;
        $("#show-timer").html("<h3>Time Remaining: " + number + " Seconds</h3>");
        if (number === 0) {
            stop();
        }
    }

    function stop() {
        alert("Time is Up!");
        clearInterval(intervalId);
    }

});

// an array for questions
// an array for answer choices
// an array for actual answers
// an empty array to populate with user's selection

var questions = ["What year was the first Apple computer released?", "First person shooter video game, Doom, was first released in what year?", "With over 17 million units produced, what was the highest selling model of personal computer ever?", "1024 Gigabytes is equal to one what?", "In 1975 an engineer created the first electronc camera while working for what company?"];
var choices = [
    ["1970", "1976", "1981", "1973"],
    ["1986", "1990", "1993", "1995"],
    ["Apple Macintosh", "IBM ThinkPad", "Big Beige Box", "Commodore 64"],
    ["Terabyte", "Megabyte", "Kilobyte", "Gigabyte"],
    ["Panasonic", "Kodak", "Polaroid", "Sony"]
];
var answers = ["1976", "1993", "Commodore 64", "Terabyte", "Kodak"]
var userSelected = [];

var correct = 0;
var incorrect = 0;
var unanswered = 0;

// loop over question array and use jQuery to append html and display questions
for (var i = 0; i < questions.length; i++) {
    $("#quiz").append("<p>" + questions[i] + "</p>");

    // loop over choices to show choices per question and use jQuery to append html and display answer choices
    // also add radio buttons to each answer choice by defining input type
    for (var j = 0; j < choices[i].length; j++) {
        $("#quiz").append("<input type='radio' name='" + questions[i] + "' value='" + choices[i][j] + "'>" + choices[i][j] + "</input>");
    }

}


$("#done").on("click", function() {
    // console.log('inside ------')
    //declare variable, "radioButtons", which will hold all elements defined as input type=radio, via the document.querySelectorAll method
    var radioButtons = document.querySelectorAll("input[type=radio]");
    $("#quiz-main").hide();
    //loop over questions and userSelected-------??
    for (var i = 0; i < questions.length; i++) {
        userSelected[i] = "";
    }

    //loop over radio buttons
    // console.log('radio 0000', radioButtons);
    for (var i = 0; i < radioButtons.length; i++) {
        var questionIndex = Math.floor(i / 4);

        console.log(i + " " + Math.floor(i / 4) + " each button----", radioButtons[i].checked);
        if (radioButtons[i].checked === true) {
            console.log('checked radio!!!', radioButtons[i].value);
            //push user answers into empty array
            //userSelected[questionIndex] = radioButtons[i].value;
            console.log('user selected!!', userSelected);
        }
    }


    for (var j = 0; j < userSelected.length; j++) {
        var a = answers.indexOf(userSelected[j]);
        if (a === -1) {
            console.log("incorrect answer");
            incorrect = incorrect + 1
            $("#incorrect").html("Incorrect " + incorrect);
        } else if (a > -1) {
            console.log("correct answer");
            correct = correct + 1
            $("#correct").html("Correct " + correct);
        }
    }

    var b = questions.length - incorrect - correct;
    console.log("unanswered questions " + b);
    $("#unanswered").html("Unanswered " + b);

})




// function that counts the time down and checks if the time has run out - will be similar to decrement function, but will have a conditional in it and will 
// check if the time of the question is equal to 0 and if it is, clear the timeout as well as add one to unanswered question

// function to check radio button value, if it is right key - checking value, tie key to value of radio buttons

// function to show if time is up and display the correct answer

// correct/incorrect/game over/reset functions