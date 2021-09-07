var readlineSync = require('readline-sync');
const chalk = require('chalk')

var userName = readlineSync.question("What's your name? ")
var score =0;
console.log(chalk.blue("welcome "+userName+ " to do you know Anurag?"));


var questionOne = {
  question: "What is my  pet name? tom/hari ",
  answer: "tom"
}
var questionTwo = {
  question: "What is my favourite sports? football/cricket ",
  answer: "football"
}
var questionThree = {
  question: "Where do I live? kolkata/delhi ",
  answer: "kolkata"
}
var questionFour = {
  question: "what is my Favourite show? GoT/mindhunter ",
  answer: "mindhunter"
}
var questionFive = {
  question: "which course am I pursuing? btech/Mca ",
  answer: "btech"
}
var questionSix = {
  question: "what is my favourite movie genre? action/comedy ",
  answer: "comedy"
}
var questionSeven = {
  question: "which is my favourite comedy movie? hera-pheri/hungama ",
  answer: "hera-pheri"
}
var questionEight = {
  question: "which is my favourite comedy show ? tmkoc/tkss ",
  answer: "tmkoc"
}
var questionNine = {
  question: "which is my favourite club? real madrid/ manchester united ",
  answer: "real madrid"
}
var questionTen = {
  question: "who is my favourite sportsperson? ronaldo/messi ",
  answer: "ronaldo"
}



// quiz function

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer  === answer){
    console.log(chalk.green(answer +" is Right Answer."));
    score+=1;
    console.log(chalk.green("your current score is "+ score));
    console.log(chalk.red("***************"));
  }
  else{
    console.log(chalk.red("THis is wrong answer."));
    console.log(chalk.red("your current score is " + score));
    console.log(chalk.green("***************"));
  }
}

//Array of objects
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen ];
for(var i=0;i<questions.length;i++){
  //call Quiz function
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.red("your Final score is "+score));