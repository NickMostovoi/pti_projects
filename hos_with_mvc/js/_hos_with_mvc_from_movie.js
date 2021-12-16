var whores = {
    models: [],

    add: function(whore) {
        this.models.push(whore);
        $(this).trigger('change');
    },

    update: function(updatedWhore) {
        var whore = _.findWhere(this.models, {id: updatedWhore.id});
        _.extend(whore, updatedWhore);
        $(this).trigger('change');
    },

    remove: function(whoreId) {
        this.models = _.reject(this.models, function(whore) {
            return whore.id === whoreId;
        });
        $(this).trigger('change');
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
        $(this).on('change', this.setModelsToStorage.bind(this));
    }
};

whores.init();

var listView = {
    tmplFn: doT.template($('#whoreTemplate').html()),

    collection: whores,

    subscribe: function() {
        $('.addButton').on('click', this.handleClickOnAddBtn.bind(this));
        $('.whoreList').on('click', this.handleClickOnWhore.bind(this));
    },

    handleClickOnWhore: function(e) {
        if ($(e.target).hasClass('whore')) {
            var whore = this.collection.get(e.target.dataset.id);
            formView.showEditRemoveForm(whore);
        }
    },

    handleClickOnAddBtn: function() {
        formView.showAddForm();
    },

    render: function() {
        $('.whoreList').html(this.tmplFn(this.collection.models));
    },

    init: function() {
        this.subscribe();
        this.render();
        $(this.collection).on('change', this.render.bind(this));
    }
};

listView.init();

var formView = {
    tmplAddForm: doT.template($('#addFormTemplate').html()),
    tmplEditForm: doT.template($('#editFormTemplate').html()),

    collection: whores,

    showAddForm: function() {
        $('.columnRight').removeClass('hidden');
        $('#InfomationForm').html(doT.template(this.tmplAddForm()));
        this.subscribe();
    },

    showEditRemoveForm: function(whore) {
        $('.columnRight').removeClass('hidden');
        $('#InfomationForm').html(doT.template(this.tmplEditForm(whore)));
        this.subscribe();
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
        $('.form input').val('');
        $('.form input').each(function(idx, input) {
            input.style.border = '1px solid #000';
        })
    },

    hideForm: function() {
         $('.columnRight').addClass('hidden');
    },

    subscribe: function() {
        $('.saveButton').on('click', this.handleSave.bind(this));
        $('.deleteButton').on('click', this.handleDelete.bind(this));
        $('.updateButton').on('click', this.handleUpdate.bind(this));
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
            this.collection.update(this.getFormData());
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
    },

    init: function() {
        this.subscribe();
    }
};

formView.init();
