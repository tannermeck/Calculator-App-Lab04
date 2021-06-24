// import functions
// import add function
import { add } from "./calculations.js";
import { subtract } from "./calculations.js";
import { multiply } from "./calculations.js";
import { divide } from './calculations.js';
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

//subtract//
const subtractNum1 = document.getElementById("subtract-num1")
const subtractNum2 = document.getElementById("subtract-num2")
const subtractAnswer = document.getElementById("subtract-answer")
const subtractBtn = document.getElementById("subtract-btn")

subtractBtn.addEventListener('click', ()=> {
  const sub1 = Number(subtractNum1.value);
  const sub2 = Number(subtractNum2.value);
  const subAnswer = subtract(sub1, sub2);
  subtractAnswer.textContent = subAnswer;
  console.log(subAnswer);
})

//multiply//
const multiplyNum1 = document.getElementById("multiply-num1");
const multiplyNum2 = document.getElementById("multiply-num2");
const multiplyAnswer = document.getElementById("multiply-answer");
const multiplyBtn = document.getElementById("multiply-btn");

multiplyBtn.addEventListener('click', () => {
  const mNum1 = Number(multiplyNum1.value);
  const mNum2 = Number(multiplyNum2.value);
  const mAnswer = multiply(mNum1, mNum2)
  console.log(mAnswer)
  multiplyAnswer.textContent = mAnswer
})
//division//
const divideNum1 = document.getElementById("divide-num1");
const divideNum2 = document.getElementById("divide-num2");
const divideAnswer = document.getElementById("divide-answer");
const divideBtn = document.getElementById("divide-btn");

divideBtn.addEventListener('click', () => {
  const div1 = Number(divideNum1.value);
  const div2 = Number(divideNum2.value);
  const divAns = divide(div1, div2);
  console.log(divAns);
  divideAnswer.textContent = Math.round(divAns * 100) / 100
})