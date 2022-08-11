console.log("Hello World");

//Variable Buttons
var startButton = document.getElementById("startbutton");
var startGameEl = document.getElementById("start-game");
var retryButton = document.getElementById("retrybutton");
var answerButton = document.getElementById("answer-btn");
var scoreButton = document.getElementById("scorebutton");

//Variable Containers
var questionContainer = document.getElementById("question-container");
var resultsContainer = document.getElementById("results");
var footerContainer = document.getElementById("result-info");
var playerScore = document.getElementById("player-score");

//Variable Elements
var timerEl = document.getElementById("timer");
var gameOverEl = document.getElementById("game-over");

//Event Listeners
startButton.addEventListener("click", startGame);

//Game Variables
var secondsRemaining = 30;
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
      // if (retryGame) {
      // }
    }
  }, 1000);
  footerContainer.classList.remove("hidden");
  displayQuestion();
}

//Display Question
function displayQuestion() {
  questionContainer.innerHTML = `
        <h2 id="qt">${questionsArray[currentQuestion].text}</h2>
        <button class="answer-btn">${questionsArray[currentQuestion].options[0]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[1]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[2]}</button>
        <button class="answer-btn">${questionsArray[currentQuestion].options[3]}</button>
    `;
  var elements = document.querySelectorAll(".answer-btn");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", nextQuestion);
  }
}

// End Game
function endGame() {
  //stop the timer
  clearInterval(timer);
  //hide the question-container
  questionContainer.classList.add("hidden");
  //show the game-over container
  gameOverEl.classList.remove("hidden");
  console.log("Click Retry");
  retryButton.addEventListener("click", retryGame);
  console.log("Click Score");
  scoreButton.addEventListener("click", scoreGame);
}

//Retry Game
function retryGame() {
  clearInterval(timer);
  gameOverEl.classList.add("hidden");
  startGameEl.classList.remove("hidden");
  questionContainer.classList.add("hidden");
  timerEl.classList.add("hidden");
  startGame();
}

//Score
function scoreGame() {
  console.log("Click Score Button");
  gameOverEl.classList.add("hidden");
  questionContainer.classList.add("hidden");
  timerEl.classList.add("hidden");
}

function nextQuestion(event) {
  console.log(event.target.innerText, event.target.textContent, "btn");
  var userChoice = event.target.textContent;
  if (userChoice == questionsArray[currentQuestion].correctAnswer) {
    score += 10;
    playerScore.innerText = score;
    event.target.classList.add("right");
  } else {
    secondsRemaining -= 5;
    event.target.classList.add("wrong");
  }
  setTimeout(function () {
    event.target.classList.remove("right");
    event.target.classList.remove("wrong");
    if (currentQuestion < questionsArray.length - 1) {
      currentQuestion++;
      var question = document.getElementById("qt"); //Question By ID
      question.textContent = questionsArray[currentQuestion].text;
      var elements = document.querySelectorAll(".answer-btn"); // Class - 4
      for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = questionsArray[currentQuestion].options[i];
      }
    } else {
      console.log(score);
      endGame();
    }
  }, 800);
}

retryButton.addEventListener("click", function () {
  location.reload();
});
