let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
     const options = ["Rock","Paper","Scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options [randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game draw!";
};
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       ;
        msg.innerText =`You win!  your ${userChoice} beats the ${compChoice}`;
        
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You lost! ${compChoice} beats your${userChoice}`;
    }
};


const playGame = (userChoice)  => {
    console.log ("user choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            //Scissors, paper
            userWin = compChoice === "Paper"? false : true;
        } else if (userChoice === "Paper") {
            //rock, scissors
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "Rock" ? false: true;
        }
    showWinner(userWin , userChoice , compChoice);
    }
};


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
playGame(userChoice);
    });
});