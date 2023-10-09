# Make the World's Easiest (or hardest) Quiz

## Objective
Create a simple quiz application where users can answer multiple-choice questions and receive feedback on their answers.

## Features
1. Questions: Display a series of multiple-choice questions with options.
2. Answers: Allow users to select one answer for each question.
3. Feedback: Provide immediate feedback to users after answering each question.
4. Score Calculation: Calculate and display the user's total score at the end of the quiz.
5. Restart: Allow users to restart the quiz after completing it.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Quiz</title>
</head>
<body>
    <div id="quiz-container">
        <!-- Questions and options will be dynamically generated here -->
    </div>
    <div id="results"></div>

    <script src="script.js"></script>
</body>
</html>
```

### CSS structure
```css
/* Add this CSS to a separate style.css file or within a <style> tag in your HTML document */

body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
}

#quiz-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

/* Style quiz questions and options */
.question {
    margin-bottom: 20px;
}

.options {
    list-style-type: none;
    padding: 0;
}

.option {
    margin-bottom: 10px;
}

/* Style quiz results */
#results {
    margin-top: 20px;
    font-weight: bold;
}

/* Additional styles can be added as needed */
```

## JavaScript Structure

```js
// Quiz questions and correct answers (can be replaced with your own questions)
const questions = [
    {
        question: "For how many years did the Hundred Years War last?",
        options: ["50 years", "100 years", "116 years", "124 years"],
        answer: "116 years"
    },
    {
        question: "Which country makes Panama Hats?"
        options: ["Panama", "Ecuador", "Colombia", "Mexico"],
        answer: "Ecuador"
    },
    {
        question: "From which animal do we get catgut?"
        options: ["Cats", "Dogs", "Sheep", "Cows"],
        answer: "Sheep"
    },
    {
        question: "In which month of the year is the Oktoberfest held?"
        options: ["October", "August", "September", "November"],
        answer: "September"
    },
    {
        question: "In which month of the year did the October Revolution happen?"
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

const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results");

// Function to display quiz questions and options
function displayQuizQuestions() {
    // Code to dynamically generate quiz questions and options here
}

// Function to calculate user's score
function calculateScore() {
    // Code to calculate user's score based on selected answers
}

// Function to show quiz results
function showResults() {
    // Code to display user's score and feedback after submitting the quiz
}

// Initial function call to display quiz questions when the page loads
displayQuizQuestions();
```

## Implementation Notes
The questions array in JavaScript holds the quiz questions, options, and correct answers.  
Use JavaScript to dynamically generate the quiz questions and options within the quiz-container div.  
When the user submits the quiz (by clicking the "Submit Answers" button), calculate the score and display the results in the results div.  
You can customize the questions, options, and logic further based on your specific requirements.