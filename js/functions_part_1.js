// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать функцию isUndefined которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно undefined иначе возвращает false.
// Пример работы:
// isUndefined(undefined);
// => true
// isUndefined(null);
// => false
// isUndefined('hello');
// => false
// isUndefined(5);
// => false

var isUndefined = function(value) {
    return value === undefined;

    // if (value === undefined) {
    //     return true;
    // }
    // return false;
};

// Создать функцию isNull которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно null иначе возвращает false.
// Пример работы:
// isNull(null);
// => true
// isNull(undefined);
// => false
// isNull(5);
// => false

var isNull = function(value) {
    return value === null;

    // if (null === value) {
    //     return true;
    // }
    // return false;
};

// Создать функцию isBoolean которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если принимаемое значение является значением логического типа данных. В противном случае вернет false.
// Пример работы:
// isBoolean(null);
// => false
// isBoolean(5);
// => false
// isBoolean(false);
// => true
// isBoolean(true);
// => true

var isBoolean = function(value) {
    return value === true || value === false;
};

// Создать функцию size которая принимает в качестве единственного входящего параметра массив и возвращает количество элементов в массиве.
// Пример работы:
// size([7, 2, 8]);
// => 3
// size([7, 2, 3, 5, 1]);
// => 5

var size = function(list) {
    return list.length;
};

// Создать функцию first которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает первое из них.
// Пример работы:
// first([5, 4, 3, 2, 1]);
// => 5
// first([9, 0, 4, 7, 2]);
// => 9

var first = function(list) {
    return list[0];
};

// Создать функцию last которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает последнее из них.
// Пример работы:
// last([5, 4, 3, 2, 1]);
// => 1
// last([8, 2, 1, 7, 3]);
// => 3

var last = function(list) {
    return list[list.length - 1];
};

// Создать функцию isEven которая возвращает true если число четное или false в противном случае.
// Пример работы:
// isEven(10);
// => true
// isEven(8);
// => true
// isEven(7);
// => false

var isEven = function(value) {
    return value % 2 === 0;

    // if (value % 2 === 0) {
    //     return true;
    // }
    // return false;
};

// Создать функцию indexOf которая вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден.
// Пример работы:
// indexOf([7, 2, 3], 2);
// => 1
// indexOf([7, 2, 3], 7);
// => 0
// indexOf([7, 2, 3], 5);
// => -1

var indexOf = function(array, value) {
    var index = 0;
    while (index < array.length) {
        if (array[index] === value) {
            return index;
        }
        index++;
    }
    return -1;
};

// Создать функцию lastIndexOf которая паринимает два параметра (массив, значение) и ищет значение в массиве и возвращет его индекс, но делает это не с начала массива, а с его конца.
// Т.е. возвращает позицию последнего вхождения значения в массиве значений. Иначе возвращает -1.
// Пример работы:
// lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4
// lastIndexOf([1, 2, 3, 1, 2, 3], 3);
// => 5

var lastIndexOf = function(array, value) {
    var index = array.length;
    var i = 0;
    while (array.length > i) {
        if (array[index] === value) {
            return index;
        }
        index--;
    }
    return -1;
};

// Создать функцию push которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в конце массива)
// Пример работы:
// push([1, 2, 3, 4], 5);
// => [1, 2, 3, 4, 5]

var push = function(array, value) {
    var newArr = [];
    var i = 0;
    while (i < array.length) {
        newArr[newArr.length] = array[i];
        i++;
    }
    newArr[newArr.length] = value;
    return newArr;
};

// Создать функцию unshift которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в начале массива)
// Пример работы:
// unshift([1, 2, 3, 4], 5);
// => [5, 1, 2, 3, 4]

var unshift = function(array, value) {
    var newArr = [];
    var i = 0;
    newArr[newArr.length] = value;
    while (i < array.length) {
        newArr[newArr.length] = array[i];
        i++;
    }
    return newArr;
};

