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

function containsDigit(str) {
  let str1 = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === '0' ||
      str[i] === '1' ||
      str[i] === '2' ||
      str[i] === '3' ||
      str[i] === '4' ||
      str[i] === '5' ||
      str[i] === '6' ||
      str[i] === '7' ||
      str[i] === '8' ||
      str[i] === '9'
    ) {
      str1 += 1;
    }
  }
  if (str1 < 1) {
    return false;
  } else {
    return true;
  }
}


function containsLowerCase(str) {
  let str1 = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'b' ||
      str[i] === 'c' ||
      str[i] === 'd' ||
      str[i] === 'e' ||
      str[i] === 'f' ||
      str[i] === 'g' ||
      str[i] === 'h' ||
      str[i] === 'i' ||
      str[i] === 'j' ||
      str[i] === 'l' ||
      str[i] === 'm' ||
      str[i] === 'n' ||
      str[i] === 'o' ||
      str[i] === 'p' ||
      str[i] === 'q' ||
      str[i] === 'r' ||
      str[i] === 's' ||
      str[i] === 't' ||
      str[i] === 'u' ||
      str[i] === 'v' ||
      str[i] === 'w' ||
      str[i] === 'x' ||
      str[i] === 'y' ||
      str[i] === 'z'
    ) {
      str1 += 1;
    }
  } if (str1 < 1) {
    return false;
  } else {
    return true
  }
}


function containsUpperCase(str) { 
  let str1 = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === 'A' ||
      str[i] === 'B' ||
      str[i] === 'C' ||
      str[i] === 'D' ||
      str[i] === 'E' ||
      str[i] === 'F' ||
      str[i] === 'G' ||
      str[i] === 'H' ||
      str[i] === 'I' ||
      str[i] === 'J' ||
      str[i] === 'K' ||
      str[i] === 'L' ||
      str[i] === 'M' ||
      str[i] === 'N' ||
      str[i] === 'O' ||
      str[i] === 'P' ||
      str[i] === 'Q' ||
      str[i] === 'R' ||
      str[i] === 'S' ||
      str[i] === 'T' ||
      str[i] === 'U' ||
      str[i] === 'V' ||
      str[i] === 'W' ||
      str[i] === 'X' ||
      str[i] === 'Y' ||
      str[i] === 'Z'
    ) {
      str1 += 1;
    }
  } if (str1 < 1) {
    return false;
  } else {
    return true
  }
}

function containsNonAlphanumeric() {
  let str1 = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === '!' ||
      str[i] === '@' ||
      str[i] === '#' ||
      str[i] === '$' ||
      str[i] === '%' ||
      str[i] === '^' ||
      str[i] === '&' ||
      str[i] === '*' ||
      str[i] === '(' ||
      str[i] === ')' ||
      str[i] === '_' ||
      str[i] === '+' ||
      str[i] === '=' ||
      str[i] === '-' 
    ) {
      str1 += 1;
    }
  } if (str1 < 1) {
    return false;
  } else {
    return true
  }
}

function containsSpace(str) {
  let count = 0;
  for (i = 0; i < str.length; i++){
    if (str[i] === " "){
      count += 1;
    }
  } if (count < 1){
    return false;
  } else {
    return true;
  }
}

function countWords(str) {
  // let count = 0;
  // for (i = 0; i < str.length; i++){
  //   if (str[i].split(" ") === " "){
  //     count += 1;
  //   }
  //   if (count < 1){
  //     return false;
  //   } else {
  //     return true
  //   }
  // } 
}

function digits() {
}

function truncate(str) {
  let str1 = "";
  if (str.length > 15) {
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