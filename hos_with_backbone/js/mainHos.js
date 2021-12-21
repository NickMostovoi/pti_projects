var Whores = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getModelsFromStorage());
        this.setModelsToStorage();

        this.on('all', function() {
            this.setModelsToStorage();
        });
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    },
});

var whores = new Whores;

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#whoreTemplate').html()),

    el: '#listView',

    initialize: function() {
        this.listenTo(this.collection, 'all', function() {
            this.render();
        });
        this.render();
    },

    events: {
        'click .addButton': 'handleClickOnAddBtn',
        'click .whoreList': 'handleClickOnWhore'
    },

    handleClickOnAddBtn: function() {
        formView.showAddForm();
    },

    handleClickOnWhore: function(e) {
            var whore = this.collection.get(e.target.dataset.id);
            formView.showEditRemoveForm(whore);
    },

    render: function() {
        this.$('.whoreList').html(this.tmplFn(this.collection.toJSON()));
    }
});

var listView = new ListView({
    collection: whores
});

var FormView = Backbone.View.extend({
    tmplAddForm: doT.template($('#addFormTemplate').html()),
    tmplEditForm: doT.template($('#editFormTemplate').html()),

    el: '#InfomationForm',

    showAddForm: function() {
        $('.columnRight').removeClass('hidden');
        $('#InfomationForm').html(doT.template(this.tmplAddForm()));
    },

    showEditRemoveForm: function(whore) {
        $('.columnRight').removeClass('hidden');
        whore = whore.toJSON();
        $('#InfomationForm').html(doT.template(this.tmplEditForm(whore)));
    },

    getFormData: function() {
        var whore = {};
        var id = $('.form').data('id');
        whore.id = id ? id : this.getUniqId();
        $('.form input').each(function(idx, input) {
            whore[input.name] = input.value;
        });
        return whore;
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        return $('.form input').toArray().every(function(input) {
            return input.value !== '';
        });
    },

    highlightFields: function() {
        $('.form input').each(function(idx, input) {
            input.style.border = input.value === '' ? '2px solid red' : '';
        })
    },

    resetForm: function() {
        this.$('.form input').val('');
        this.$('.form input').each(function(idx, input) {
            input.style.border = '1px solid #000';
        })
    },

    hideForm: function() {
        $('.columnRight').addClass('hidden');
    },

    events: {
        'click .saveButton': 'handleSave',
        'click .updateButton': 'handleUpdate',
        'click .deleteButton': 'handleDelete'
    },

    handleSave: function() {
        if (this.isFormDataValid()) {
            this.collection.add(this.getFormData());
            this.resetForm();
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    handleUpdate: function() {
        if (this.isFormDataValid()) {
            this.collection.add(this.getFormData(), {merge: true});
            this.resetForm();
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    handleDelete: function() {
        var id = $('.form').data('id');
        this.collection.remove(id);
        this.resetForm();
        this.hideForm();
    }
});

var formView = new FormView({
    collection: whores
});