// Создать функцию pop которая принимает массив и возвращает копию массива без последнего значения.
// Пример работы:
// pop([1, 2, 3, 4]);
// => [1, 2, 3]

var pop = function(array) {
    var newArr = [];
    var i = 0;
    while (i < array.length - 1) {
        newArr[newArr.length] = array[i];
        i++;
    }
    return newArr;
};

// Создать функцию shift которая принимает массив и возвращает копию массива без первого значения.
// Пример работы:
// shift([1, 2, 3, 4]);
// => [2, 3, 4]

var shift = function(array) {
    var newArr = [];
    var i = 1;
    while (i < array.length) {
        newArr[newArr.length] = array[i];
        i++;
    }
    return newArr;
};

// Создать функцию getPositiveNumbers которая принимает массив чисел и возвращает массив положительных чисел найденных в исходном массиве.
// Пример работы:
// getPositiveNumbers([10, -5, 100, -2, 1000]);
// => [10, 100, 1000]

var getPositiveNumbers = function(array) {
    var newArr = [];
    var i = 0;
    while (i < array.length) {
        if (array[i] >= 0) {
            newArr[newArr.length] = array[i];
        }
        i++;
    }
    return newArr;
};

// Создать функцию reverse которая принимает массив и возвращает копию входящего массива с элементами в обратном порядке.
// Пример работы:
// reverse([1, 'lol', 5, {}, []]);
// => [[], {}, 5, "lol", 1]

var reverse = function(array) {
    var newArr = [];
    var i = array.length - 1;
    while (i >= 0) {
        newArr[newArr.length] = array[i];
        i--;
    }
    return newArr;
};

// Создать функцию compact которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает копию массива без undefined значений.
// Пример работы:
// compact([10, 1, 4, 2, undefined, 3, null]);
// => [10, 1, 4, 2, 3, null]

var compact = function(array) {
    var newArr = [];
    var i = 0;
    while (i < array.length) {
        if (array[i] !== undefined) {
            newArr[newArr.length] = array[i];
        }
        i++;
    }
    return newArr;
};

// Создать функцию contains которая принимает два входящих параметра (массив значений простых типов данных и значение простого типа данных).
// Функция вернет true если в массиве содержится определенное значение. Иначе функция вернет false.
// Пример работы:
// contains([1, 2, 3], 3);
// => true

var contains = function(list, value) {
    var index = 0;
    while (index < list.length) {
        if (list[index] === value) {
            return true;
        }
        index++;
    }
    return false;
};

// Создать функцию without которая возвращает копию массива, в которой удалены все значения второго аргумента указанного при вызове функции.
// Пример работы:
// without([3, 6, 7, 'rere'], 6);
// => [3, 7, 'rere']

var without = function(array, value) {
    var newArr = [];
    var i = 0;
    while (i < array.length) {
        if (array[i] !== value) {
            newArr[newArr.length] = array[i];
        }
        i++;
    }
    return newArr;
};

// Создать функцию concat которая принимает два массива и возвращает новый массив состоящий из значений первого и второго.
// Пример работы:
// concat(['a', 'b', 'c'], ['d', 'e', 'f']);
// => [ "a", "b", "c", "d", "e", "f" ]

var concat = function(arr1, arr2) {
    var newArr = [];
    var i = 0;
    var b = 0;
    while (i < arr1.length) {
        newArr[newArr.length] = arr1[i];
        i++;
    }
    while (b < arr2.length) {
        newArr[newArr.length] = arr2[b];
        b++;
    }
    return newArr;
};

// Создать функцию slice которая принимает 3 параметра. Массив и два числа (begin и end). Возвращает копию части исходного массива. Начиная с индекса begin и заканчивая индексом end включительно (или концом массива если параметр end отстутствует).
// Пример работы:
// slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 3);
// => ['camel', 'duck']

var slice = function(array, begin, end) {
    var newArr = [];
    var i = begin;
    while (i <= end) {
        if (end === undefined) {
            end = array.length - 1;
        }
        newArr[newArr.length] = array[i];
        i++;
    }
    return newArr;
};

