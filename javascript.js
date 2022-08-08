console.log("Hello World");

//Variable Buttons
var startButton = document.getElementById("startbutton");
var startGameEl = document.getElementById("start-game");
var retryButton = document.getElementById("retry");
var answerButton = document.getElementById("answer-btn");

//Variable Containers
var questionContainer = document.getElementById("question-container");
var resultsContainer = document.getElementById("results");

//Variable Elements
var timerEl = document.getElementById("timer");
var gameOverEl = document.getElementById("game-over");

//Event Listeners
startButton.addEventListener("click", startGame);

//Game Variables
var secondsRemaining = 10;
var currentQuestion = 0;
var score = 0;
var timer;

//Questions Array
var questionsArray = [
  {
    text: "What is Jude's favorite color?",
    options: ["red", "blue", "green", "purple"],
    correctAnswer: "purple",
  },
  {
    text: "What color is the sky?",
    options: ["blue", "green", "white", "indigo"],
    correctAnswer: "blue",
  },
  {
    text: "What are we mostly made up up?",
    options: ["blood", "people", "oxygen", "water"],
    correctAnswer: "water",
  },
];

//Start Game
function startGame() {
  console.log("Click Start Button");

  //hide the start-game screen and show the question-container
  startGameEl.classList.add("hidden");
  questionContainer.classList.remove("hidden");

  //show the timer and start it
  timerEl.innerText = `Time Remaining: ${secondsRemaining}`;
  timerEl.classList.remove("hidden");

  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.innerText = `Time Remaining: ${secondsRemaining}`;
    if (secondsRemaining <= 0) {
      endGame();
    }
  }, 1000);

  displayQuestion();
}

//Display Question
function displayQuestion() {
  questionContainer.innerHTML = `
        <h2>${questionsArray[currentQuestion].text}</h2>
        <button class="answer-btn">${questionsArray[currentQuestion].options[0]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[1]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[2]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[3]}</button>
    `;
}

//End Game
function endGame() {
  //stop the timer
  clearInterval(timer);
  //hide the question-container
  questionContainer.classList.add("hidden");
  //show the game-over container
  gameOverEl.classList.remove("hidden");
}

//Retry Game
function retryGame() {
  console.log("Click Retry");
}
