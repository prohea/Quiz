console.log("Hello World");
var startButton = document.getElementById("startbutton");
var startGameEl = document.getElementById("start-game");
var questionContainer = document.getElementById("question-container");
var timerEl = document.getElementById("timer");
var gameOverEl = document.getElementById("game-over");
startButton.addEventListener("click", startGame);
var resultsContainer = document.getElementById("results");
var retryButton = document.getElementById("retry");
var answerButton = document.getElementById("answer");


//Game Variables
var secondsRemaining = 10;
var currentQuestion = 0;
var score = 0;
var timer;

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

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

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

function displayQuestion() {
  questionContainer.innerHTML = `
        <h2>${questionsArray[currentQuestion].text}</h2>
        <button class="answer-btn">${questionsArray[currentQuestion].options[0]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[1]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[2]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[3]}</button>
    `;
}

function endGame() {
  //stop the timer
  clearInterval(timer);
  //hide the question-container
  questionContainer.classList.add("hidden");
  //show the game-over container
  gameOverEl.classList.remove("hidden");
}

function retryGame() {
  console.log("Click Retry");
}