// Создать функцию getMatrixSum которая принимает матрицу чисел и возвращает сумму всех чисел.
// Пример работы:
// getMatrixSum([[1, 2], [0, 4], [1, 2]]);
// => 10

var getMatrixSum = function(matrix) {
    var sum = 0;
    var i = 0;
    var b = 0;
    while (i < matrix.length) {
        b = 0;
        while (b < matrix[i].length) {
            sum += matrix[i][b];
            b++;
        }
        i++;
    }
    return sum;
};

// Создать функцию getMatrixSumByDiagonal которая принимает квадратную матрицу чисел и возвращает сумму чисел по диагонали (слева направо, сверху вниз).
// Пример работы:
// var matrix = [
//      [1, 2, 3],
//      [3, 0, 4],
//      [0, 1, 2]
// ];
// getMatrixSumByDiagonal(matrix);
// => 3 (1 + 0 + 2)

var getMatrixSumByDiagonal = function(matrix) {
    var sum = 0;
    var index = 0;
    while (index < matrix.length) {
        sum += matrix[index][index];
        index++;
    }
    return sum;
};

// Создать функцию min которая принимает в качестве единственного входящего параметра массив чисел и возвращает наименьшее из них.
// Пример работы:
// min([10, 5, 100, 2, 1000]);
// => 2

var min = function(list) {
    var index = 1;
    var min = list[0];
    while (index < list.length) {
        if (list[index] < min) {
            min = list[index];
        }
        index++;
    }
    return min;
};

// Создать функцию max которая принимает в качестве единственного входящего параметра массив чисел и возвращает наибольшее из них.
// Пример работы:
// max([10, 5, 100, 2, 1000]);
// => 1000

var max = function(list) {
    var index = 1;
    var max = list[0];
    while (index < list.length) {
        if (list[index] > max) {
            max = list[index];
        }
        index++;
    }
    return max;
};

// Создать функцию repeat которая принимает строку и число count и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки.
// Пример работы:
// repeat('Work', 6);
// => 'WorkWorkWorkWorkWorkWork'

var repeat = function(string, count) {
    var result = '';
    var i = 0;
    while (i < count) {
        result += string;
        count--;
    }
    return result;
};

// Создать функцию sum которая принимает массив чисел и возвращает их сумму.
// Пример работы:
// sum([2, 2, 3]);
// => 7

var sum = function(list) {
    var index = 0;
    var total = 0;
    while (index < list.length) {
        total += list[index];
        index++;
    }
    return total;
};

// Создать функцию multiply которая принимает массив чисел и возвращает их произведение.
// Пример работы:
// multiply([2, 2, 3]);
// => 12

var multiply = function(array) {
    var index = 0;
    var total = 1;
    while (index < array.length) {
        total *= array[index];
        index++;
    }
    return total;
};

// Создать функцию abs которая принимает число и возвращает его модуль (абсолютная величина, неотрицательное число).
// Пример работы:
// abs(-4);
// => 4

var abs = function(value) {
    if (value >= 0) {
        return value;
    } else {
        value *= -1;
        return value;
    }
};

// Создать функцию pow которая принимает два числа и возводит первое число в степень (представленную вторым числом).
// Пример работы:
// pow(2, 2);
// => 4
// pow(3, 3);
// => 27

var pow = function(value, exp) {
    var result = value;
    var i = 1;
    while (i < exp) {
        result *= value;
        i++;
    }
    return result;
};

// Создать такие структуры данных чтобы выражение
// dro[1]().bro вернуло в качестве результата значение true,
// выражение a[4][1][1].y вернуло строку 'Север',
// выражение b.y().y.z()[3].autor вернуло строку 'Дима'.

var dro = [0, function() {
    return {bro: true};
}];

var a = [0, 1, 2, 3, [4, [5, {y: 'Север'}]]];

var b = {
    y: function() {
        return {
            y: {
                z: function() {
                    return [0, 1, 2, {autor: 'Дима'}];
                }
            }
        };
    }

};