'use strict';

//Task 1 (for loop)
/** Converting value to number because prompt is a string by default.
 * using isNaN, because if (typeof ... ) is not working for me :(
 */
let value = prompt("Введіть число:");
value = Number(value);

if (isNaN(value)) {
    console.log('Помилка: введіть число.');
} else {
    for (let i = 0; i <= value; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Task 1 (while loop)
if (isNaN(value)) {
    console.log('Помилка: введіть число.');
} else {
    let i = 0;
    while (i <= value) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}

// Task 2 (FuzzBuzz)
for (let i = 1; i <= 100; i++) {
    //Or if (i%15 === 0) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FuzzBuzz: ${i}`);
    } else if (i % 3 === 0) {
        console.log(`Fuzz: ${i}`);
    } else if (i % 5 === 0) {
        console.log(`Buzz: ${i}`);
    }
}

// Task 3 (Extra)
let string = '42559125';
let result = '';

for (let i = 0; i < string.length; i++) {
    if (string[i] <= 4) {
        result += 0;
    } else {
        result += 1;
    }
}

console.log(`End result: ${result}`); // Expected result '00111001'