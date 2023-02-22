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
        question : "1. Wie was de eerste Amerikaanse rapper die een nummer 1-hit scoorde in de Billboard Hot 100?",
        choiceA : "A)Vanilla Ice",
        choiceB : "B)LL Cool",
        choiceC : "C)Run-DMC",
        correct : "C"

    },{
        question : "Welk rapduo was bekend om hun grote hit 'Walk This Way' in 1986?",
        choiceA : "A)Public Enemy",
        choiceB : "B)Run-DMC",
        choiceC : "C)Beastie Boys",
        correct : "B"
    },{
        question : "Welke groep was de eerste West-Coast rapgroep die een album uitbracht?",
        choiceA : "A)Public Enemy",
        choiceB : "B)Boogie Down Productions",
        choiceC : "C)N.W.A",
        correct : "C"
      },{
        question : "Welke rapper was bekend om zijn hit 'Rapper's Delight' uit 1979?",
        choiceA : "A)The Sugarhill Gang",
        choiceB : "B)Grandmaster Flash",
        choiceC : "C)LL Cool J",
        correct : "A"
      },{
        question : "Welke groep was de eerste Afrikaans-Amerikaanse rapgroep die een album uitbracht?",
        choiceA : "A)Run-DMC",
        choiceB : "B)Public Enemy",
        choiceC : "C)Boogie Down Productions",
        correct : "A"
      },{
        question:  "Wie was de eerste Amerikaanse rapper die een Grammy won voor beste rapalbum?",
        choiceA : "A)Tupac",
        choiceB : "B)Dr. Dre",
        choiceC : "C)Emmet",
        correct : "B"
      },{
        question:  "Welke groep was bekend om hun hit 'Jump' uit 1992?",
        choiceA : "A)Wu-Tang Clan",
        choiceB : "B)Vanilla Ice",
        choiceC : "C)Kriss Kross",
        correct : "C"
      },{
        question:  "Welke rapper won in 1995 een Grammy voor zijn album 'Me Against the World'?",
        choiceA : "A)Lorene",
        choiceB : "B)Emmet",
        choiceC : "C)Jennifer",
        correct : "B"
      },{
        question:  "Welke groep was bekend om hun hit 'Gangsta's Paradise' uit 1995?",
        choiceA : "A)Coolio",
        choiceB : "B)Naughty By Nature",
        choiceC : "C)Topac",
        correct : "A"
      },{
        question:  "Welke rapper was bekend om zijn hit 'Nuthin' But a G Thang' uit 1992?",
        choiceA : "A)Coolio",
        choiceB : "B)Notorious B.I.G",
        choiceC : "C)Dr. Dre",
        correct : "C"
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