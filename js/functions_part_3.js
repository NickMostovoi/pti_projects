// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать функцию each с двумя входными параметрами (массив и функция iteratee). Функция each проходит по всему списку элементов, вызывая для каждого из них функцию iteratee.
// При каждом вызове в iteratee будут переданы два аргумента: (element, index).
// Пример работы:
// each([1, 2, 3], function(element, index) { console.log(element, index); });
// => выведет в консоль все цифры и соответствующие им индексы по очереди
var each = function(arr, iteratee) {
    var i = 0;
    while (i < arr.length) {
        iteratee(arr[i], i);
        i++;
    }
};

// Создать функцию map с двумя входными параметрами (массив и функция iteratee). Функция map возвращает новый массив, полученный преобразованием каждого элемента массива в функции iteratee.
// Функция iteratee получает два аргумента: значение value, индекс index.
// Пример работы:
// map([1, 2, 3], function(value) { return value * 3; });
// => [3, 6, 9]
var map = function(arr, iteratee) {
    var i = 0;
    var newArr = [];
    while (i < arr.length) {
        newArr[newArr.length] = iteratee(arr[i], i);
        i++;
    }
    return newArr;
};

// Создать функцию findIndex с двумя входными параметрами (массив и функция predicate). Функция findIndex так же как и indexOf, возвращает первый индекс того значения, для которого функция predicate вернёт true. Если такой элемент не был найден, вернёт -1.
// Пример работы:
// findIndex([4, 6, 8, 12], function(value) { return value === 8; });
// => 2
var findIndex = function(array, predicate) {
    var i = 0;
    while (i < array.length) {
        if (predicate(array[i])) {
            return i;
        }
        i++;
    }
    return -1;
};

// Создать функцию find с двумя входными параметрами (массив list и функция predicate). Функция find вызывает для каждого элемента list функцию сравнения predicate, возвращая первый элемент, для которого predicate вернула true, или undefined, если ни один элемент не подошёл.
// Пример работы:
// find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0; });
// => 2
var find = function(list, predicate) {
    var i = 0;
    while (i < list.length) {
        if (predicate(list[i])) {
            return list[i];
        }
        i++;
    }
};

// Создать функцию filter с двумя входными параметрами (массив list и функция predicate) которая проходит через каждое значение list, возвращая массив всех значений, для которых predicate вернул true.
// Пример работы:
// filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0; });
// => [2, 4, 6]
var filter = function(list, predicate) {
    var i = 0;
    var newList = [];
    while (i < list.length) {
        if (predicate(list[i])) {
            newList[newList.length] = list[i];
        }
        i++;
    }
    return newList;
};

// Создать функцию reject с двумя входными параметрами (массив list и функция predicate) которая возвращает массив, содержащий все значения list, за исключением элементов, для которых функция predicate вернула значение true. Т.е. reject является «антонимом» filter.
// Пример работы:
// reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
// => [1, 3, 5]
var reject = function(list, predicate) {
    var i = 0;
    var newList = [];
    while (i < list.length) {
        if (!predicate(list[i])) {
            newList[newList.length] = list[i];
        }
        i++;
    }
    return newList;
};

// Создать функцию every с двумя входными параметрами (массив list и функция predicate). Вернёт true, если для каждого значения из list predicate вернёт true, иначе false.
// Пример работы:
// every([2, 4, 5], function(num) { return num % 2 === 0; });
// => false
var every = function(list, predicate) {
    var i = 0;
    while (i < list.length) {
        if (!predicate(list[i])) {
            return false;
        }
        i++;
    }
    return true;
};

// Создать функцию some с двумя входными параметрами (массив list и функция predicate). Вернёт true, если хотя бы для одного значения из list predicate вернёт true, иначе false.
// Пример работы:
// some([2, 4, 5], function(num) { return num % 2 === 0; });
// => true
var some = function(list, predicate) {
    var i = 0;
    while (i < list.length) {
        if (predicate(list[i])) {
            return true;
        }
        i++;
    }
    return false;
};

// Создать функцию partition с двумя входными параметрами (массив array и функция predicate). Разобъёт массив array на две части: одна - для элементов которой функция predicate вернёт true, и другая - для всех остальных.
// Пример работы:
// partition([0, 1, 2, 3, 4, 5], function(num) { return num % 2 === 0; });
// => [[0, 2, 4], [1, 3, 5]]
var partition = function(array, predicate) {
    var i = 0;
    var arr1 = [];
    var arr2 = [];
    while (i < array.length) {
        if (predicate(array[i])) {
            arr1[arr1.length] = array[i];
        } else {
            arr2[arr2.length] = array[i];
        }
        i++;
    }
    return [arr1, arr2];
};
