"use strict";

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operationSelect = document.querySelector('#operation');
const calculateBtn = document.querySelector('#start');
const resultP = document.querySelector('#result');

calculateBtn.addEventListener("click", function () {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    const op = operationSelect.value;
    let answer;

    if (op === "add") {
        answer = num1 + num2;
    } else if (op === "sub") {
        answer = num1 - num2;
    } else if (op === "multi") {
        answer = num1 * num2;
    } else if (op === "div") {
        answer = num1 / num2;
    }
  resultP.textContent = answer;
});