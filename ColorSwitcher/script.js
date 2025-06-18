let body = document.querySelector("body");
let applyBtn = document.querySelector(".applyBtn");
let randomBtn = document.querySelector(".randomBtn");
let inputTxt = document.querySelector("#inputTxt");
let para = document.querySelector(".para");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.ceil(Math.random() * 10)];
    }
    return color;
  }

applyBtn.addEventListener("click", () => {
  body.style.backgroundColor = `${inputTxt.value}`;
  para.innerHTML = `Current Color: <span>${inputTxt.value}</span>`;
});

randomBtn.addEventListener("click", () => {
  let color = getRandomColor();
  body.style.backgroundColor = `${color}`;
  para.innerHTML = `Current Color: <span>${color}</span>`;
});
