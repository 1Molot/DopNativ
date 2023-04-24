//1. Напишите функцию, которая находит сумму всех элементов массива.

//function sumArray(arr) {}
//const nums = [1, 2, 3, 4, 5];
//console.log(sumArray(nums)); // Выведет 15

//2. Напишите функцию, которая находит наименьшее число в массиве.
//function findMin(arr) {}
//const nums = [3, 6, 1, 8, 2];
//console.log(findMin(nums)); // Выведет 1

//3. Напишите функцию, которая находит все числа в диапазоне от start до end, которые делятся на заданное число divisor.
//function findDivisible(start, end, divisor) {}
//console.log(findDivisible(1, 10, 2)); // Выведет [2, 4, 6, 8, 10]

// 4. Напишите функцию, которая находит все перестановки заданной строки.
//function permutations(str) {}
//console.log(permutations('abc')); // Выведет ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

//5. Напишите функцию, которая находит самое часто встречающееся значение в массиве.
//function findMode(arr) {}
//const arr = [1, 2, 3, 4, 5, 2, 3, 2];
//console.log(findMode(arr)); // Выведет 2


// 6. Задача на цикл for: Напишите функцию, которая выводит на экран все элементы массива, кроме первого и последнего.
// function printArrayWithoutFirstAndLast(arr) {
//     // let arr2=
//     for (let i = 1; i < arr.length -1; i++) {
//         console.log(arr[i])
//     }
// }
//
// // console.log(arr[i])
// const arr = [1, 2, 3, 4, 5,6,7];
// printArrayWithoutFirstAndLast(arr); // Выведет 2, 3, 4

//7. Задача на цикл for in: Напишите функцию, которая принимает объект и выводит все его свойства и значения.
// function printObject(obj) {
//     for (const objKey in obj) {
//         console.log(`${objKey}: ${obj[objKey]}`)
//     }
// }
// const obj = { name: 'John', age: 30, city: 'New York' };
// printObject(obj); // Выведет, name: John, age: 30, city: New York

//8. Задача на цикл for of: Напишите функцию, которая находит сумму всех элементов массива.
// function sumArray(arr) {
//     let arr2 = 0
//     for (const arrElement of arr) {
//         arr2 = arr2+arrElement
//     }
//     console.log(arr2)
// }
// const arr = [1, 2, 3, 4, 5,6,10];
// sumArray(arr)
//  // Выведет 15

//9. Задача на цикл while: Напишите функцию, которая находит первый положительный элемент в массиве.
// function findFirstPositiveElement(arr) {
//     let arr2 = 0
//     while (arr2 < arr.length ){
//         if (arr[arr2] > 0){
//             return arr[arr2]
//         }
//         arr2++;
//     }
// return 'положительных значений нет'
// }
// const arr = [-2, -1, 0, -1, -2,3];
// console.log(findFirstPositiveElement(arr)); // Выведет 1

//10.Задача на цикл do while: Напишите функцию, которая запрашивает у пользователя числа с клавиатуры до тех пор,
//пока он не введет отрицательное число.
//function getNumbersFromUser() {}
//const numbers = getNumbersFromUser();
//console.log(numbers); // Выведет массив введенных пользователем чисел

// 11.Написать функцию, которая выводит все числа от 1 до n в консоль:
    function printNumbers(n) {
        for (let i = 1; i <= n; i++) {
            console.log(i)
        }

}

printNumbers(10); // выведет числа от 1 до 10















