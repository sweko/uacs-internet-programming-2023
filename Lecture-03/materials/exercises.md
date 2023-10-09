# Class 5: Functions and Control Structures

## Exercise 1: Calculate Factorial
Write a JavaScript function that calculates the factorial of a given positive integer. Implement it using a for loop. Use recursion to implement it again.

## Exercise 2: FizzBuzz
Create a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For numbers that are multiples of both 3 and 5, print "FizzBuzz."

## Exercise 3: Check Prime Number
Write a function that checks if a given number is a prime number. A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself.

# Class 6: JavaScript Data Structures

## Exercise 1: Sum of Array Elements
Write a function that calculates the sum of all elements in an array of numbers.

## Exercise 2: Object Manipulation
Create an object representing a person with properties like name, age, and city. Write functions to update and display these properties.

## Exercise 3: Map Transformation
Given an array of numbers, use the map method to create a new array where each element is doubled.

## Exercise 4: Filter and Reduce
Given an array of integers, use the filter method to create a new array containing only even numbers. Then, use the reduce method to calculate the sum of these even numbers.

## Exercise 5: Map of Names
Create a map where the keys are names, and the values are corresponding ages. Write a function that finds the oldest person in the map.


# Homework

## Numbers to words (scary)
Write a function that takes a number as an argument and returns a string representing the number in words. For example, given the number 1234, the function should return "one thousand two hundred thirty four." The function should support numbers up to 999_999_999.  
**Bonus:** Implement it for the Macedonian language (take not that the thousands and millions are gendered in Macedonian).  
**Super Extra Bonus**: Implement a second parameter to the function that takes a list of language codes (maybe as a rest parameter) and returns the number in those languages. For example, given the number 1234 and the language code "mk", the function should return "една илјада двеста триесет и четири.", and given the number 1234 and the language code "en", the function should return "one thousand two hundred thirty four." The return value should be an object that has the language code as the object key, and the values as the key's values. I.e

```js
const number = 1234;
const languages = ["mk", "en"];
const result = numberToWords(number, languages);
console.log(result);
// {
//     mk: "една илјада двеста триесет и четири.",
//     en: "one thousand two hundred thirty four."
// }
```

## Pig Latin
Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin." Move the first letter of each word to the end of the word. Add "ay" to the end of the word. Words starting with a vowel (A, E, I, O, U) append "way" to the end instead. Extra Practice: Preserve proper capitalization as in the examples below. Examples:

- pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."

- pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."

- pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."

