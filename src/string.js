let nameInput = document.querySelector(".nameInput");
let emailInput = document.querySelector(".emailInput");
let btn = document.querySelector("button");
let form = document.querySelector("form");



nameInput.addEventListener("change", (e) =>{
    nameInput.innerText = e.target.value;
    nameInput.value = e.target.value;
})

emailInput.addEventListener("change", (e) =>{
    emailInput.innerText = e.target.value;
    emailInput.value = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if((nameInput.value === "") || (emailInput.value === "")){
        console.warn("enter all fields plz!");
    }
    else{
        console.log("form submitted!");
    }
})


