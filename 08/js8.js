// Flatten and sort an array
// Challenge:
//
//     Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
//     Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
"use strict";

function flattenAndSort(array) {
    let arr2 = []
    for(let i = 0; i < array.length; i++ ) {
        for (let k = 0; k < array[i].length ; k++) {
            arr2.push(array[i][k])
        }
    }
    return arr2.sort((a,b)=> a -b);
}

// console.log((flattenAndSort([[3,6], [4,1]])))

// Вы получаете массив чисел, возвращаете сумму всех положительных.
//
//     Пример [1,-4,7,12]=>1 + 7 + 12 = 20
//
// Примечание: если суммировать нечего, сумма по умолчанию равна 0.

function positiveSum(arr) {

    return arr.filter(el => el > 0).reduce((a,b) => a + b , 0)
}

// console.log(positiveSum([1,-4,7,12]) )

// Конец учебного года, судьбоносный момент твоего школьного отчета. Средние значения должны быть рассчитаны. Все ученики подходят к вам и умоляют вас подсчитать для них их средний балл. Легкий ! Вам просто нужно написать сценарий.
//
//     Возвращает среднее значение данного массива, округленное до ближайшего целого числа.
//
//     Массив никогда не будет пустым.
function getAverage(marks){
  let c = marks.reduce((a,b) => a + b, 0 )/marks.length
    return Math.floor(c)
}
// console.log(getAverage([2,2,3,2]))


// 6kyu Kebabize
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
//     the returned string should only contain lowercase letters

function kebabize(str) {
    return str.replace(/([A-Z])/g,'-$1').toLowerCase().replace(/[0-9]/g,'').replace(/^-/,'')
}
// console.log(kebabize('myCamelCasedString')) my-camel-cased-string