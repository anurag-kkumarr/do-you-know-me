var readlineSync = require('readline-sync');
const chalk = require('chalk')

var userName = readlineSync.question("What's your name? ")
var score =0;
console.log(chalk.redBright("welcome "+userName+ " to do you know Anurag?"))


var questionOne = {
  question: "What is my  pet name?",
  answer: "anu"
}
var questionTwo = {
  question: "What is my favourite sports?",
  answer: "football"
}
var questionThree = {
  question: "Where do I live? ",
  answer: "kolkata"
}
var questionFour = {
  question: "what is my Favourite show?",
  answer: "mindhunter"
}
var questionFive = {
  question: "which course am I pursuing?",
  answer: "btech"
}


// quiz function

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer  === answer){
    console.log(chalk.blue(answer +" is Right Answer."));
    score+=1;
    console.log("your current score is "+ score)
  }
  else{
    console.log(chalk.redBright("THis is wrong answer."));
    console.log(chalk.blue("your current score is " + score))
  }
}

//Array of objects
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for(var i=0;i<questions.length;i++){
  //call Quiz function
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.green("your Final score is "+score))