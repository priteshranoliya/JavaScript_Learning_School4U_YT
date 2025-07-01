// let arr = [1, 3, 5, 10, "agb", "ght", "ewf", "weg"];

// let newArr = arr.filter((item) => typeof item === string);

// console.log(newArr);

// let arr = ["klrahul", "virat", "gill"];

// let resultArr = arr.map((_,idx) => {
//     return _.toUpperCase();
// })

// console.log(resultArr);

// let obj = {}
// console.log(Object.keys(obj).length === 0)

// let arr = ["klrahul", "virat", "gill"];
// console.log(arr.join());

// let arr = ["klrahul", "virat", "gill", [1, 2, 3, 4], 10, 11];

// let finalArr = arr.flat(1);
// console.log(arr.splice(3, 1, ...arr[3]));
// console.log(arr)

//Is all elements in arr are numbers?

// let arr = [1, 2, 3, 4, "gill"];
// console.log(
//   arr.every((_) => {
//     return typeof _ === "number";
//   })
// );

//Q. Is Prime?

// let number = 1;

// prime ---> 1 and 23 (itself) division only

// let flag = true;
// if (number === 1 || number === 0) {
//   flag = false;
// }

// for (let i = 2; i < number; ++i) {
//   if (number % i === 0) {
//     flag = false;
//   }
// }

// console.log(`${number} is Prime? `, flag);

//Remove Duplicates
// let arr = [1, 2, 2, 3, 4, 5, 22, 3, 4];

// function removeDuplicates(arr) {
//   let resultArr = [];
//   arr.forEach((element) => {
//     if (!resultArr.includes(element)) {
//       resultArr.push(element);
//     }
//   });
//   return resultArr;
// }
// console.log(removeDuplicates(arr));
// console.log(arr);

// let arr = [1, 2, 2, 3, 4, 5, 22, 3, 4];

// let set = new Set(arr);

// let newSetArr = Array.from(set);

// console.log(newSetArr, Array.isArray(newSetArr));

//Spread Operator in JS Objects
// let obj = {
//     name: "pritesh",
//     age: 22,
//     color: "white",
// }

// console.log({...obj, newProp: "Kl"});

// console.log(obj)

// const arr = [1, 2, [3, 4]];
// const shallow = [...arr];

// console.log(shallow);

// shallow[2][1] = 99;
// console.log(shallow);
// console.log(arr);

// const arr = [1, 2, [3, 4]];

// const deep = structuredClone(arr);
// deep[2][2] = 99;

// console.log(arr)

// //Removed Punctation marks etc....
// let str = "A man, are wonder!";
// let modifyStr = "";
// for(let i=0; i<str.length; ++i){
//     let ascii = str[i].charCodeAt(0);
//     if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)){
//         modifyStr += str[i];
//     }
// }
// console.log(modifyStr.toLowerCase());

// //New Question
// function strWithAlphabeticalOrders(str) {
//   //   return str.split("").sort().join("");
//   let words = str.split(" ").sort();
//   let res = words.map((element) => {
//     return element.split("").sort().join("");
//   });

//   return (res.join(" "));
// }
// let finalStr = strWithAlphabeticalOrders("Pritesh Ranoliya Abcd");
// console.log(finalStr);

// //Q.26
// function firstLetterCapitalize(str){
//     let res = str.split(" ").map((item,idx,str) => {
//         str[idx] = str[idx][0].toUpperCase() + str[idx].slice(1);
//         return str[idx];
//     })
//     return res;
// }
// console.log(firstLetterCapitalize("pritesh ranoliya Abcd zyx"));

// //Q.27
// function firstNElementsOfArray(arr, n) {
//   return arr.splice(0, n);
// }
// console.log(firstNElementsOfArray([2, 3, 5, 1, 102, 192, 23], 10));

// //Q. 28
// function freqOfLetter(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; ++i) {
//     obj[str[i]] =
//       obj[str[i]] === undefined ? 1 : obj[str[i]] + 1;
//   }
//   return obj;
// }
// console.log(freqOfLetter("ghghjkddddkjk"));

// //Q.29 - Shuffle The Array

// let arr = [2, 4, 3, 5, 7, 8];
// const shuffle = (arr) => {
//   let randomIdx = Math.floor(Math.random() * arr.length);
//   for (let i = 0; i < arr.length; ++i) {
//     let temp = arr[i];
//     arr[i] = arr[randomIdx];
//     arr[randomIdx] = temp;
//   }
//   return arr;
// };

// console.log(shuffle(arr));

//Date Diff

let date1 = new Date("2025-08-31T19:31:02.000Z");
let date2 = new Date("2024-01-22T14:22:06.000Z");

let diff = date1 - date2;

let totalSeconds = diff / 1000;

let year = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
console.log(year);

let month = Math.floor((diff / 1000 / 60 / 60 / 24 ) * 12 / 365);
console.log(month);





// console.log(totalSeconds); // 5 crore seconds diff between two dates
// console.log(totalSeconds / 60); // Minutes

// console.log(0.9333333333*60);






