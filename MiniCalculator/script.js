let inputTxt = document.querySelector("#inputTxt");
let clearBtn = document.querySelector(".clearBtn");
let plusBtn = document.querySelector(".plusBtn");
let minusBtn = document.querySelector(".minusBtn");
let mulBtn = document.querySelector(".mulBtn");
let divideBtn = document.querySelector(".divideBtn");
let dotBtn = document.querySelector(".dotBtn");
let equalBtn = document.querySelector(".equalBtn");


let oneBtn = document.querySelector(".oneBtn");
let twoBtn = document.querySelector(".twoBtn");
let threeBtn = document.querySelector(".threeBtn");
let fourBtn = document.querySelector(".fourBtn");
let fiveBtn = document.querySelector(".fiveBtn");
let sixBtn = document.querySelector(".sixBtn");
let sevenBtn = document.querySelector(".sevenBtn");
let eightBtn = document.querySelector(".eightBtn");
let nineBtn = document.querySelector(".nineBtn");
let zeroBtn = document.querySelector(".zeroBtn");



function calculate(str){
    let ans = eval(str);
    inputTxt.value = ans;
}



oneBtn.addEventListener("click", () => {
    inputTxt.value += 1;
})

twoBtn.addEventListener("click", () => {
    inputTxt.value += 2;
})

threeBtn.addEventListener("click", () => {
    inputTxt.value += 3;
})

fourBtn.addEventListener("click", () => {
    inputTxt.value += 4;
})

fiveBtn.addEventListener("click", () => {
    inputTxt.value += 5;
})

sixBtn.addEventListener("click", () => {
    inputTxt.value += 6;
})

sevenBtn.addEventListener("click", () => {
    inputTxt.value += 7;
})

eightBtn.addEventListener("click", () => {
    inputTxt.value += 8;
})

nineBtn.addEventListener("click", () => {
    inputTxt.value += 9;
})

zeroBtn.addEventListener("click", () => {
    inputTxt.value += 0;
})

plusBtn.addEventListener("click", () => {
    inputTxt.value += "+";
})

minusBtn.addEventListener("click", () => {
    inputTxt.value += "-";
})

mulBtn.addEventListener("click", () => {
    inputTxt.value += "*";
})

divideBtn.addEventListener("click", () => {
    inputTxt.value += "/";
})

equalBtn.addEventListener("click", () => {
    calculate(inputTxt.value);
})

dotBtn.addEventListener("click", ()=>{
    inputTxt.value += ".";
})

clearBtn.addEventListener("click", () =>{
    inputTxt.value = "";
})