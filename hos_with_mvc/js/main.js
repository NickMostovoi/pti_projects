$('.addButton').on('click', function() {
    $('input').val('');
    $('input').css('border', '1px solid black');
    $('.addForm').removeClass('hidden');
});

var displayGirls = function() {
    if (localStorage.getItem('girls')) {
        var girls = JSON.parse(localStorage.getItem('girls'));
        var template = $('#girl-template').html();
        $('#informationForm').html(doT.template(template)({girls: girls}));
    }
};
displayGirls();

var emptyField = function() {
    if (localStorage.getItem('girls') === '[]') {
        var addEmptyField = $('<div>Шлюх пока нет</div>');
        $('.informationForm').append(addEmptyField);
    }
};
emptyField();

var validationForm = function() {
    var counterRightInputs = 0;
    $('.form').find('input').each(function() {
        if ($(this).val().length <= 1) {
            $(this).css('border', '1px solid red');
        } else {
            $(this).css('border', '1px solid green');
            counterRightInputs += 1;
        }
    });
    
    if (counterRightInputs === 5) {
        var girls = JSON.parse(localStorage.getItem('girls')) || [];

        var newGirl = {};
        $('.form').find('input').each(function() {
            newGirl[this.name] = $(this).val();
            newGirl.id = '_' + Math.random().toString(36).substr(2, 9);
        });

        girls.push(newGirl);
        localStorage.setItem('girls', JSON.stringify(girls));

        $('.addForm').addClass('hidden');
        displayGirls();
        mainGirlsFunctions();
    }
};

$('.saveButton').on('click', function() {
    validationForm();
});

var mainGirlsFunctions = function() {
    $('.girl').on('click', function(e) {
        var informationOfOneGirl = $('#girlInfomation');
        informationOfOneGirl.removeClass('hidden');

        var girls = JSON.parse(localStorage.getItem('girls'));

        var targetResult = girls.filter(function(obj) {
            return obj.id === e.target.id;
        });
        var object = targetResult[0];

        var girlInfomationTemplate = $('#girlInfomation-template').html();
        informationOfOneGirl.html(doT.template(girlInfomationTemplate)(object));

        $('.deleteButton').on('click', function() {
            var girls = JSON.parse(localStorage.getItem('girls'));

            var whoreId = $(".formTemp").attr('id');
            var newGirls = girls.filter(function(girls) {
                return girls.id !== whoreId;
            });

            localStorage.setItem('girls', JSON.stringify(newGirls));

            informationOfOneGirl.addClass('hidden');
            displayGirls();
            emptyField();
            mainGirlsFunctions();
        });

        $('.refreshButton').on('click', function() {
            var girls = JSON.parse(localStorage.getItem('girls'));

            var girlId = $('.formTemp').attr('id');
            var targetResult = girls.filter(function(obj) {
                return obj.id === girlId;
            });
            var selectedGirl = targetResult[0];

            var newInformationOfGirl = {};
            $('.formTemp').find('input').each(function() {
                newInformationOfGirl[this.name] = $(this).val();
            });

            Object.assign(selectedGirl, newInformationOfGirl);

            localStorage.setItem('girls', JSON.stringify(girls));

            informationOfOneGirl.addClass('hidden');
            displayGirls();
            mainGirlsFunctions();
        });
    });
};
mainGirlsFunctions();
