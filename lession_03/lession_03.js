"use strict";
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
/*
var count = 100;
var startNumber = 2;

function naturalNumber(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

while(startNumber <= count) {
    if(naturalNumber(startNumber)) {
        console.log(startNumber);
    }
    startNumber++;
}
*/


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве.
// Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

/*
const cart = [
    ["Nike Air Force 1","Обувь", 9999, 1],
    ["Nike Air Max Plus","Обувь", 16499, 1],
    ["Jordan Flight","Брюки", 7199, 1],
    ["Nike Everyday","Носки", 999, 4]
    ];

function countBasketPrice(arr) {
    let cost = 0;
    for (let key of arr){
        cost += key[2] * key[3];
    }
    return cost
}
console.log("Сумма товаров в корзине "+ countBasketPrice(cart) + " рублей")
*/


// 3.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}

/*
for (let i=0;i<=9;)
    console.log(i++);
*/


// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

/*
let pyramid = []
for(let i = 1; i <= 20; i++) {
    pyramid.push('x');
    console.log(pyramid.join(' '));
}
*/
