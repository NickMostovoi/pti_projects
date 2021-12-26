var Tasks = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getTasksFromStorage());
        this.setTasksToStorage();

        this.on('all', this.setTasksToStorage);
    },

    setTasksToStorage: function() {
        localStorage.setItem('tasks', JSON.stringify(this.toJSON()));
    },

    getTasksFromStorage: function() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    },

    completedTasksCounter: function() {
        return this.where({completed: true}).length;
    },

    incompletedTasksCounter: function() {
        return this.where({completed: false}).length;
    }
});

var tasks = new Tasks;

// **************************************************************** List View
var ListView = Backbone.View.extend({

    tmplFn: doT.template($('#tasks-template').html()),

    el: '#tasks',

    initialize: function() {
        this.render();
        this.listenTo(this.collection, 'all', this.render);
    },

    events: {
        'dblclick .title': 'handleDoubleClickToComplete',
        'click .item .important': 'handleClickToImportant',
        'click .item .delete': 'handleClickToDeleteTask'
    },

    handleDoubleClickToComplete: function(e) {
        var id = e.target.parentNode.dataset.id;
        var task = this.collection.get(id).toJSON();
        task.completed = !task.completed;
        this.collection.add(task, {merge: true});
        formView.counterOfTasks();
    },

    handleClickToImportant: function(e) {
        var id = $(e.target).parent().parent().attr('data-id');
        var task = this.collection.get(id).toJSON();
        task.important = !task.important;
        this.collection.add(task, {merge: true});
    },

    handleClickToDeleteTask: function(e) {
        var id = $(e.target).parent().parent().attr('data-id');
        this.collection.remove(id);
        formView.counterOfTasks();
    },

    searchFilter: function() {
        var searchingText = $('#needle').val();

        return this.collection.toJSON().filter(function(task) {
            return task.title.includes(searchingText);
        })
    },

    actionsFilter: function(e) {
        var nameOfActions = $('.active').data('filter');

        return this.collection.toJSON().filter(function(task) {
            if(nameOfActions === 'incompleted') {
                return task.completed === false;
            }
            if(nameOfActions === 'completed') {
                return task.completed === true;
            }
            if(nameOfActions === 'all') {
                return true;
            }
        })
    },

    render: function() {
        var selectedTasks = this.actionsFilter(this.collection.toJSON());
        this.$el.html(this.tmplFn(selectedTasks));
    }
});

var listView = new ListView({
    collection: tasks
});

// **************************************************************** Form View
var FormView = Backbone.View.extend({

    tmplFn: doT.template($('#tasks-template').html()),

    el: '.app',

    $input: $('input.title'),

    initialize: function() {
        this.counterOfTasks();
    },

    events: {
        'keydown .title': 'keydownForAddTask',
        'click .actions button': 'handleActions',
        'input #needle': 'handleSearch'
    },

    keydownForAddTask: function(e) {
        if(e.which  === 13) {
            if (this.isFormDataValid()) {
                this.collection.add(this.getFormData());
                this.resetForm();
            } else {
                this.highlightField();
            }
        }
        this.counterOfTasks();
    },

    getFormData: function() {
        var task = {};
        task.id = this.getUniqId();
        task.title = this.$input.val();
        task.completed = false;
        task.important = false;
        return task;
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        return this.$input.val() !== '';
    },

    highlightField: function() {
        return this.$input.css('outline', '1px solid red');
    },

    resetForm: function() {
        this.$input.val('');
        this.$input.css('outline', 'none');
    },

    handleSearch: function() {
        $('.items').html(this.tmplFn(listView.searchFilter()));
    },

    handleActions : function(e) {
        var button = e.target;
        $('.actions button').removeClass('active');
        $(button).addClass('active');
        listView.render();
    },

    counterOfTasks: function() {
        $('.item-completed').text(this.collection.completedTasksCounter());
        $('.item-incompleted').text(this.collection.incompletedTasksCounter());
    }
});

var formView = new FormView({
    collection: tasks
});