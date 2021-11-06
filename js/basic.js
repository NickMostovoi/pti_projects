// ВНИМАНИЕ! Соблюдайте форматирование кода (отступы, переносы)

// 1. Создать 10 литералов представлюящих числа (5 целых и 5 дробных)

1
22
300
4000
55
1.0
2.578
3.75
54.052
6786.4886

// 2. Создать 10 строковых литералов

'keyboard'
'mouse'
'notebook'
'pen'
'headphones'
'table'
'case'
'charger'
'monitor'
'lamp'

// 3. Создать 10 объектов представляющих объекты реального мира. В каждом объекте должно быть не меньше 4 свойств.
// TODO запятые

{
    name: 'keyboard',
    price: 50,
    color: 'black',
    charger: 'battery',
    lang: 'en',
    backlight: true
}

{
    name: 'mouse'
    brand: 'A4TECH'
    price: 14.3
    color: 'black'
    wireless: true

}

{
    name: 'notebook'
    price: 10
    color: 'sea wave'
    calendar: true
    bookmark: true
    pages: 200
}

{
    name: 'pen'
    price: 2.50
    color: 'blue'
    kilometers: 10
    cap: false
}

{
    name: 'headphones'
    brand: 'Samsung'
    price: 250
    wireless: true
    color: 'white'
}

{
    name: 'table'
    material: 'red tree'
    price: 300
    forComputer: true
    wheels: true
}

{
    name: 'case',
    color: 'transparent',
    material: 'silicon',
    weight: 20,
    forModel: 'iPhoneX'
}

{
    name: 'charger'
    brand: 'Samsung'
    price: 12.20
    color: 'red'
    conector: 'usb'
    standart: 'EU'
    wireless: false
}

{
    name: 'monitor'
    brand: 'LG'
    price: 200.50
    color: 'black'
    conector: 'HDMI'
    resolution: 'FullHD'
}

{
    name: 'lamp'
    price: 10
    color: 'white'
    charger: 'cable'
    material: 'plastic'
    bluetooth: false
}

// 4. Создать 10 массивов представляющих массивы некоторых значений из реальной жизни. В каждом массиве должно быть не меньше 4 элементов.

['glass', 'plate', 'spoon', 'fork', 'knife'];

[23, 18, 45, 78, 82];

['pen', '2.50$', 'blue', 'without cap'];

['red', 'blue', 'black', 'beige', 'purple', 'pink', 'green'];

['mouse', 'A4TECH', 14.3 + '$', 'black'];

['keyboard', 50 + '$', 'black', 'en', 'with backlight'];

['shampoo', 'gel', 'soap', 'foam', 'toothpaste'];

[100.4, 104.89, 159.39, 159.42, 102.1];

['lemon', 'tangerine', 'banana', 'peach', 'pear'];

['notebook', '10$', 'sea wave color', 'with calendar', '200 pages'];

// 5. Объявить 5 переменных с произвольным именем.

var keyboard = 5, mouse;
var notebook;
var pen;
var headphones;
var table, book, charger;
var monitor;
var lamp;

// 6. Объявить еще 5 переменных и в момент объявления присвоить им значения произвольных типов данных.

var q = 1, w = 'string';
var e = [1, 5, 12, 10];
var r = true;
var t = false;
var y = {
    brand: 'Toyota',
    model: 'Camry',
    color: 'black',
    price: 50000 + '$'
};

// 7. Создать массив из элементов, значения которых представлены всеми изученными типами данных в JavaScript.

[255, 'string', true, null, undefined, [5, 54], {name: 'Петя', age: 30}];

// 8. Создать объект из 5 свойств. Три свойства должны иметь значения простых типов данных. Два остальных свойства должны иметь значения составного (объектного) типа данных.

var person = {
    name: 'Vasia',
    age: 35,
    married: false,
    childrens: [
        {name: 'Victor', age: 10},
        {name: 'Maria', age: 5}
    ],
    ownerOf: ['home', 'car', 'boat', 'helicopter']
};

// 9. Написать выражения использующие все изученные арифметические операторы

(10 + 50) * 20 + 30 / 2 - 85 % 20

// 10. Написать выражения использующие все изученные операторы сравнения

10 === 10
20 !== 15
40 < 50
40 <= 40
100 > 40
100 >= 100

// 11. Написать выражения использующие все изученные логические операторы

12 === 12 && 40 >= 20
15 !== 15 || 10 < 20
!false

// 12. Написать выражение использующее тернарный условный оператор

20 < 10 ? 'yes' : 'no'

// 13. Написать выражения использующие все изученные операторы присваивания

a = 2
a *= 15
a /= 3
a %= 3
a += 4
a -= 3

// 14. Создать массив из 10 элементов (чисел) и написать выражения возвращающие значение первого, третьего, пятого и восьмого элемента

numbers = [10, 20, 30, 40, 50, 6.60, 7.70, 8.80, 9.90, 100];
numbers[0];
numbers[2];
numbers[4];
numbers[7];

// 15. Создать массив и написать 3 выражения меняющие значения его элементов

colors = ['red', 'blue', 'black', 'beige', 'purple', 'pink', 'green'];
colors[1] = 'white';
colors[3] = 'yellow';
colors[4] = 'darkRed';

// 16. Создать объект из 5 свойств и написать 3 выражения возвращающие значения произвольных свойств

var charger = {
    brand: 'Samsung',
    price: 12.20,
    color: 'red',
    conector: 'usb',
    standart: 'EU',
    wireless: false
};

charger.color;
charger.conector;
charger.standart;

// 17. Создать объект и написать 3 выражения меняющие значения его свойств

var monitor = {
    name: 'FF203',
    brand: 'LG',
    price: 200.50,
    color: 'black',
    connector: 'HDMI',
    resolution: 'FullHD'
};

monitor.name = 'DE101';
monitor.resolution = '4K';
monitor.price = 320.40;