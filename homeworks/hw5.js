'use strict';

/**
 * Задача про перетворення об'єкту
 * Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.
 * Напишіть код який буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми. У результаті ви повинні отримати новий об’єкт.
 */

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

let updatedPriceData;

updatedPriceData = Object.assign(priceData);
updatedPriceData = Object.fromEntries(
    Object.entries(updatedPriceData).map(([key, value]) => [key.toLowerCase(), Number(value).toFixed(2)])
);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}