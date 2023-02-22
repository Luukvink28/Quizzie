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
        question : "Wat is de naam van de competitie waarin de Porsche Cup?",
        choiceA : "A)Porsche Supercup ",
        choiceB : "B)Porsche Superleague",
        choiceC : "C)Porsche Grand Prix",
        correct : "A"

    },{
        question : "Wie organiseert de Porsche Cup?",
        choiceA : "A)Porsche AG",
        choiceB : "B)FIA",
        choiceC : "C)Mercedes-Benz",
        correct : "A"
    },{
        question : "Wat is het doel van de Porsche Cup?",
        choiceA : "A)Om de beste coureur te bepalen",
        choiceB : "B)Om een kampioenschap te bemachtigen",
        choiceC : "C)Om geld te verdienen",
        correct : "B"
      },{
        question : "Welke type auto's worden gebruikt in de Porsche Cup",
        choiceA : "A)Porsche 911 GT3 Cup",
        choiceB : "B)Porsche 919 Hybrid",
        choiceC : "C)Porsche 996 GT3",
        correct : "A"
      },{
        question : "Wanneer begon de Porsche Cup?",
        choiceA : "A)1991",
        choiceB : "B)1995",
        choiceC : "C)2002",
        correct : "B"
      },{
        question:  "Wat is de beste manier om een Porsche Cup-team te vormen?",
        choiceA : "A)Koop een Porsche auto",
        choiceB : "B)Zoek een sponser",
        choiceC : "C)Vind een ervaren coureur",
        correct : "B"
      },{
        question:  "Waar worden de races van de Porsche Cup gehouden?",
        choiceA : "A)Op circuits over de hele wereld",
        choiceB : "B)Op autocrossbanen",
        choiceC : "C)Op stadswegen",
        correct : "A"
      },{
        question:  "Wat is er nodig om deel te nemen aan de Porsche Cup",
        choiceA : "A)Een lange testrit",
        choiceB : "B)Een hoge aanbetaling",
        choiceC : "C)Een goedkeuring van een commissie",
        correct : "C"
      },{
        question:  "Wat is de minimumleeftijd om deel te nemen aan de Porsche Cup?",
        choiceA : "A)14",
        choiceB : "B)16",
        choiceC : "C)18",
        correct : "C"
      },{
        question:  "Hoeveel verschillende klasses zijn er in de Porsche Cup?",
        choiceA : "A)2",
        choiceB : "B)3",
        choiceC : "C)4",
        correct : "B"
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