import React from 'react';

class Task extends React.Component {
    render() {
        const {task, onImportant, onCompleted, onRemove} = this.props;
        const completed = task.completed ? 'completed' : '';
        const important = task.important ? 'important' : '';

        return (
            <div data-id={task.id} className={`item ${completed} ${important}`} >
                <span className="title" onDoubleClick={onCompleted}>{task.title}</span>
                <div>
                    <button className="delete" onClick={onRemove}>&#10060;</button>
                    <button className="important" onClick={onImportant}>&#128276;</button>
                </div>
            </div>
        );
    }
}

export default Task;