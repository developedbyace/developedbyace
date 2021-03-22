// Query Selectors
const startQuizBtn = document.querySelector(".start-quiz");
const headingDiv = document.querySelector(".heading");
const quizQuestionsDiv = document.querySelector(".quiz-questions");
const checkQuizBtn = document.querySelector(".check-quiz");
const bonusQuestion = document.querySelector(".bonusQuestion");
const timerDisplay = document.querySelector(".timerDiv");

const finalScore = document.querySelector("#score");
const finalTime = document.querySelector("#timeTaken");

const svgBackground = document.querySelector(".top-left-svg");

const quizArray = document.querySelectorAll(".question"); // Getting all the question in a node list


const answersArray = [1,3,4,1,3,4,3,3,4,2];
let sec = 60; //timer
let score = 0; //score
let executed = false;   //A flag to prevent multiple runs of a function

//Functions
function getRadioValue(radioArray){
    var i;
    for( i = 0; i < radioArray.length; i++){
        if (radioArray[i].checked){
            return radioArray[i].value;
        }
    }
    return"";
}

// Events
startQuizBtn.addEventListener("click", ()=>{
    headingDiv.style.display = "none";
    quizQuestionsDiv.style.display = "flex";

    //timer
    timer = setInterval(() => { 
        sec--;
        if (sec == 0){
            clearTimeout(timer);
            if(!executed){
                checkQuizBtn.click();
            };

        }
        timerDisplay.innerHTML = `Time: ${sec}s`;
        },1000);
});

checkQuizBtn.addEventListener("click", ()=>{
    if (!executed){
        //  Modifying the questions
        quizArray.forEach(
            (currentValue, currentIndex)=> {
                const currAnswer = answersArray[currentIndex];
                let userAnswer = null;
                const currentRadioBtns = currentValue.querySelectorAll("input");
                const currentLabels= currentValue.querySelectorAll("label");

                if (getRadioValue(currentRadioBtns) == currAnswer){
                    score = score + 2;
                }else{
                    score--;
                    currentLabels[currAnswer-1].classList.add("correct");
                }

                currentRadioBtns.forEach((currValue, currIndex)=>{
                    if(currValue.checked == true){
                        userAnswer = currValue.value;
                        if (userAnswer == currAnswer){
                            currentLabels[currIndex].classList.add("correct");
                        }else{
                            currentLabels[currIndex].classList.add("wrong");
                        }
                    }
                    currValue.disabled = true;
                    });
            },
        );
        timerDisplay.remove();

        finalScore.innerHTML = `Your Score: ${score}`;
        finalTime.innerHTML = `Time Allocated: ${60 - sec} seconds`;

        executed = !executed;
        document.querySelector("button.check-quiz > span.button-text").innerHTML = "Try Again!";

        if(score >= 10){
            svgBackground.style.fill = "#8cf17e";
        }else{
            svgBackground.style.fill = "#f17e7e";
        }
    }else{
        const allRadioBtns = document.querySelectorAll("input");
        allRadioBtns.forEach((currValue, currIndex)=>{
            if(currValue.checked == true){
                currValue.checked = false;
            }
        });
        location.reload();
    };
});