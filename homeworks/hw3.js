'use strict';

// Task 1
function iterativeOddSumTo(number) {
    let a = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            a += i;
        }
    }
    return a;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25

// Task 2
function recursiveOddSumTo(value) {
    if (value === 0) {
        return value;
    } else if (value % 2 === 0) {
        return recursiveOddSumTo(value - 1);
    } else {
        return value + recursiveOddSumTo(value - 1);
    }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(9)) // 25
console.log(recursiveOddSumTo(10)) // 25


// Task 3
// P.S. It looks like a very bad solution
const isXOEqual = (str) => {
    let oCounter = 0;
    let xCounter = 0;

    const lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === 'o') {
            oCounter += 1;
        } else if (lowerCaseStr[i] === 'x') {
            xCounter += 1;
        }
    }

    return oCounter === xCounter;
}

console.log(isXOEqual("ooxx")); // true
console.log(isXOEqual("xooxx")); // false
console.log(isXOEqual("ooxXm")); // true
console.log(isXOEqual("zpzpzpp")); // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")); // false