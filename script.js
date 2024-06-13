let timeLeft = 60;
let currentQuestion = 1;
const totalQuestions = 20;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
}

function padNumber(number) {
    return (number < 10) ? `0${number}` : number;
}

document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});
function showQuestion(questionNumber) {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        question.classList.remove('active');
    });

    const selectedQuestion = document.getElementById('q' + questionNumber);
    if (selectedQuestion) {
        selectedQuestion.classList.add('active');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    startTimer();
    showQuestion(1); // Show the first question by default
});

function prevQuestion() {
    if (currentQuestion > 1) {
        showQuestion(currentQuestion - 1);
        currentQuestion=currentQuestion - 1;
    }
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        showQuestion(currentQuestion + 1);
        currentQuestion=currentQuestion + 1;
    }
}

function confirmAnswer() {
    alert('Answer confirmed for question ' + currentQuestion);
}

function resetQuiz() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach((input) => {
        input.checked = false;
    });
   
}

function submitQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    alert('Answer submitted for question ' + currentQuestion);
    
}