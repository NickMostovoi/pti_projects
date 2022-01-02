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
        var id = $(e.target).closest('.item').attr('data-id');
        var task = this.collection.get(id).toJSON();
        task.completed = !task.completed;
        this.collection.add(task, {merge: true});
    },

    handleClickToImportant: function(e) {
        var id = $(e.target).closest('.item').attr('data-id');
        var task = this.collection.get(id).toJSON();
        task.important = !task.important;
        this.collection.add(task, {merge: true});
    },

    handleClickToDeleteTask: function(e) {
        var id = $(e.target).closest('.item').attr('data-id');
        this.collection.remove(id);
    },

    searchFilter: function(tasks) {
        var searchingText = $('.filters #needle').val();

        return tasks.filter(function(task) {
            return task.title.includes(searchingText);
        });
    },

    actionsFilter: function(tasks) {
        var filter = $('.actions .active').data('filter');

        return tasks.filter(function(task) {
            if(filter === 'incompleted') {
                return task.completed === false;
            }

            if(filter === 'completed') {
                return task.completed === true;
            }

            if(filter === 'all') {
                return true;
            }
        });
    },

    getFilteredModels: function() {
        var searchingText = $('.filters #needle').val();
        var filter = $('.actions .active').data('filter');

        return this.collection.toJSON()
            .filter(function(task) {
                return task.title.includes(searchingText);
            })
            .filter(function(task) {
                if(filter === 'incompleted') {
                    return task.completed === false;
                }

                if(filter === 'completed') {
                    return task.completed === true;
                }

                if(filter === 'all') {
                    return true;
                }
            });
    },

    render: function() {
        // var tasks = this.collection.toJSON();
        // tasks = this.searchFilter(tasks);
        // tasks = this.actionsFilter(tasks);
        // this.$el.html(this.tmplFn(tasks));
        this.$el.html(this.tmplFn(this.getFilteredModels()));
    }
});

var listView = new ListView({
    collection: tasks
});

// **************************************************************** Form View
var FormView = Backbone.View.extend({

    el: '.app',

    $input: $('.source .title'),

    initialize: function() {
        this.counterOfTasks();
        this.listenTo(this.collection, 'all', this.counterOfTasks);
    },

    events: {
        'keydown .title': 'keydownForAddTask',
        'click .actions button': 'handleActions',
        'input #needle': 'handleSearch'
    },

    keydownForAddTask: function(e) {
        if(e.which === 13) {
            if (this.isFormDataValid()) {
                this.collection.add(this.getFormData());
                this.resetForm();
            } else {
                this.highlightField();
            }
        }
    },

    getFormData: function() {
        return {
            id: this.getUniqId(),
            title: this.$input.val(),
            completed: false,
            important: false
        };
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
        listView.render();
    },

    handleActions : function(e) {
        $('.actions button').removeClass('active');
        $(e.target).addClass('active');
        listView.render();
    },

    counterOfTasks: function() {
        $('.stats .item-completed').text(this.collection.completedTasksCounter());
        $('.stats .item-incompleted').text(this.collection.incompletedTasksCounter());
    }
});

var formView = new FormView({
    collection: tasks
});