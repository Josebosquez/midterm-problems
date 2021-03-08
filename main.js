function isEvenlyDivisible(num, num1) {
  if (num % num1 === 0) {
    return true;
  } else return false;
}

function halfSquare(num) {
  let str = 0;
  str = (num ** 2) / 1 / 2;
  return str;
}

function isLong(str) {
  if (str.length > 15) {
    return true;
  }
  if (str.length < 15) {
    return false;
  } if (str.length = 15) {
    return true;
  }
}

function exclaim(str) {
//   let count = 0;
//   if (str[str.length - 1] !== "!") {
//     return str + "!"
//   }  
//   if (str[str.length-1] === "!"){
//     return str;
//   } (str[str.length-1] === "!"){
// // if there are multiple "!", i want to capture the amount.
// while 
// // remove all ! and return +1.
// //indexOf
//     }
  }

function containsDigit(str){

  
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function countWords() {
}

function digits() {
}

function truncate(str) {
  let str1 = "";
  if (str.length > 15){
    for (i = 0; i < 8; i++)
    return str1 + "..."
  }
    else {
    return str;
  }
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}