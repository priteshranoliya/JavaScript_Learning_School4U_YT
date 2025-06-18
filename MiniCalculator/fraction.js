let str = "40/50,20/100";

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

function addFractions(str) {
  let newArr = str.split(",");
  let fractionOne = newArr[0].split("/");
  let fractionTwo = newArr[1].split("/");

  let num1 = Number(fractionOne[0]);
  let den1 = Number(fractionOne[1]);
  let num2 = Number(fractionTwo[0]);
  let den2 = Number(fractionTwo[1]);

  let newNum = num1 * den2 + num2 * den1;
  let newDen = den1 * den2;

  if (den1 === den2) {
    newNum = num1 + num2;
    newDen = den1;
  } else {
    let fractionGCD = gcd(newNum,newDen);
    newNum /= fractionGCD;
    newDen /= fractionGCD;
    
  }

  let finalAns = `${newNum}/${newDen}`;

  return finalAns;
}

let ans = addFractions(str);
console.log(ans);
