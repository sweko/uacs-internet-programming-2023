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

const responses = [];

const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit-button");

let currentQuestion = 0;

// Function to display quiz questions and options
function displayQuizQuestions() {
    // Code to display quiz questions and options from the array
    const question = questions[currentQuestion];
    const questionText = document.createElement("h2");
    questionText.textContent = question.question;
    quizContainer.appendChild(questionText);

    const options = question.options;

    for (const option of options) {
        const optionElement = document.createElement("input");
        optionElement.setAttribute("type", "radio");
        optionElement.setAttribute("name", "option");
        optionElement.setAttribute("value", option);
        quizContainer.appendChild(optionElement);

        const optionText = document.createElement("span");
        optionText.textContent = option;
        quizContainer.appendChild(optionText);

        const br = document.createElement("br");
        quizContainer.appendChild(br);
    }
    const button = document.createElement("button");
    button.textContent = "Next";
    quizContainer.appendChild(button);

    button.addEventListener("click", function () {
        const selectedOption = document.querySelector("input[name='option']:checked");
        if (selectedOption === null) {
            //  Code to display error message if no option is selected
            return;
        }

        const playerAnswer = selectedOption.value;
        responses.push(playerAnswer);

        quizContainer.innerHTML = "";
        currentQuestion += 1;

        if (currentQuestion === questions.length) {
            // Code to display results page when all questions have been answered
            showResults();
            return;
        }

        displayQuizQuestions();
    });
}

// Function to calculate user's score
function calculateScore() {
    let score = 0;
    for (let index = 0; index < questions.length; index++) {
        const question = questions[index];
        const playerAnswer = responses[index];
        const correctAnswer = question.answer;

        if (playerAnswer === correctAnswer) {
            score += 1;
        }
    }
    return score;
}

// Function to show quiz results
function showResults() {
    const score = calculateScore();
    resultsContainer.textContent = `Your score is ${score}`;
}


// Initial function call to display quiz questions when the page loads
displayQuizQuestions();