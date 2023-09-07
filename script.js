divRef = document.getElementById("quiz-div")
divTwoRef = document.getElementById("totalScore")

let correctQuestions = 0
let count = 0
const questionsArray = [
    {
        questionNumber : "1",
        question : "What is 2+2 ?",
        options : ["1", "3", "4", "6"],
        correctAnswer : "4"
    },
    {
        questionNumber : "2",
        question : "What is 5! ?",
        options : ["120", "130", "60", "115"],
        correctAnswer : "120"
    },
    {
        questionNumber : "3",
        question : "Who is main character of one piece ?",
        options : ["Roronoa Zoro", "Monkey D Luffy", "Vinsmoke Sanji", "Katakuri"],
        correctAnswer : "Monkey D Luffy"
    },
    {
        questionNumber : "4",
        question : "What is captial of India ?",
        options : ["Mumbai", "New Delhi", "Nagpur", "Uttar Pradesh"],
        correctAnswer : "New Delhi"
    },
    {
        questionNumber : "5",
        question : "Which of these is not a prime number ?",
        options : ["2", "911", "967", "993"],
        correctAnswer : "993"
    },
    {
        questionNumber : "6",
        question : "Which planet has most number of moon ?",
        options : ["Saturn", "Jupiter", "Uranus", "Earth"],
        correctAnswer : "Saturn"
    },
    {
        questionNumber : "7",
        question : "What country has won the most World Cups ?",
        options : ["France", "Argentina", "Brazil", "Portugal"],
        correctAnswer : "Brazil"
    },
    {
        questionNumber : "8",
        question : "How many bones do we have in an ear ?",
        options : ["3", "2", "4", "8"],
        correctAnswer : "3"
    },
    {
        questionNumber : "9",
        question : "In what country is the Chernobyl nuclear plant located ?",
        options : ["Russia", "Ukraine", "Poland", "India"],
        correctAnswer : "Ukraine"
    },
    {
        questionNumber : "10",
        question : "What planet is closest to the sun ?",
        options : ["Mercury", "Mars", "Venus", "Earth"],
        correctAnswer : "Mercury"
    }
]

divRef.innerHTML = ""
questionsArray.forEach(questionObj => {
    const hrRef = document.createElement("hr")
    hrRef.textContent = `${questionObj.questionNumber}) ${questionObj.question}`
    divRef.appendChild(hrRef)
    for (let i = 0; i < questionObj.options.length; i++) {
        const liRef = document.createElement("li")
        const chosenOption = questionObj.options[i]
        liRef.textContent = `${questionObj.options[i]} `
        const selection = document.createElement("button")
        selection.innerText = "select"
        liRef.appendChild(selection)
        hrRef.appendChild(liRef)
        selection.addEventListener('click', ()=>{
            count++
            if(chosenOption === questionObj.correctAnswer){
                textBox.value = `Correct Answer`
                correctQuestions++
            }
            else{
                textBox.value = `WRONG ANSWER!!!! correct answer is "${questionObj.correctAnswer }"`
            }
        })      
    }
    const textBox = document.createElement("textarea")
    textBox.readOnly = true 
    textBox.rows = 3
    textBox.cols = 20
    hrRef.appendChild(textBox)
});

if(correctQuestions == 0){
    correctQuestions = 0
}
else{
    correctQuestions = correctQuestions+1
}
const totalScoreBox = document.createElement("textarea")
totalScoreBox.readOnly = true
totalScoreBox.rows = 3
totalScoreBox.cols = 20
totalScoreBox.addEventListener('click', ()=>{
    if(count == questionsArray.length){
        totalScoreBox.textContent = `you got ${(correctQuestions)} correct out of ${questionsArray.length} questions`
    }
    else{
        totalScoreBox.textContent = `Sorry!! you have not answer all the questions`
    }
})
divTwoRef.appendChild(totalScoreBox)
