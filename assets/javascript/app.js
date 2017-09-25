var number = 60;
var intervalId;

$("#start").on("click", start);

function start() {
	intervalId = setInterval(decrement, 1000);
}

function decrement () {
	number--;
	$("#show-timer").html("<h3>Time Remaining: " + number + " Seconds</h3>");
	if (number === 0) {
	stop();
	}
}

function stop () {
	alert("Time is Up!");
	clearInterval(intervalId);
}

// var questions = [{
// 	question: "What year was the first Apple computer released?",
// 	choices:["1970", "1976", "1981", "1973"],
// 	correct answer: 1
// }, {
// 	question: "First person shooter video game, Doom, was first released in what year?",
// 	choices: ["1986", "1990", "1993", "1995"],
// 	correct answer: 2
// }, {
// 	question: "With over 17 million units produced, what was the highest selling model of personal computer ever?",
// 	choices: ["Apple Macintosh", "IBM ThinkPad", "Big Beige Box", "Commodore 64"],
// 	correct answer: 3
// }, {
// 	question: "1024 Gigabytes is equal to one what?"
// 	choices: ["Terabyte", "Megabyte", "Kilobyte", "Gigabyte"],
// 	correct answer: 0
// }, {
// 	question: "In 1975 an engineer created the first electronc camera while working for what company?"
// 	choices: ["Panasonic", "Kodak", "Polaroid", "Sony"],
// 	correct answer: 1
// }
// }];
