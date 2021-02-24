"use strict";
//1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
//Почему код даёт именно такие результаты?
/*
- Переменная c равна переменной a уже увеличенной на единицу (a = 2)
- Переменная d равна переменной b до увеличения на единицу (b = 1), но после увеличивает на 1 (b = 2)
- Переменная c равна сумме "2" и переменной a увеличенной на единицу (a = 3)
- Переменная d равна сумме "2" и переменной b до увеличения на единицу (b = 2)
- Выводит переменную a увеличенную ранее (a = 3)
- Выводит переменную b увеличенную ранее (b = 3)
*/

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
/*
x = 1 + (2*2)
x = 5
*/


/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

/*function getNumberResult(a, b) {
    if (a >= 0 && b >= 0) return a - b ;
    else if (a < 0 && b < 0) return a * b;
    else if (isNaN(a || b)) return "Введите второе число";
    return a + b;
}
var resultOne = getNumberResult(0,10);
var resultTwo = getNumberResult(-10,-10);
var resultThree = getNumberResult(10,-10);
console.log(resultOne)
console.log(resultTwo)
console.log(resultThree)*/


/*
4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/

/*function sayNumber(number) {
    switch(number<=15) {
        case true:
            return ("Вывод чисел от " + number + " до 15");
            break;
        default:
            return ("Число не попадает в диапазон от 0 до 15");
    }
}
let a = Math.floor(Math.random() * 16)
console.log(sayNumber(a))*/


/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

/*function sum (x,y) {
    x = Number(x)
    y = Number(y)
    return x + y;
}

function minus(x,y) {
    x = Number(x)
    y = Number(y)
    return x - y;
}

function multi(x,y) {
    x = Number(x)
    y = Number(y)
    return x * y;
}

function div(x,y) {
    x = Number(x)
    y = Number(y)
    return x / y;
}*/


/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 –
значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции
выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение
(использовать switch).
*/

/*function mathOperation(arg1, arg2, operation = '') {
    switch (operation.toLowerCase()){
        case 'сложить':
            return sum(arg1,arg2)
            break;

        case 'вычесть':
            return minus(arg1,arg2)
            break;

        case 'умножить':
            return multi(arg1,arg2)
            break;

        case 'разделить':
            return div(arg1,arg2)
            break;
    }
}
console.log(mathOperation(2,4,'сложить'))*/

/*
7. *Сравнить null и 0. Попробуйте объяснить результат.
*/
/*
null > 0 // false
null >= 0 // true - при сравнении null преобразуется в число и равен 0
null == 0 // false - при равенстве null ни к чему не приводится, и будет равно только самому себе
*/


/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
где val – заданное число, pow – степень.
*/

/*
function power(val, pow){
    return (pow != 1) ? val*power(val, pow-1) : val;
}
console.log(power(3,4))
*/
