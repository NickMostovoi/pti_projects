var whores = {
    models: [],

    add: function(whore) {
        this.models.push(whore);
        this.setModelsToStorage();
    },

    update: function(updatedWhore) {
        var whore = _.findWhere(this.models, {id: updatedWhore.id});
        _.extend(whore, updatedWhore);
        this.setModelsToStorage();
    },

    remove: function(whoreId) {
        this.models = _.reject(this.models, function(whore) {
            return whore.id === whoreId;
        });
        this.setModelsToStorage();
    },

    get: function(whoreId) {
        return _.findWhere(this.models, {id: whoreId});
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    init: function() {
        this.models = this.getModelsFromStorage();
        this.setModelsToStorage();
    }
};

whores.init();

var listView = {
    tmplFn: doT.template($('#whoreTemplate').html()),

    collection: whores,

    subscribe: function() {
        $('.addButton').on('click', function() {
            formView.showAddForm();
        }.bind(this));

        $('.whoreList').on('click', function(e) {
            if ($(e.target).hasClass('whore')) {
                var whore = this.collection.get(e.target.id);
                formView.showEditRemoveForm(whore);
            }
        }.bind(this));
    },

    render: function() {
        $('.whoreList').html(this.tmplFn(this.collection.models));
    },

    init: function() {
        this.subscribe();
        this.render();
    }
};

listView.init();

var formView = {
    $fields: $('input[type="text"]'),

    tmplAddForm: doT.template($('#AddFormTemplate').html()),
    tmplForm: doT.template($('#InfomationFormTemplate').html()),

    collection: whores,

    showAddForm: function() {
        $('.columnRight').removeClass('hidden');
        $('#InfomationForm').html(doT.template(this.tmplAddForm()));
        this.subscribe();
    },

    showEditRemoveForm: function(whore) {
        $('.columnRight').removeClass('hidden');
        $('#InfomationForm').html(doT.template(this.tmplForm(whore)));
        this.subscribe();
    },

    getFormData: function(whore) {
        var whore = {};
        var uniqId = this.getUniqId();
        $('input').each(function() {
            whore.id = uniqId;
            whore[this.name] = $(this).val();
        });
        return whore;
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    updatedWhore: function() {
        var whore = whores.get($(".form").attr('id'))
        var updatedWhore = {};
        $('input').each(function() {
            updatedWhore[this.name] = $(this).val();
        });
        _.extend(whore, updatedWhore);
        return whore;
    },

    isFormDataValid: function() {
        return this.$fields.toArray().every(function(field) {
            return field.value !== '';
        });
    },

    highlightFields: function() {
        this.$fields.each(function(index, field) {
            field.style.border = field.value === '' ? '2px solid red' : '';
        })
    },

    resetForm: function() {
        $('input').val('');
        this.$fields.each(function(index, field) {
            field.style.border = '1px solid #000';
        })
    },

    hideForm: function() {
         $('.columnRight').addClass('hidden');
    },

    subscribe: function() {
        $('.saveButton').on('click', function() {
            if (this.isFormDataValid()) {
                this.collection.add(this.getFormData());
                listView.render();
                this.resetForm();
                this.hideForm();
            } else {
                this.highlightFields();
            }
        }.bind(this));

        $('.deleteButton').on('click', function() {
            var id = $(".form").attr('id');
            this.collection.remove(id);
            listView.render();
            this.resetForm();
            this.hideForm();
        }.bind(this));

        $('.updateButton').on('click', function() {
            var whore = this.updatedWhore();
            this.collection.update(whore);
            listView.render();
            this.resetForm();
            this.hideForm();
        }.bind(this));
    },

    init: function() {
        this.subscribe();
    }
};

formView.init();
