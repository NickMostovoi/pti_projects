var Whores = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getModelsFromStorage());
        this.setModelsToStorage();

        this.on('all', this.setModelsToStorage);
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    }
});

var whores = new Whores;

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#whoreTemplate').html()),

    el: '#listView',

    initialize: function() {
        this.listenTo(this.collection, 'all', this.render);
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
    tmplAddFormFn: doT.template($('#addFormTemplate').html()),
    tmplEditFormFn: doT.template($('#editFormTemplate').html()),

    el: '#InfomationForm',

    showAddForm: function() {
        this.$el.removeClass('hidden');
        this.$el.html(doT.template(this.tmplAddFormFn()));
    },

    showEditRemoveForm: function(whore) {
        this.$el.removeClass('hidden');
        this.$el.html(doT.template(this.tmplEditFormFn(whore.toJSON())));
    },

    getFormData: function() {
        var whore = {};
        var id = $('.form').data('id');
        whore.id = id ? id : this.getUniqId();
        this.$('input').each(function(idx, input) {
            whore[input.name] = input.value;
        });
        return whore;
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        return this.$('input').toArray().every(function(input) {
            return input.value !== '';
        });
    },

    highlightFields: function() {
        this.$('input').each(function(idx, input) {
            input.style.border = input.value === '' ? '2px solid red' : '';
        })
    },

    resetForm: function() {
        this.$('input').val('');
        this.$('input').each(function(idx, input) {
            input.style.border = '1px solid #000';
        });
    },

    hideForm: function() {
        this.$el.addClass('hidden');
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
        var id = this.$('.form').data('id');
        this.collection.remove(id);
        this.resetForm();
        this.hideForm();
    }
});

var formView = new FormView({
    collection: whores
});
