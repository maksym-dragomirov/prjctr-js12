'use strict';

/*
* 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval
* Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
 */

function detonatorTimer(delay) {
    let timer = setInterval(() => {
        if (delay !== 0) {
            console.log(delay);
            delay -= 1;
        } else if (delay === 0) {
            console.log('BOOM!');
            return clearInterval(timer);
        }
    }, 1000);
}

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

/*
* 2. Напишіть функцію detonatorTimer(delay) використовуючи setTimeout
* Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
 */

function detonatorTimer2(delay) {
    let timer = setTimeout(() => {
        detonatorTimer2(delay - 1);
    }, 1000);

    if (delay !== 0) {
        console.log(delay);
    } else if (delay === 0) {
        console.log('BOOM!');
        clearTimeout(timer);
    }
}

detonatorTimer2(3);
// 3
// 2
// 1
// BOOM!

/*
* 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.
 */

let me = {
    name: 'Maksym',
    residency: 'Lviv',
    gender: 'male',
    age: 27,
    hobby: 'sleep',
    anotherHobby: 'read books',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    hobbyInformation() {
        console.log(`Usually I'd like to go ${this.hobby}, but sometimes I would like rather to ${this.anotherHobby}`);
    },
    describeMyMood() {
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

me.introduce();
me.hobbyInformation();
me.describeMyMood();


/*
* 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
* Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
 */

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfInformation = me.hobbyInformation.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfInformation, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат