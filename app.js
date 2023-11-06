// alert("hemloo");
const computerChoiceDisplay = document.getElementById("computerchoice");
const userChoiceDisplay=document.getElementById("userchoice");
const resultDisplay=document.getElementById("result");
const possibleChoices=document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener("click",(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML= userChoice;
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomNum=Math.floor(Math.random()*3)+1
    if(randomNum===1){
        computerChoice="Rock"
    }
    if(randomNum===2){
        computerChoice="Paper"
    }
    if(randomNum===3){
        computerChoice="Scissor"
    }
    computerChoiceDisplay.innerHTML = computerChoice
     
}
function getResult(){
    if (computerChoice===userChoice){
        result="draw"
    }

    if(computerChoice==="Rock"&&userChoice==="Scissor"){
        result="You lost"
    }
    if(computerChoice==="Rock"&& userChoice==="Paper"){
        result="you won"
    }
    if(computerChoice==="Paper"&& userChoice==="Rock"){
        result="you lost"
    }
    if(computerChoice==="Scissor"&& userChoice==="Paper"){
        result="you lost"
    }
    if(computerChoice==="Paper"&& userChoice==="Scissor"){
        result="you won"
    }
    if(computerChoice==="Scissor"&& userChoice==="Rock"){
        result="you won"
    }
    resultDisplay.innerHTML=result
}


  