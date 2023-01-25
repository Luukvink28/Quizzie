let totalQuestions = 15;
let wrongAnswers = 0;
let rightAnswers = 0;
let currentQuestion = 0;

let correctAnswers = [0, 0, 1, 3, 0, 1, 0, 2, 2, 0, 0, 2, 0, 3, 2];

function checkAnswers() {
    for (let i = 0; i < totalQuestions; i++) {
      let selectedAnswer = document.querySelector(`input[name='question${i+1}']:checked`);
      let questionDiv = document.getElementById(`question${i+1}`);
      if (selectedAnswer) {
        if (selectedAnswer.value == correctAnswers[i]) {
          rightAnswers++;
          questionDiv.style.color = "green";
        } else {
          wrongAnswers++;
          questionDiv.style.color = "red";
        }
      }
    }
  
    let result = document.getElementById("result");
    result.innerHTML = `You got ${rightAnswers} out of ${totalQuestions} right.`;
  }