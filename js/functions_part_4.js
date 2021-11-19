// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
var obj = {
    x: 10,
    getX: function() {
        return this.x;
    },
    changeX: function(num) {
        this.x = num
    }
};

// Создать функцию-конструктор Circle которая принимает 3 параметра:
// координаты центра окружности (x, y) и ее радиус (radius).
// Возвращает объект ес собственными тремя свойствами (x, y, radius) и унаслдованными тремя методами.
// 1. Метод getDiameter возвращает диаметр откружности. Формула расчета диаметра: diameter = 2 * radius
// 2. Метод getPerimeter возвращает длину откружности. Формула расчета длины окружности: perimeter = 3.14 * diameter
// 3. Метод getSquare возвращает площадь откружности. Формула расчета площади окружности: square = 3.14 * (radius в квадрате)
// Пример работы:
// var circle = new Circle(5, 5, 5);
// circle.getDiameter();
// => 10
// circle.getPerimeter();
// => 31.41592653589793
// circle.getSquare();
// => 78.53981633974483
var Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};

Circle.prototype.getDiameter = function() {
    return this.radius * 2;
};

Circle.prototype.getPerimeter = function() {
    return this.radius * 2 * 3.14;
};

Circle.prototype.getSquare = function() {
    return this.radius * this.radius * 3.14;
};

// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
// Примеры работы:
// [7, 2, 8].size();
// => 3
Array.prototype.size = function() {
    return this.length;
};

// [5, 4, 3, 2, 1].last();
// => 1
Array.prototype.last = function() {
    return this[this.length - 1];
};

// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]
Array.prototype.getPositiveNumbers = function() {
    var newArr = [];
    var i = 0;
    while (i < this.length) {
        if (this[i] >= 0) {
            newArr[newArr.length] = this[i];
        }
        i++;
    }
    return newArr;
};

// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']
Array.prototype.without = function(value) {
    var newArr = [];
    var i = 0;
    while (i < this.length) {
        if (this[i] !== value) {
            newArr[newArr.length] = this[i];
        }
        i++;
    }
    return newArr;
};

// [10, 5, 100, 2, 1000].min();
// => 2
Array.prototype.min = function() {
    var i = 1;
    var min = this[i];
    while (i < this.length) {
        if (this[i] < min) {
            min = this[i]
        }
        i++;
    }
    return min;
};

// [2, 2, 3].sum();
// => 7
Array.prototype.sum = function() {
    var i = 0;
    var sum = 0;
    while (i < this.length) {
        sum += this[i];
        i++;
    }
    return sum;
};

// Создать функции keys, values, pairs, extend, как методы объектов
Object.prototype.keys = function() {
    var newArr = [];
    for (var key in this) {
        newArr[newArr.length] = key;
    }
    return newArr;
};

Object.prototype.values = function() {
    var newArr = [];
    for (var key in this) {
        newArr[newArr.length] = this[key];
    }
    return newArr;
};

Object.prototype.pairs = function() {
    var newArr = [];
    for (var key in this) {
        newArr[newArr.length] = [key, this[key]];
    }
    return newArr;
};

Object.prototype.extend = function(source) {
    for (var key in source) {
        this[key] = source[key];
    }
    return this;
};

// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
var charAt = function(string, index) {
    return string[index];
};

// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'
var trim = function(string) {// TODO:
    var newStr = '';
    var i = 0;
    // узнать индекс первого непробельного символа (.indexOf)
    // узнать индекс последнего непробельного символа (.lastIndexOf)
    // скопировать from begin to end (как slice)
    return newStr;
};
// как не удалять пробел в центре

// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"
var join = function(arr, separator) {
    var newStr = '';
    separator = separator === undefined ? ',' : separator;
    var i = 0;
    while (i < arr.length) {
        newStr += arr[i] + (i === arr.length - 1 ? '' : separator);

        // newStr += arr[i];
        // if (i < arr.length - 1) {
        //     newStr += separator;
        // }

        i++;
    }
    return newStr;
};

// Познакомиться с возможностями базовых (встроенных) классов
// Number
//     Number.prototype: toFixed
// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, length, sort, map, filter, every, some, reduce, reduceRight
// Object: keys, values, create, assign, entries
//     Object.prototype: hasOwnProperty
// Function
//     Function.prototype: apply, call, bind

// Привести примеры использования ниже
// Number
var num = 23.235253235;
num.toFixed(3);

// String
var str = ('   Hello world!   ');
str.charAt(7);
str.concat('+Hi');
str.includes('H');
str.indexOf('l');
str.lastIndexOf('l');
str.repeat(3);
str.replace('H', 'Ne-H');
str.slice(3, 7);
var str = ('Hello, world!');
str.split(',')
str.substr(0, 4);
str.substring(0, 4);
str.toLowerCase();
str.toUpperCase();
str.trim();

// Array
var arr = [2, 5, 7, 5, 6, 3, 9];
var arr2 = [6, 7, 0];
arr.concat(arr2);
arr.forEach(function() {
    console.log([arr2])
});
arr.includes(5);
arr.indexOf(5);
arr.join();
arr.lastIndexOf(5);
arr.pop();
arr.push(4);
arr.reverse();
arr.shift();
arr.slice(0, 2);
arr.splice(2, 1);
arr.unshift(9);
arr.length;
arr.sort();

var arr = [2, 5, 7, 5, 6, 3, 9];

arr.map(function(num) {
    return num + 2;
});

// arr.filter(function(num) {
//     if (num >= 5) {
//         return arr;
//     }
// });

arr.filter(function(num) {
    return num >= 5;
});

arr.every(min);
var min = function (el) {
    return el < 10;
};

arr.some(some);
var some = function (el) {
    return el === 7;
};

arr.reduce(reducer);
var reducer = function (previousValue, currentValue) {
    return previousValue + currentValue;
};

arr.reduceRight(reduceRight);
var reduceRight = function (previousValue, currentValue) {
    return previousValue + currentValue;
};

// Object
var arr = ['a', 'b', 'c'];
Object.keys(arr);
Object.values(arr);
Object.create(arr);
Object.assign(arr);
Object.entries(arr);

// Object.prototype
var object = new Object();
object.prop = 'str';
object.hasOwnProperty('prop');

// TODO: function