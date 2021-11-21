// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for
var lastIndexOf = function(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

var shift = function(array) {
    var newArr = [];
    for (var i = 1; i < array.length; i++) {
        newArr[newArr.length] = array[i];
    }
    return newArr;
};

var getMatrixSum = function(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
};

// Перепиши вызовы функций ниже используя call или apply:
// [1,3,5,7].includes(3);
// [1,3,5,7].indexOf(5);
// [1,3,5,7].join('/');
Array.prototype.includes.apply([1,3,5,7], [3])
Array.prototype.indexOf.call([1,3,5,7], 5)
Array.prototype.join.apply([1,3,5,7], ['/'])

// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20
var sumOfAllArguments = function() {
    var sum = 0;
    var args = [].slice.call(arguments);
    args.forEach(function(el) {
        sum += el
    });
    return sum;
};

// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже
// Math:
Math.abs(-2);
Math.ceil(6.8);
Math.floor(6.3);
Math.max(2, 4, 12, 5, 7, 14, 9);
Math.min(2, 4, 12, 5, 7, 14, 9);
Math.pow(3, 3);
Math.random();
Math.round(6.7);
Math.sqrt(36);
Math.trunc(7.346343);

// JSON:
var obj = {
    x: 7, y: 9
}
JSON.stringify(obj);
JSON.parse('{"x":7,"y":9}');