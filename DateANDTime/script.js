// //Number

// //Using Literal
// let num = 2345;
// let num1 = Number("2345");
// // console.log(num, num1, typeof num, typeof num1);

// //Using Constructor
// let num2 = new Number("3456.902");
// let num3 = new Number(8590);
// // console.log(num2.valueOf(), num3, typeof num2, typeof num3);

// num2.toString(); // original num2 will be still number type
// let newNum3 = num3.toString(); //. it is not converting in string why? ----> it is returing new element converted in string,

// num.toString();
// console.log(typeof newNum3, typeof num);

// // Math

// let num = 123.5;

// console.log(Math.round(num)); // 124

// Date

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.toUTCString());

// //Diff. b/w dates
// let date1 = new Date("2020-01-01T00:00:00.000Z");
// let date2 = new Date();
// console.log(Math.abs(date1.getFullYear() - date2.getFullYear()));

//Promise to resolve when button is clicked.

let btn = document.querySelector("button");
let btnReject = document.querySelector(".reject");

const promise = new Promise((resolve, reject) => {
  btn.addEventListener("click", () => {
    return resolve("Btn Cliked and Promise Resolved.");
  });
  btnReject.addEventListener("click", () => {
    return reject("Rejected");
  });
});

// promise
//   .then((res) => {
//     console.log(res);
//     console.log(promise);
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log(promise);

//   });

//Promise without new Promise()

async function myFunc() {
  return await promise;
}

const ans =  myFunc();

console.log(typeof ans, typeof myFunc)

ans.then(() =>{
    console.log("hi")
}).catch(()=>{
    console.log("rej")
});
