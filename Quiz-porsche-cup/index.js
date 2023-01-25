let totalQuestions = 15;
let wrongAnswers = 0;
let rightAnswers = 0;
let currentQuestion = 0;

// Add the correct answers for the open-ended questions
let correctAnswers = [0, 0, 1, 3, 0, 1, 0, 2, 2, 0, "Duitsland", "15", "Kévin Estre, Jeroen Bleekemolen, Michael Christensen, Kévin Estre", "1:37:00", "28"];

function checkAnswers() {
    for (let i = 0; i < totalQuestions; i++) {
      if (i >= 10) {
        // For open-ended questions (i.e. questions 11 through 15), check the value of the input field
        let selectedAnswer = document.querySelector(`#question${i+1} input`).value;
        let questionDiv = document.getElementById(`question${i+1}`);
        if (selectedAnswer.toLowerCase() == correctAnswers[i-10]) {
            rightAnswers++;
            questionDiv.style.color = "green";
        } else {
            wrongAnswers++;
            questionDiv.style.color = "red";
        }
      } else {
        // For multiple choice questions (i.e. questions 1 through 10), check the value of the selected radio button
        let selectedAnswer = document.querySelector(`input[name='question${i+1}']:checked`);
        let questionDiv = document.getElementById(`question${i+1}`);
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