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
  if (str.indexOf("!") === -1) {
    return (str += "!");
  }
  if (str.indexOf("!") === str.length - 1) {
    return str;
  }
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

function containsNonAlphanumeric(str) {
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
      str[i] === '-' ||
      str[i] === "." ||
      str[i] === " "
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
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count += 1;
    }
  } if (count < 1) {
    return false;
  } else {
    return true;
  }
}

function countWords(str) {
  let sum = 1;
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      sum += 1;
    }
  } return sum;
}


function digits(arr) {
  let arr1 = [];
  if (arr < 0) {
    arr *= -1;
  }
  str = arr.toString();
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ".") {
      arr1.push(str[i] * 1)
    }
  } return arr1;
}

function truncate(str) {
  let str1 = "";
  if (str.length >= 15) {
    for (i = 0; i <= 7; i++) {
      str1 += str[i];
    }
    str1 += "..."
    return str1;
  } else {
    return str
  }
}

function isValidPassword(str) {
  if (
    containsUpperCase(str) === true &&
    containsLowerCase(str) === true &&
    containsNonAlphanumeric(str) === true &&
    containsDigit(str) === true &&
    containsSpace(str) === false
  ) {
    return true;
  } else {
    return false;
  }
}

function onlyPunchy(arr) {
  let str1 = [];
  for (const value of arr) {
    if (exclaim(value).length < 15) {
      str1.push(exclaim(value));
    }
  } return str1
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