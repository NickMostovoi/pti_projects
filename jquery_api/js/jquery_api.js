// Write your code here
console.log('Hello world!');

// При клике на кнопку изменить цвет текста
$('.b1').click(function() {
    $('.t1').css('color', 'red');
});

// При клике на кнопку изменить цвет фона
$('.b2').on('click', function() {
    $('.t2').css('background-color', 'yellow');
});

// При клике на кнопку изменить путь ссылки
$('.b3').click(function() {
    $('.t3 a').attr('href', 'https://ebanoe.it/');
});

// При клике на кнопку изменить путь к картинке
$('.b4').click(function() {
    $('.t4 img').attr('src', 'images/kat.png');
});

// При клике на кнопку изменить id элемента
$('.b5').click(function() {
    $('#ab').attr('id', 'newId');
});

// При клике на кнопку изменить текст
$('.b6').click(function() {
    $('.t6').text('new text');
});

// При клике на кнопку изменить HTML
$('.b7').click(function() {
    $('.t7').html('Good <a href="#">wine</a>');
});

// При клике на кнопку изменить размер шрифта
$('.b8').click(function() {
    $('.t8').css('font-size', '20px');
});

// При клике на кнопку добавить класс 'hi'
$('.b9').click(function() {
    $('.t9').addClass('hi');
});

// При клике на кнопку удалить класс 'hi'
$('.b10').click(function() {
    $('.t10').removeClass('hi');
});

// При клике на кнопку добавлять/удалять (в зависимости от наличия) класс 'hi'
$('.b11').click(function() {
    $('.t11').toggleClass('hi');
});

// При клике на любом элементе страницы выводить значение атрибута class элемента
$('body').on('click', function(e) {
    $('.t12').text(e.target.className);
});

// При клике на кнопку перевести текст на английский язык (перевод хранится в атрибуте data-en элемента)
$('.b13').click(function() {
    $('.t13').text($('.t13').data('en'));
});

// При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
$(window).on('resize', function() {
    var r = _.random(255);
    var g = _.random(255);
    var b = _.random(255);
    $('.t99').css('background-color', 'rgb('+r+', '+g+', '+b+')');
});

// При изменении значения элемента формы выводить количество символов которое оно содержит
$('input').on('input', function() {
    $('.t98-2').text($('input').val().length);
});

// Вывести на экран анкету Жасмин используя переменную jasmine (смотри исходный код) двумя способами (созданием элементов, конкатенацией)
$('.b14').on('click', function() {
    var newJasmine = $('<div>').addClass('whore');

    var nameOfJasmine = $('<div>').addClass('whore-name');
    nameOfJasmine.text(jasmine.name);
    newJasmine.append(nameOfJasmine);

    var photoOfJasmine = $('<img>').attr('src', jasmine.photo);
    newJasmine.append(photoOfJasmine);

    var ageOfJasmine = $('<div>').addClass('whore-age');
    ageOfJasmine.text('Возраст: ' + jasmine.age);
    newJasmine.append(ageOfJasmine);

    var boobsOfJasmine = $('<div>').addClass('whore-boobs');
    boobsOfJasmine.text('Размер груди: ' + jasmine.boobs);
    newJasmine.append(boobsOfJasmine);

    var heightOfJasmine = $('<div>').addClass('whore-height');
    heightOfJasmine.text('Рост: ' + jasmine.height);
    newJasmine.append(heightOfJasmine);

    var weightOfJasmine = $('<div>').addClass('whore-weight');
    weightOfJasmine.text('Вес: ' + jasmine.weight);
    newJasmine.append(weightOfJasmine);

    var phoneOfJasmine = $('<div>').addClass('whore-phone');
    phoneOfJasmine.text(jasmine.phone);
    newJasmine.append(phoneOfJasmine);

    var canComeOfJasmine = $('<div>').addClass('whore-can-come');
    canComeOfJasmine.text('Выезд: ' + (jasmine.can_come ? 'yes' : 'no'));
    newJasmine.append(canComeOfJasmine);

    var teaserOfJasmine = $('<div>').addClass('whore-teaser');
    teaserOfJasmine.text(jasmine.teaser);
    newJasmine.append(teaserOfJasmine);

    $('.whores-container').append(newJasmine);

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

    $('.whores-container').append(newJasmine2);
});

// Переместить рыбу из первого контейнера во второй (при повторном клике из второго в первый и т.д.)
$('.b15').on('click', function() {
    if ($('.cat-container-1 .fish')[0]) {
        $('.cat-container-2').append($('.fish'));
    } else {
        $('.cat-container-1').append($('.fish'));
    }
});

// Удалить зуб
$('.b16').on('click', function() {
    $('.tooth').remove();
});

// Хочу чтоб лыжник бесконечно ехал вправо (сдвиг на 5px каждые 16ms). При нажатии на кнопку "Стоп!" останавливался.
$('.b17').on('click', function() {
    var x = 0;
    var interval = setInterval(function() {
        var shiftLeft = x + 'px';
        x += 5;
        $('.skier').css('left', shiftLeft);
    }, 16);
    $('.b17-2').on('click', function() {
        clearInterval(interval);
    });
});

// mikki
$(mikki).each(function(i) {
    $(mikki).each(function(j) {
        var tile = $('<div>').addClass('mikki_tile');
        if (mikki[i][j] === 'X') {
            tile.css('background-color', '#000');
        }
        $('.mikki_tiles').append(tile);
    });
});

// mario
$('.b18').on('click', function() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {

            var tile = $('<div>').addClass('tile');
            var topOn = i * 16 + 'px';
            var leftOn = j * 16 + 'px';

            tile.css('top', topOn)
            tile.css('left', leftOn)

            if (map[i][j] === 'w') {
                tile.addClass('x_w');
            }
            if (map[i][j] === 'c') {
                tile.addClass('x_c');
            }
            if (map[i][j] === 'k') {
                tile.addClass('x_k');
            }
            if (map[i][j] === 'b') {
                tile.addClass('x_b');
            }
            if (map[i][j] === 't') {
                tile.addClass('x_t');
            }
            if (map[i][j] === 'd') {
                tile.addClass('x_d');
            }
            if (map[i][j] === 'g') {
                tile.addClass('x_g');
            }
            if (map[i][j] === 'z') {
                tile.addClass('x_z');
            }
            $('.scene').append(tile);
        }
    }
});

// next/prev
$('.next').on('click', function() {
    var slides = $('.slide');
    var activeSlide = $('.slide.active')[0];
    var activeSlideIdx = _.indexOf(slides, activeSlide);

    var nextSlideIdx = activeSlideIdx === slides.length - 1 ? 0 : activeSlideIdx+1;
    var nextSlide = slides[nextSlideIdx];

    $(activeSlide).removeClass('active');
    $(nextSlide).addClass('active');
});

$('.previous').on('click', function() {
    var slides = $('.slide');
    var activeSlide = $('.slide.active')[0];
    var activeSlideIdx = _.indexOf(slides, activeSlide);

    var prevSlideIdx = activeSlideIdx === 0 ? slides.length - 1 : activeSlideIdx-1;
    var prevSlide = slides[prevSlideIdx];

    $(activeSlide).removeClass('active');
    $(prevSlide).addClass('active');
});

// Кликая вопросам я хочу видеть ответы на них
$('.question').on('click', function() {
        $(this).toggleClass('active');
});

// Кликая по вкладкам я хочу видеть связанное содержимое
$('.tabs .item').on('click', function() {
        $('.item.active').removeClass('active');
        $(this).toggleClass('active');

        $('.tabs-content').find('[data-tab=' + $(this).data('tab') + ']').addClass('active');
});

// Login
$('.show-login-pop-up').on('click', function() {
    $('.overlay, .pop-up').removeClass('hidden');
});

$('.close').on('click', function() {
    $('.overlay, .pop-up').addClass('hidden');
});

// Отменить действие по-умолчанию при клике на ссылку
$('.link-ebanoe').on('click', function(e) {
    e.preventDefault();
});

// Надоела реклама
$('.b97').on('click', function() {
    $('.t97').css('display', 'none');
    localStorage.setItem('spam', 'hidden');
});

if (localStorage.getItem('spam') === 'hidden') {
    $('.t97').css('display', 'none');
}
