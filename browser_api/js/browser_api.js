// Write your code here
console.log('Hello world!');

// При клике на кнопку изменить цвет текста
document.querySelector('.b1').addEventListener('click', function() {
    document.querySelector('.t1').style.color = '#f22';
});

// При клике на кнопку изменить цвет фона
document.querySelector('.b2').addEventListener('click', function() {
    document.querySelector('.t2').style.backgroundColor = 'orange';
});

// При клике на кнопку изменить путь ссылки
document.querySelector('.b3').addEventListener('click', function() {
    document.querySelector('.t3 a').href = 'https://ebanoe.it/';
});

// При клике на кнопку изменить путь к картинке
document.querySelector('.b4').addEventListener('click', function() {
    document.querySelector('.t4 img').src = 'images/kat.png';
});

// При клике на кнопку изменить id элемента
document.querySelector('.b5').addEventListener('click', function() {
    document.querySelector('#ab').id = 'newId';
});

// При клике на кнопку изменить текст
document.querySelector('.b6').addEventListener('click', function() {
    document.querySelector('.t6').innerText = 'new text';
});

// При клике на кнопку изменить HTML
document.querySelector('.b7').addEventListener('click', function() {
    document.querySelector('.t7').innerHTML = 'Beautiful <a href="#">Цветы</a>';
});

// При клике на кнопку изменить размер шрифта
document.querySelector('.b8').addEventListener('click', function() {
    document.querySelector('.t8').style.fontSize = '20px';
});

// При клике на кнопку добавить класс 'hi'
document.querySelector('.b9').addEventListener('click', function() {
    document.querySelector('.t9').classList.add('hi');
});

// При клике на кнопку удалить класс 'hi'
document.querySelector('.b10').addEventListener('click', function() {
    document.querySelector('.t10').classList.remove('hi');
});

// При клике на кнопку добавлять/удалять (в зависимости от наличия) класс 'hi'
document.querySelector('.b11').addEventListener('click', function() {
    document.querySelector('.t11').classList.toggle('hi');
});

// При клике на любом элементе страницы выводить значение атрибута class элемента
document.addEventListener('click', function(e) {
    document.querySelector('.t12').innerText = e.target.className;
});

// При клике на кнопку перевести текст на английский язык (перевод хранится в атрибуте data-en элемента)
document.querySelector('.b13').addEventListener('click', function() {
    document.querySelector('.t13').innerText = document.querySelector('.t13').getAttribute('data-en');
});

// При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
window.addEventListener('resize', function() {
    var round = Math.round, random = Math.random, num = 255;
    var r = round(random()*num);
    var g = round(random()*num);
    var b = round(random()*num);
    document.querySelector('.t99').style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});

// При изменении значения элемента формы выводить количество символов которое оно содержит
document.querySelector('input').addEventListener('input', function() {
    document.querySelector('.t98-2').innerText = document.querySelector('input').value.length;
});

// Вывести на экран анкету Жасмин используя переменную jasmine (смотри исходный код) двумя способами (созданием элементов, конкатенацией)
document.querySelector('.b14').addEventListener('click', function() {
    var newJasmine = document.createElement('div');
    newJasmine.classList.add('whore');

    var nameOfJasmine = document.createElement('div');
    nameOfJasmine.classList.add('whore-name');
    nameOfJasmine.innerText = jasmine.name;
    newJasmine.appendChild(nameOfJasmine);

    var photoOfjasmine = document.createElement('img');
    photoOfjasmine.src = jasmine.photo;
    newJasmine.appendChild(photoOfjasmine);

    var ageOfjasmine = document.createElement('div');
    ageOfjasmine.classList.add('whore-age');
    ageOfjasmine.innerText = 'Возраст: ' + jasmine.age;
    newJasmine.appendChild(ageOfjasmine);

    var boobsOfjasmine = document.createElement('div');
    boobsOfjasmine.classList.add('whore-boobs');
    boobsOfjasmine.innerText = 'Размер груди: ' + jasmine.boobs;
    newJasmine.appendChild(boobsOfjasmine);

    var heightOfjasmine = document.createElement('div');
    heightOfjasmine.classList.add('whore-height');
    heightOfjasmine.innerText = 'Рост: ' + jasmine.height;
    newJasmine.appendChild(heightOfjasmine);

    var weightOfjasmine = document.createElement('div');
    weightOfjasmine.classList.add('whore-weight');
    weightOfjasmine.innerText = 'Вес: ' + jasmine.weight;
    newJasmine.appendChild(weightOfjasmine);

    var phoneOfjasmine = document.createElement('div');
    phoneOfjasmine.classList.add('whore-phone');
    phoneOfjasmine.innerText = jasmine.phone;
    newJasmine.appendChild(phoneOfjasmine);

    var canComeOfjasmine = document.createElement('div');
    canComeOfjasmine.classList.add('whore-can-come');
    canComeOfjasmine.innerText = 'Выезд: ' + (jasmine.can_come ? 'yes' : 'no');
    newJasmine.appendChild(canComeOfjasmine);

    var teaserOfjasmine = document.createElement('div');
    teaserOfjasmine.classList.add('whore-teaser');
    teaserOfjasmine.innerText = jasmine.teaser;
    newJasmine.appendChild(teaserOfjasmine);

    document.querySelector('.whores-container').appendChild(newJasmine);

    // конкатенацией
    var newJasmine2 =
        '<div class="whore">' +
            '<div class="whore-name">' + jasmine.name + '</div>' +
            '<img src="' + jasmine.photo + '"width="200">' +
            '<div class="whore-age">Возраст: ' + jasmine.age + '</div>' +
            '<div class="whore-boobs">Размер груди: ' + jasmine.boobs + '</div>' +
            '<div class="whore-height">Рост: ' + jasmine.height +'</div>' +
            '<div class="whore-weight">Вес: ' + jasmine.weight + '</div>' +
            '<div class="whore-phone">' + jasmine.phone + '</div>' +
            '<div class="whore-can-come">Выезд: ' + (jasmine.can_come ? 'yes' : 'no') + '</div>' +
            '<div class="whore-teaser">' + jasmine.teaser + '</div>' +
        '</div>';

    document.querySelector('.whores-container').innerHTML += newJasmine2;
});

