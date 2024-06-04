'use strict';

/*
* Задача на селектори
 */

// для елементу з текстом 'Навігація по DOM дереву'
let headerSelectorExample1 = document.querySelector('#headerTwo');
let headerSelectorExample2 = document.getElementById('headerTwo');

// для першого елементу <section>
let sectionSelectorExample1 = document.querySelector('.firstSection');
let sectionSelectorExample2 = document.getElementsByClassName('firstSection');

// для елементу списку з текстом 'Пункт 5'
let selectorCustomListItemExample1 = document.querySelectorAll('li')[4];
let selectorCustomListItemExample2 = document.querySelector('li:nth-child(5)');

// для елементу з класом 'hatredLevelBlock'
let classSelectorExample1 = document.querySelector('.hatredLevelBlock');
let classSelectorExample2 = document.getElementsByClassName('hatredLevelBlock');