$(document).ready(function() {

    var number = 60;
    var intervalId;

    function pageLoad() {
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

//variables for the user results, which will increment
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// loop over question array and use jQuery to append html and display questions
for (var i = 0; i < questions.length; i++) {
    $("#quiz").append("<p>" + questions[i] + "</p>");

    // loop over choices to show choices per question and use jQuery to append html and display answer choices
    // also add radio buttons to each answer choice by defining input type
    //each specific quesiton with it's related answer choices are displayed (name/value pair,like inj an object)
    //choices [i][j] after name/value will display the answer choices on the page
    for (var j = 0; j < choices[i].length; j++) {
        $("#quiz").append("<input type='radio' name='" + questions[i] + "' value='" + choices[i][j] + "'>" + choices[i][j] + "</input>");
    }

}

//click event for "Done" button
$("#done").on("click", function() {
    // console.log('inside ------')
    //declare variable, "radioButtons", which will extract all elements from the html defined as input type=radio, via the document.querySelectorAll method
    //radioButton variable can hold all 20 radio buttons on the quiz
    var radioButtons = document.querySelectorAll("input[type=radio]");
    $("#quiz-main").hide();
    //for loop is initialize the answers, 
    for (var i = 0; i < questions.length; i++) {
        //push method populates user answers into empty array, pushes placeholders into empty array ("").
        userSelected.push("");
    }

    //loop over all 20 radio buttons
    //declare variable called questionIndex, which uses indexOf method to check which quesiton the radio button belongs to (compare with name to search array)
    // console.log('radio 0000', radioButtons);
    for (var i = 0; i < radioButtons.length; i++) {
        //Math.floor(i / 4);

        //checking which radio button the user selected
        if (radioButtons[i].checked === true) {
            console.log('checked radio!!!', radioButtons[i].value);

            //userSelected[questionIndex] = radioButtons[i].value;
            console.log('user selected!!', userSelected);
            //declare variable questionIndex and equate to equate it to the radio button selected for that question
            var questionIndex = questions.indexOf(radioButtons[i].name)
            //replace placeholder value in the userSelected array with the user's choice (the radio button they clicked)
            userSelected[questionIndex] = radioButtons[i].value;
        }
    }


    for (var j = 0; j < userSelected.length; j++) {
        // var a = answers.indexOf(userSelected[j]);
        if (userSelected[j] === "") {
            console.log("no answer");
            unanswered = unanswered + 1
            $("#unanswered").html("Unanswered " + unanswered);
        } else if (userSelected[j] !== answers[j]) {
            console.log("incorrect answer");
            incorrect = incorrect + 1
            $("#incorrect").html("Incorrect " + incorrect);
        } else if (userSelected[j] === answers[j]) {
            console.log("correct answer");
            correct = correct + 1
            $("#correct").html("Correct " + correct);
        }
    }
//I still need to put in a reset function, which displays the results if the timer runs out
//I received help on this from my tutor and from a work colleague.  In an effort to understand and retain the information, I pseudocoded
//what I had worked with and learned
})