// Переместить рыбу из первого контейнера во второй (при повторном клике из второго в первый и т.д.)
document.querySelector('.b15').addEventListener('click', function() {
    if (document.querySelector('.cat-container-1 .fish')) {
        document.querySelector('.cat-container-2').appendChild(document.querySelector('.fish'));
    } else {
        document.querySelector('.cat-container-1').appendChild(document.querySelector('.fish'));
    }
});

// Удалить зуб
document.querySelector('.b16').addEventListener('click', function() {
    // var toothContainer = document.querySelector('.tooth-container');
    // var tooth = document.querySelector('.tooth');
    // toothContainer.removeChild(tooth);

    document.querySelector('.tooth-container').removeChild(document.querySelector('.tooth'));
});

// Хочу чтоб лыжник бесконечно ехал вправо (сдвиг на 5px каждые 16ms). При нажатии на кнопку "Стоп!" останавливался.
document.querySelector('.b17').addEventListener('click', function() {
    var x = 0;
    var interval = setInterval(function() {
        x += 5;
        document.querySelector('.skier').style.left = x + 'px';
    }, 16);
    document.querySelector('.b17-2').addEventListener('click', function() {
        clearInterval(interval);
    });
});

// mikki
var mikkiPicture = document.querySelector('.mikki_tiles');
for (var i = 0; i < mikki.length; i++) {
    for (var j = 0; j < mikki[i].length; j++) {
        var tile = document.createElement('span');
        tile.classList.add('mikki_tile');
        if (mikki[i][j] === 'X') {
            tile.style.backgroundColor = '#000';
        }
        mikkiPicture.appendChild(tile);
    }
}

// mario
document.querySelector('.b18').addEventListener('click', function() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            var tile = document.createElement('span');
            tile.classList.add('tile');
            tile.style.top = i * 16 + 'px';
            tile.style.left = j * 16 + 'px';
            if (map[i][j] === 'w') {
                tile.classList.add('x_w');
            }
            if (map[i][j] === 'c') {
                tile.classList.add('x_c');
            }
            if (map[i][j] === 'k') {
                tile.classList.add('x_k');
            }
            if (map[i][j] === 'b') {
                tile.classList.add('x_b');
            }
            if (map[i][j] === 't') {
                tile.classList.add('x_t');
            }
            if (map[i][j] === 'd') {
                tile.classList.add('x_d');
            }
            if (map[i][j] === 'g') {
                tile.classList.add('x_g');
            }
            if (map[i][j] === 'z') {
                tile.classList.add('x_z');
            }
            document.querySelector('.scene').appendChild(tile);
        }
    }
});

document.querySelector('.next').addEventListener('click', function() {
    var slides = document.querySelectorAll('.slide');
    var activeSlide = document.querySelector('.slide.active');
    var activeSlideIdx = [].indexOf.call(slides, activeSlide);

    var nextSlideIdx = activeSlideIdx === slides.length - 1 ? 0 : activeSlideIdx+1;
    var nextSlide = slides[nextSlideIdx];

    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
});

document.querySelector('.previous').addEventListener('click', function() {
    var slides = document.querySelectorAll('.slide');
    var activeSlide = document.querySelector('.slide.active');
    var activeSlideIdx = [].indexOf.call(slides, activeSlide);

    var prevSlideIdx = activeSlideIdx === 0 ? slides.length - 1 : activeSlideIdx-1;
    var prevSlide = slides[prevSlideIdx];

    activeSlide.classList.remove('active');
    prevSlide.classList.add('active');
});

// Кликая вопросам я хочу видеть ответы на них
document.querySelectorAll('.question').forEach(function(question) {
    question.addEventListener('click', function(e) {
        e.currentTarget.classList.toggle('active');
    });
});

// Кликая по вкладкам я хочу видеть связанное содержимое
var tabsContent = document.querySelector('.tabs-content');
var tabs = document.querySelector('.tabs');

tabs.addEventListener('click', function(e) {
    if (e.target.className === 'item') {
        tabs.querySelector('.tabs .active').classList.remove('active');
        e.target.classList.add('active');

        tabsContent.querySelector('.active').classList.remove('active');
        tabsContent.querySelector('[data-tab="' + e.target.dataset.tab + '"]').classList.add('active');
    }
});

// Login
document.querySelector('.show-login-pop-up').addEventListener('click', function() {
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.pop-up').classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.pop-up').classList.add('hidden');
});

// Отменить действие по-умолчанию при клике на ссылку
document.querySelector('.link-ebanoe').addEventListener('click', function(e) {
    e.preventDefault();
});

// Надоела реклама
document.querySelector('.b97').addEventListener('click', function() {
    document.querySelector('.t97').style.display = 'none';
    localStorage.setItem('spam', 'hidden');
});

if (localStorage.getItem('spam') === 'hidden') {
    document.querySelector('.t97').style.display = 'none';
}
