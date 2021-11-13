// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать функцию keys которая возвращает массив имен всех свойств(ключей) принимаемого объекта.
// Пример работы:
// keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]
var keys = function(obj) {
    var newArr = [];
    for (var keys in obj) {
        newArr[newArr.length] = keys;
    }
    return newArr;
};

// Создать функцию values которая возвращает массив значений всех свойств принимаемого объекта.
// Пример работы:
// values({one: 1, two: 2, three: 3});
// => [1, 2, 3]
var values = function(obj) {
    var newArr = [];
    for (var values in obj) {
        newArr[newArr.length] = obj[values];
    }
    return newArr;
};

// Создать функцию pairs которая возвращает список пар [свойство, значение] входящего объекта.
// Пример работы:
// pairs({one: 1, two: 2, three: 3});
// => [["one", 1], ["two", 2], ["three", 3]]
var pairs = function(obj) {
    var newArr = [];
    for (var keys in obj) {
        newArr[newArr.length] = [keys, obj[keys]];
    }
    return newArr;
};

// Создать функцию invert которая возвращает копию входящего объекта где свойства - значения, а значения - свойства.
// Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально преобразованы в строки.
// Пример работы:
// invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}
var invert = function(obj) {
    var res = {};
    for (var prop in obj) {
        res[obj[prop]] = prop;
    }
    return res;
};

// Создать функцию omit которая возвращает копию объекта без указанного свойства.
// Пример работы:
// omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}
var omit = function(obj, val) {
    var newObj = {};
    for (var key in obj) {
        if (key !== val) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

// Создать функцию has которая проверяет, содержит ли объект указанный ключ (свойство). Если да, то возвращает true иначе false.
// Пример работы:
// has({a: 1, b: 2, c: 3}, 'b');
// => true
var has = function(obj, val) {
    var prop;
    for (prop in obj) {
        if (prop === val) {
            return true;
        }
    }
    return false;
};

// Создать функцию isMatch которая проверяет, содержатся ли ключ-значене в объекте. Если да, то возвращает true иначе false.
// Пример работы:
// isMatch({name: 'moe', age: 32}, {age: 32});
// => true
var isMatch = function(obj1, obj2) {
    for (var key in obj2) {
        return obj2[key] === obj1[key];
    }
};

// Создать функцию isEmpty которая вернёт true если коллекция (объект или массив) не содержит ни одного значения, в противном случае вернет false.
// Пример работы:
// isEmpty([]);
// => true
// isEmpty([1, 2, 3]);
// => false
// isEmpty({});
// => true
// isEmpty({x: 4});
// => false
var isEmpty = function(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};

// Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
// Пример работы:
// extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}
var extend = function(destination, source) {
    for (var key in source) {
        destination[key] = source[key];
    }
    return destination;
};

// Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
// Пример работы:
// defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}
var defaults = function(object, def) {
    for (var key in def) {
        if (object[key] === undefined) {
            object[key] = def[key];
        }
    }
    return object;
};
