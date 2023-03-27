//1. Создайте функцию, которая будет принимать массив элементов и функцию обратного вызова (callback), и для каждого элемента массива
// будет применять функцию обратного вызова(функция вывода).
// const applyCallback = (array, callback) => {}
// const array = [1, 2, 3];
// applyCallback();
//Решение
// const array = [1, 2, 3];
// const applyCallback = (array, callback) => {
//     return callback(array)
// }
// applyCallback(array,console.log);

//2 Напишите функцию, которая принимает массив чисел и функцию обратного (которая умножает каждый элемент массива на 2) вызова и возвращает новый массив, содержащий результат применения функции
// обратного вызова к каждому элементу исходного массива.
//const applyCallback = (array, callback) => {}
//const array = [1, 2, 3];
//const callbackFunc = applyCallback(); // что-то нужно прописать
//console.log(callbackFunc);// [2, 4, 6]
//Решение
// const array = [1, 2, 3];
// const applyCallback = (array, callback) => {
//    return  callback(array)
// }
// const multiply = (array) => {
//     return array.map(el => el*2)
// }
// console.log(applyCallback(array, multiply));

//3 Создайте функцию, которая принимает два числа и функцию обратного вызова, которая выполняет арифметическую операцию  сложения между ними.
// const applyOperation = (x, y, operation) => {}
// const add = ;
// const result = applyOperation(2, 3, add);
// console.log(result);
//Решение
// const add = (x, y) => {
//     return x + y;
// }
// const applyOperation = (x, y, operation) => {
//     return operation(x, y)
// }
// const minusOperation = (x, y) => {
//     return x - y;
// }
// console.log(applyOperation(2, 3, add));
// console.log(applyOperation(10, 3, minusOperation));

// 4 Создайте функцию, которая принимает массив строк и функцию обратного вызова, которая фильтрует строки, если длинна строки меньше 7.
//const filterStrings = (array, callback) => {}
//const array = ['hello', 'world', 'javascript', 'callback'];
//const sortFunc = //написать функцию
//const filtered = filterStrings(array, sortFunc); // что- добавить
//console.log(filtered);
//Решение
// const array = ['hello', 'world', 'javascript', 'callback'];
// const sortFunc = (array) => {
//     return array.filter(el => el.length <7)
// }
// const filtered = (array, callBack) => {
//     return callBack(array);
// }
// console.log(filtered(array,sortFunc));

//5 Напишите функцию, которая принимает два массива и функцию обратного вызова, которая складывает элементы двух массивов.
//const zipArrays = (array1, array2, callback) => {}
//const array1 = [1, 2, 3];
//const array2 = [4, 5, 6];
//const zippedFunc = ;//написать функцию
//console.log(zipArrays(array1, array2, zippedFunc))
//Решение
// const zipArrays = (array1, array2, callback) => {
//     return callback(array1, array2)
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const zippedFunc = (array1,array2) => {
//     let newArr = []
//   for (let i = 0; i < array1.length; i++) {
//       newArr.push(array1[i] + array2[i])
//   }
//   return newArr
// }
// console.log(zipArrays(array1, array2, zippedFunc))

//6 Создайте функцию, которая принимает массив объектов и функцию обратного вызова, которая возвращает массив значений свойства age.
// const pluck = (array, property) => {}
// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 20 }
// ];
// console.log(pluck(people, 'age'));
//Решение
// const pluck = (array, property) => {
//    return  property(array)
// }
// const peopleAge = (p) => {
//     return p.map(el=>el.age)
// }
// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 20 }
// ];
// console.log(pluck(people, peopleAge));

// 7. Создать функцию которая будет проверять является ли строка полиндромом
//Палиндро́м — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
// const isPolindrom = (word) => {}
// console.log(isPolindrom("шабаш"))
//Решение
// const isPolindrom = (word) => {
//     return(word === word.split('').reverse().join(''));
// }
// console.log(isPolindrom("шабаш"))

// 8. Вывести самое короткое слово в консоль
// const findShort = (sentence) => {}
// console.log(findShort('The smallest word in sentence'))
//Решение


// 9. Вывести в консоль инициалы (Александр Петров - А.В.)
//const toInitials = (name) = {}
// console.log(toInitials("Bill gates"))
//Решение

// 10. Создание дубликатов символов строки ("abcd") => "A-Bb-Ccc-Dddd"
// const duplicate = (str) => {}
// console.log(duplicate('abcd'));
//Решение

// 11. Отформатировать цифры в телефонный номер (123456789) => (123) 456-789
// const phoneNumber = (number) => {}
// console.log(phoneNumber('123456789'))
//Решение
 