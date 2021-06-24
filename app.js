// import functions
// import add function
import { add } from "./calculations.js";
// reference needed DOM elements
// add-num1, add-num2, add-answer, add-btn
const addNum1 = document.getElementById("add-num1")
const addNum2 = document.getElementById("add-num2")
const addAnswer = document.getElementById("add-answer")
const addBtn = document.getElementById("add-btn")

addBtn.addEventListener('click', ()=> {
  const add1 = Number(addNum1.value);
  const add2 = Number(addNum2.value);
  const answer = add(add1, add2);
  console.log(answer);
  addAnswer.textContent = answer;
});



// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

  // add event listener to button click
  // get the value in add-num1 -- convert to number
  // get the value add-num2 -- convert to number
  // call add function with add-num1