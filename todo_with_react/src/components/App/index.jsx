import React from 'react';

import Task from '../Task';

class App extends React.Component {
    state = {
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        activeTab: 'all',
        searchingText: '',
        id: '',
        title: '',
        completed: false,
        important: false
    };

    buttons = [
        {title: 'Все', filter: 'all'},
        {title: 'Незавершенные', filter: 'incompleted'},
        {title: 'Завершенные', filter: 'completed'}
    ];

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleChangeOnSearch = (e) => {
        this.setState({
            searchingText: e.target.value
        });
    };

    onSave = (e) => {
        if(e.charCode === 13){
            this.setState((state) => ({
                tasks: [
                    ...state.tasks,
                    {
                        id: '_' + Math.random().toString(36).substr(2, 9),
                        title: this.state.title,
                        completed: this.state.completed,
                        important: this.state.important
                    }
                ],
                title: ''
            }));
        }
    };

    onImportant = (e) => {
        let id = e.target.closest('.item').dataset.id;

        this.setState((state) => ({
            tasks: state.tasks.map((task) => task.id === id ? {
                ...task,
                important: !task.important
            } : task ),
        }));
    };

    onCompleted = (e) => {
        let id = e.target.closest('.item').dataset.id;

        this.setState((state) => ({
            tasks: state.tasks.map((task) => task.id === id ? {
                ...task,
                completed: !task.completed
            } : task ),
        }));
    };

    onRemove = (e) => {
        let id = e.target.closest('.item').dataset.id;

        this.setState((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        }));
    };

    completedCounter = () => {
        let counter = 0;
        let completed = this.state.tasks.filter((task) => task.completed ? counter + 1 : null);
        return completed.length;
    };

    inCompletedCounter = () => {
        let counter = 0;
        let inCompleted = this.state.tasks.filter((task) => !task.completed ? counter + 1 : null);
        return inCompleted.length;
    };

    handleActions = (e) => {
        this.setState({
            activeTab: e.target.dataset.filter
        });
    };

    getFilteredTasks = () => {
        let searchingText = this.state.searchingText;
        let filter = this.state.activeTab;

        return this.state.tasks
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
    };

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    };

    render() {
        const {handleChange, onSave, onImportant, onCompleted, onRemove, completedCounter, inCompletedCounter, handleActions, handleChangeOnSearch, buttons, getFilteredTasks} = this;
        const {tasks, title, activeTab, searchingText} = this.state;

        return (
            <div className="app">
                <div className="heading">
                    <h1>Список дел</h1>
                    <h4 className="stats">
                        Осталось <span className="item-incompleted">{inCompletedCounter()}</span>,
                        готово <span className="item-completed">{completedCounter()}</span>
                    </h4>
                </div>

                <div className="filters">
                    <input type="text" placeholder="Что будем искать?" id="needle" value={searchingText} onChange={handleChangeOnSearch} />

                    <div className="actions" onClick={handleActions}>
                        {
                            buttons.map((button) => {
                                const className = activeTab === button.filter ? 'active' : null;
                                return <button key={button.filter} className={className} data-filter={button.filter}>{button.title}</button>;
                            })
                        }
                    </div>
                </div>

                <div className="source">
                    <input className="title" type="text" placeholder="Что нужно сделать?" value={title} onChange={handleChange} onKeyPress={onSave} />
                </div>

                <div className="items" id="tasks">
                    {
                        tasks.length
                            ? getFilteredTasks().map((task, idx) => {
                                return <Task key={task.id} task={task} onImportant={onImportant} onCompleted={onCompleted} onRemove={onRemove} />;
                            })
                            : <div>Дел пока нет</div>
                    }
                </div>
            </div>
        );
    }
}

export default App;