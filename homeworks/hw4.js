'use strict';

/**
 * Для вирішення цієї задачі вам буде потрібно згадати про перетворення у рядочкі та числа,
 * а також використати декілька методів масивів, які ми розбирали на вебінарі.
 */

// Task 1
const currentMaxValue = 4589;
let reverseMaxValue;

// Transforming to string to be able to use SPLIT
reverseMaxValue = currentMaxValue.toString().split('').reverse().join('');
// Without this line we will receive typeof = string instead of number
reverseMaxValue = Number(reverseMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


/**
 * Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності.
 * */

// Task 2
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = resultsArray.flat(Infinity).reduce((prev, current) => {
    return prev * current;
});

console.log(productOfArray); // 24