// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Hoe heet de acteur van Marty McFly?",
        choiceA : "A)Michael J. Fox ",
        choiceB : "B)Tom Cruise",
        choiceC : "C)Christopher Lloyd",
        correct : "A"

    },{
        question : "Hoe heet de acteur van Doc Brown?",
        choiceA : "A)Sylvester Stallone",
        choiceB : "B)Christopher Lloyd",
        choiceC : "C)Michael J. Fox",
        correct : "B"
    },{
        question : "Welke auto gebruiken Doc & Marty om terug te gaan in de tijd?",
        choiceA : "A)DeLorean DMC-12",
        choiceB : "B)Ford Mustang",
        choiceC : "C)Chevrolet Camaro",
        correct : "A"
      },{
        question : "In welk jaar speelt de film Back to the Future 2 zich af?",
        choiceA : "A)1955",
        choiceB : "B)1985",
        choiceC : "C)2015",
        correct : "C"
      },{
        question : "Welke stad komt het meeste voor in de films?",
        choiceA : "A)Hill Valley",
        choiceB : "B)Hill Town",
        choiceC : "C)Hillsburg",
        correct : "A"
      },{
        question:  "Met wat heeft Doc tijdreizen mogelijk gemaakt?",
        choiceA : "A)Tijdschakelaar",
        choiceB : "B)Flux capacitor",
        choiceC : "C)Kernenergie",
        correct : "B"
      },{
        question:  "Hoe snel moet de auto gaan om te kunnen tijdreizen",
        choiceA : "A)88MPH",
        choiceB : "B)69MPH",
        choiceC : "C)99MPH",
        correct : "A"
      },{
        question:  "Hoe heet de vriendin van Marty?",
        choiceA : "A)Lorene",
        choiceB : "B)Emmet",
        choiceC : "C)Jennifer",
        correct : "C"
      },{
        question:  "Hoe heet de vader van Marty?",
        choiceA : "A)Biff",
        choiceB : "B)Needles",
        choiceC : "C)George",
        correct : "C"
      },{
        question:  "Wat zegt Doc als hij verbaasd is?",
        choiceA : "A)Great Scott!",
        choiceB : "B)Butthead",
        choiceC : "C)Chicken",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 300; // 5min
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}