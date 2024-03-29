// open and close nav for small screens 
function openNav(navBar) {
    var nav = document.querySelector('#'+navBar)
    nav.classList.remove('hidden')
}
function closeNav(navBar) {
    var nav = document.querySelector('#'+navBar)
    nav.classList.add('hidden')
}

// Opening and closing lessons
function openLesson(lesson) {
    var open = document.querySelector("#" + lesson);
    open.classList.remove("hidden");
}

function closeLesson(lesson) {
    var open = document.querySelector("#" + lesson);
    open.classList.add("hidden");
}

function completeBtn(lessonComplete) {
    var lsnComplete = document.querySelector('#' + lessonComplete);
    lsnComplete.classList.remove('main-button');
    lsnComplete.classList.add('complete-btn');
}

//Opening and closing Challenges
var lessonChallenge = ' '; 
var count = 0;
var answer = 0;

function openChallenge(challengeType) {
    var challengeWindow = document.querySelector('#challenge-window');
    challengeWindow.classList.remove('hidden');
    // reset progress bar  
    var progress = document.querySelector('#progression')
    progress.className = '';
    progress.classList.add('progress-bar-' + count);
    // reset submit buttton
    var tryAgain = document.querySelector('#submit-btn');
    tryAgain.classList.remove('try-again');
    tryAgain.innerText = 'Submit';
    // populate challenge 
    populateChallenge(challengeType);
    return lessonChallenge = challengeType;
}

function closeChallenge() {
    if (count === 10) {
        // hides challenge and resets count to 0
        var chalComplete = document.querySelector('#challenge-window');
        chalComplete.classList.add('hidden');
        // will mark challenge as completed if you finsih all 10 questons 
        var challengeBtn = document.querySelector('#' + lessonChallenge);
        challengeBtn.classList.remove('main-button');
        challengeBtn.classList.add('complete-btn');e 
        return count = 0;
    } else {
        //hides challenge and ressets count to 0
        var chalComplete = document.querySelector('#challenge-window');
        chalComplete.classList.add('hidden');
        return count = 0 ;
    }
}

//Populate Challenge 

function populateChallenge (challenge) {
    if (challenge === 'addition') {
        // get numbers for addition problems
        var num1 = Math.floor(Math.random() * (999-100)) +100;
        var num2 = Math.floor(Math.random()* (999-100)) + 100;
        var operator = ' + ';
        // put into html 
        var firstNum = document.querySelector('#first-number');
        firstNum.innerText = num1;
        var operation = document.querySelector('#operation');
        operation.innerText = operator;
        var lastNum = document.querySelector('#second-number');
        lastNum.innerText = num2;
        var answerType = document.querySelector('#answer-type');
        answerType.innerText = 'sum';
    } else if (challenge === 'subtraction') {
        // get numbers for subtraction problems
        num1 = Math.floor(Math.random() * (999-100)) +100;
        num2 = Math.floor(Math.random()* (999-100)) + 100;
            if (num1 < num2) {
                var temp = num2;
                num2 = num1;
                num1 = temp;
            }
        operator = ' - '
        //put into html
        var firstNum = document.querySelector('#first-number');
        firstNum.innerText = num1;
        var operation = document.querySelector('#operation');
        operation.innerText = operator;
        var lastNum = document.querySelector('#second-number');
        lastNum.innerText = num2;
        var answerType = document.querySelector('#answer-type');
        answerType.innerText = 'result';
    } else if (challenge === 'multiplication') {
        // get numbers for multiplication problems
        num1 = Math.floor(Math.random() * 10 + 1) ;
        num2 = Math.floor(Math.random() * 10 + 1);
        operator = ' X ';
        // put into html 
        var firstNum = document.querySelector('#first-number');
        firstNum.innerText = num1;
        var operation = document.querySelector('#operation');
        operation.innerText = operator;
        var lastNum = document.querySelector('#second-number');
        lastNum.innerText = num2;
        var answerType = document.querySelector('#answer-type');
        answerType.innerText = 'product';
    } else {
        // get numbers division problems
        num1 = Math.floor(Math.random() * 10 + 1) ;
        num2 = Math.floor(Math.random() * 10 + 1);
        operator = ' / ';
        var quotient = num1 * num2 ;
        //put into html
        var firstNum = document.querySelector('#first-number');
        firstNum.innerText = quotient;
        var operation = document.querySelector('#operation');
        operation.innerText = operator;
        var lastNum = document.querySelector('#second-number');
        lastNum.innerText = num2;
        var answerType = document.querySelector('#answer-type');
        answerType.innerText = 'quotient';
    }

}

//Submitting answer
var answer = 0
var correctAnswer = 0

function storeAnswer () {
    //stores Users answer
    var input = document.querySelector('#input').value
    return answer = input
}

function submit() {
    calculator();
    // compares input to corect answer and resets challenge if correct
    if (answer == correctAnswer) {
        count++;
        //rests submit button
        var tryAgain = document.querySelector('#submit-btn');
        tryAgain.classList.remove('try-again');
        tryAgain.innerText = 'Submit';
        // increase progress bar 
        var progress = document.querySelector('#progression');
        progress.classList.add('progress-bar-' + count);
        //show correct
        showCorrect()
        if (count === 10) {
            // congrats message when you complete challenge 
            var cong = document.querySelector('#first-number');
            cong.innerText = 'Cong';
            var ratz = document.querySelector('#operation');
            ratz.innerText = 'ratz';
            var exclamation = document.querySelector('#second-number');
            exclamation.innerText = '!';
        } else {
            // if you haven't reached 10 correct answers than this will re-populate the questons
            populateChallenge(lessonChallenge);
        }
    } else {
        // if you get it wrong submit button changes to 'try again'
        tryAgain = document.querySelector('#submit-btn');
        tryAgain.classList.add('try-again');
        tryAgain.innerText = 'Try Again!';
    }
}


function calculator() {
    //calculates correct answer to compare against users answer 
    number1 = document.querySelector('#first-number');
    num1 = number1.innerText;
    number2 = document.querySelector('#second-number');
    num2 = number2.innerText;
    if (lessonChallenge === 'addition') {
        return correctAnswer = (+num1) + (+num2);
    } else if (lessonChallenge === 'subtraction') {
        return correctAnswer = num1 - num2;
    } else if (lessonChallenge === 'multiplication') {
        return correctAnswer = num1 * num2;
    } else {
        return correctAnswer = num1 / num2;
    }
}

//display and hide 'correct' message if user's answer is correct  
function showCorrect() { 
    var correct = document.querySelector('#correct')
    correct.classList.remove('hide-correct')
    setTimeout(hideCorrect, 1000)
}
function hideCorrect() {
    var correct = document.querySelector('#correct')
    correct.classList.add('hide-correct')
}

//decorative functions to handle all of the hover affects 
function hoverRed(elem) {
    if (elem.classList.value === 'main-button') {
        elem.classList.add('darker-red')
    } else {
        elem.classList.add('darker-gold')
    }
}
function mouseoutRed(elem) {
    if (elem.classList.value === 'main-button darker-red') {
        elem.classList.remove('darker-red')
    } else {
        elem.classList.remove('darker-gold')
    }
}
function hoverGray(elem) {
    elem.classList.add('bg-gray')
}
function mouseoutGray(elem) {
    elem.classList.remove('bg-gray')
}

function hoverSignIn(elem) {
        elem.classList.add('darker-red')
}
function mouseoutSignIn(elem) {
    elem.classList.remove('darker-red')
}