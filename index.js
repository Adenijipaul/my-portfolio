//console.log('Hello');
//console.log(`I like pizza`);

//window.alert(`This is an alert`);
//window.alert(`I like pizza!`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza!`;

// variable = A container that stores a value.
//            Behaves as if it were the value it contains

// let fullName = "Paul Adeniji";
// let age = 23;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;


// 1. declaration    let x;
// 2. assignment     x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Paul";
// let favoriteFood = "Beans";
// let email = "Adenijipaul76@gmail.com";

// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Paul is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);


// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favoriteFood}`);
// console.log(`Your email is ${email}`);

// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is ${gpa}`);


// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 2;
// students = students ** 2;
// let extrastudents = students % 3;

// augmented assigned operators
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & module
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;

// console.log(result);

// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username;

// username = window.prompt("What is your username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

// type conversion = change the datatype of a value to another
//                    (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

//  let x = "pizza";
//  let y = "pizza";
//  let z = "pizza";

//COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }


// DIGITAL CLOCK PROGRAM

// function updateClock(){

//     const now  = new Date();
//     let hours = now.getHours().toString().padStart(2,0);
//     const meridian = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById("clock").textContent = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop(){
//     if(isRunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }

// function reset(){
//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;
//     display.textContent = "00:00:00:00";
// }

// function update(){

//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");
//     milliseconds = String(milliseconds).padStart(2, "0");



//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

// }


// CALCULATOR PROGRAM

// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }

// ROCK PAPER SCISSORS

// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice){

//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     let result = "";

//     if(playerChoice === computerChoice){
//         result = "IT'S A TIE!";
//     }
//     else{
//         switch(playerChoice){
//             case "rock":
//                 result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "paper":
//                 result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "scissors":
//                 result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//         }
//     }

//     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//     resultDisplay.textContent = result;

//     resultDisplay.classList.remove("greenText", "redText");

//     switch(result){
//         case "YOU WIN!":
//             resultDisplay.classList.add("greenText");
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore
//             break;
//         case "YOU LOSE!":
//             resultDisplay.classList.add("redText");
//             computerScore++;
//             computerScoreDisplay.textContent = computerScore;
//             break;
//     }
// }

// IMAGE SLIDER

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// // initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
// }
// function showSlide(index){

//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }



//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }
// function prevSlide(){
//     slideIndex--;
//     showSlide(slideIndex);
// }
// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }