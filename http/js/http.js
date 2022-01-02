$('.add-games').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/games',
        dataType: 'json'
    }).done(function(data) {
        console.log('success', data);
        $('#games').html(doT.template($('#game-template').html())({games: data}));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});

$('.btn-nav-en').on('click', function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/menu/en');
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                $('#nav').html(doT.template($('#nav-template').html())(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

$('.btn-nav-ru').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/menu/ru',
        dataType: 'json'
    }).done(function(data) {
        console.log('success', data);
        $('#nav').html(doT.template($('#nav-template').html())(data));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});

$('.add-whores').on('click', function() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/whores');
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                $('#whores').html(doT.template($('#whore-template').html())({whores: JSON.parse(xhr.responseText)}));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

$('.add-movies').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/movies',
        dataType: 'json'
    }).done(function(data) {
        console.log('success', data);
        $('#movies').html(doT.template($('#movie-template').html())({movies: data}));
    }).fail(function() {
        console.log('error');
    }).always(function() {
        console.log('complete');
    });
});