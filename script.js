const calcDisplay = document.getElementById("calc-display");

const acButton = document.getElementById("AC");
const divideButton = document.getElementById("divide");
const multiplicationButton = document.getElementById("multiplication");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const dotButton = document.getElementById("dot");
const equalButton = document.getElementById("equal");

let calc = "";

function add(action) {
    calc += action;
    calcDisplay.innerText = `${calc.replaceAll("*", "x")}`;
}

function calculate() {
    let answer = eval(calc);

    calcDisplay.innerText = (answer !== undefined || !isNaN(answer)) ? `${answer}` : "Error";
    calc = `${answer}`;
}

function deleteCalc() {
    calc = "";
    calcDisplay.innerText = `${calc}`;
}

acButton.addEventListener("click", deleteCalc);
divideButton.addEventListener("click", () => add("/"));
multiplicationButton.addEventListener("click", () => add("*"));
plusButton.addEventListener("click", () => add("+"));
minusButton.addEventListener("click", () => add("-"));

oneButton.addEventListener("click", () => add("1"));
twoButton.addEventListener("click", () => add("2"));
threeButton.addEventListener("click", () => add("3"));
fourButton.addEventListener("click", () => add("4"));
fiveButton.addEventListener("click", () => add("5"));
sixButton.addEventListener("click", () => add("6"));
sevenButton.addEventListener("click", () => add("7"));
eightButton.addEventListener("click", () => add("8"));
nineButton.addEventListener("click", () => add("9"));
zeroButton.addEventListener("click", () => add("0"));

dotButton.addEventListener("click", () => add("."));

equalButton.addEventListener("click", calculate);