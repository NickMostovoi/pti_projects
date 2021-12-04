// Write your code here
console.log('Hello world!');

$('.add-games').on('click', function() {
    $('#games').html(doT.template($('#game-template').html())({games: games}));
});

$('.btn-nav-en').on('click', function() {
    $('#nav').html(doT.template($('#nav-template').html())(navEn));
});

$('.btn-nav-ru').on('click', function() {
    $('#nav').html(doT.template($('#nav-template').html())(navRu));
});

$('.add-whores').on('click', function() {
    $('#whores').html(doT.template($('#whore-template').html())({whores: whores}));
});

$('.add-movies').on('click', function() {
    $('#movies').html(doT.template($('#movie-template').html())({movies: movies}));
});

