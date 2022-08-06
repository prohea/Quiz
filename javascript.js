console.log("Hello World");
var startButton = document.getElementById("startbutton");
var startGameEl = document.getElementById("start-game");
var questionContainer = document.getElementById("question-container");
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Click Start Button");

  //hide the start-game screen and show the question-container
  startGameEl.classList.add('hidden')
  questionContainer.classList.remove('hidden')
}
