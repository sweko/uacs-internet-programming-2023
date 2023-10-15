const questions = [
    {
        question: "For how many years did the Hundred Years War last?",
        options: ["50 years", "100 years", "116 years", "124 years"],
        answer: "116 years"
    },
    {
        question: "Which country makes Panama Hats?",
        options: ["Panama", "Ecuador", "Colombia", "Mexico"],
        answer: "Ecuador"
    },
    {
        question: "From which animal do we get catgut?",
        options: ["Cats", "Dogs", "Sheep", "Cows"],
        answer: "Sheep"
    },
    {
        question: "In which month of the year is the Oktoberfest held?",
        options: ["October", "August", "September", "November"],
        answer: "September"
    },
    {
        question: "In which month of the year did the October Revolution happen?",
        options: ["October", "August", "September", "November"],
        answer: "November"
    },
    {
        question: "What is a camel's hair brush made of?",
        options: ["Camel hair", "Squirrel fur", "Horse hair", "Pig bristles"],
        answer: "Squirrel fur"
    },
    {
        question: "The Canary Islands in the Pacific are named after what animal?",
        options: ["Cat", "Bird", "Dog", "Horse"],
        answer: "Dog"
    },
    {
        question: "What was King George VI's first name?",
        options: ["George", "Albert", "Charles", "John"],
        answer: "Albert"
    },
    {
        question: "Where are Chinese gooseberries from?",
        options: ["China", "New Zealand", "Australia", "Japan"],
        answer: "New Zealand"
    },
    {
        question: "What is the color of the black box in a commercial airplane?",
        options: ["Black", "Orange", "Yellow", "Red"],
        answer: "Orange"
    },
    {
        question: "Who wrote Mozart's 3rd Symphony?",
        options: ["Mozart", "Salieri", "Bach", "Abel"],
        answer: "Abel"
    },
    {
        question: "How long did the Thirty Years War last?",
        options: ["28 years", "30 years", "33 years", "37 years"],
        answer: "30 years"
    }
];


let rightAnswers = 0;
let currentQuestion = -1;
let currentAnswer = "";

const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results");

// Function to display quiz questions and options
function displayQuizQuestions() {
    if (currentQuestion >= 0) {
        // Code to check if the answer is correct or not
        if (currentAnswer === questions[currentQuestion].answer) {
            rightAnswers++;
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        // Code to display quiz questions and options
        displayQuestion(questions[currentQuestion]);
    } else {
        // Code to display quiz results
        // calculateScore();
        showResults();
    }
}

// Function to display a quiz question and options
function displayQuestion(question) {
    // remove previous question
    quizContainer.innerHTML = "";

    // Code to display a quiz question and options
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = question.question;
    quizContainer.appendChild(questionElement);

    const optionsElement = document.createElement("div");
    optionsElement.classList.add("options");
    for (const option of question.options) {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionsElement.appendChild(optionElement);

        optionElement.addEventListener("click", function () {
            const children = optionsElement.querySelectorAll(".option");
            for (const child of children) {
                child.classList.remove("selected");
            }
            optionElement.classList.add("selected");
        });
    }
    quizContainer.appendChild(optionsElement);

    const buttonElement = document.createElement("button");
    buttonElement.innerText = "Next Question";

    buttonElement.addEventListener("click", function () {
        const children = optionsElement.querySelectorAll(".option");
        for (const child of children) {
            if (child.classList.contains("selected")) {
                currentAnswer = child.innerText;
                displayQuizQuestions();
                break;
            }
        }
    });

    quizContainer.appendChild(buttonElement);

}

// Function to calculate user's score
function calculateScore() {
    // Code to calculate user's score based on selected answers
}

// Function to show quiz results
function showResults() {
    // Code to display quiz results
    resultsContainer.innerHTML = "";
    quizContainer.innerHTML = "";
    const scoreElement = document.createElement("div");
    scoreElement.classList.add("score");
    scoreElement.innerText = `You scored ${rightAnswers} out of ${questions.length}`;

    // start over button
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "Start Over";
    buttonElement.addEventListener("click", function () {
        rightAnswers = 0;
        currentQuestion = -1;
        currentAnswer = "";
        displayQuizQuestions();
    });

    scoreElement.appendChild(buttonElement);

    resultsContainer.appendChild(scoreElement);
}

// Initial function call to display quiz questions when the page loads
displayQuizQuestions();