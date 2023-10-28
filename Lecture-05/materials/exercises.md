## Lecture 5 Exercises Setup

You are provided with a function `doStuffLater` that accepts a callback function as an argument. It simulates an asynchronous operation by waiting 2 seconds and then invoking the callback function.

## Exercise 1: Simple Callback Example
- Write a function `doTwoStuffs` that accepts two callback functions as an argument(`first` and `second`). It should use the `doStuffLater` function to invoke the `first` callback function after 2 seconds, and then invoke the `second` callback function after another 2 seconds.
- Test your function by passing it two functions that log different messages to the console.

## Exercise 2: Promise Practice
- Write a function `doStuffPromise` that returns a promise. It should use the `doStuffLater` function to invoke the `resolve` function after 2 seconds.
- Test your function by calling it and chaining a `.then` method that logs a message to the console.
- Write a function `maybeDoStuff` that accepts a boolean argument `shouldDoStuff`. It should return a promise that invokes the `resolve` function after 2 seconds if `shouldDoStuff` is `true`, and invokes the `reject` function otherwise.
- Test your function by calling it and chaining a `.then` method that logs a message to the console, and a `.catch` method that logs an error message to the console.

## Exercise 3: Async/Await Practice
Repeat exercises 1 and 2 using the async/await syntax.

## Exercise 4: Display Random Jokes

Fetch Chuck Norris jokes from the Chuck Norris Joke API or a similar source.
Create a web page where users can trigger the retrieval of a random joke by clicking a button.

## Exercise 5: Currency Exchange Rate Calculator

Develop a currency exchange rate calculator that uses a currency exchange rate API (e.g., Open Exchange Rates).
Enable users to choose a source currency, a target currency, and an amount to convert. Display the converted amount based on the retrieved exchange rates.

## Exercise 6: Weather Information

Create a web application that fetches and displays current weather information for a city using a weather API. Allow users to input a city name and retrieve details like temperature, weather conditions, and an icon representing the weather.

We will use the [OpenMeteo API](https://open-meteo.com/) for this exercise. However, since it does not allow search by city, but only by latitude and longitude, we will use the [OpenCage Geocoder API](https://opencagedata.com/api) to convert a city name to latitude and longitude coordinates.

