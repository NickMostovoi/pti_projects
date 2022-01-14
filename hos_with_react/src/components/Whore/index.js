import React from 'react';

import {AddForm, EditForm} from '../Form';

class Whore extends React.Component {
    state = {
        whores: JSON.parse(localStorage.getItem('whores')) || [],
        showAddForm: false,
        showEditForm: false,
        activeWhoreId: 'id'
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSave = () => {
        this.setState((state) => ({
            whores: [
                ...state.whores,
                {
                    id: '_' + Math.random().toString(36).substr(2, 9),
                    name: this.state.name,
                    surname: this.state.surname,
                    pseudonym: this.state.pseudonym,
                    age: this.state.age,
                    price: this.state.price
                }
            ],
            showAddForm: false
        }));
    };

    onUpdate = () => {
        this.setState((state) => ({
            whores: state.whores.map((whore) => whore.id === this.state.activeWhoreId ? {
                ...whore,
                id: this.state.activeWhoreId,
                name: this.state.name,
                surname: this.state.surname,
                pseudonym: this.state.pseudonym,
                age: this.state.age,
                price: this.state.price
            } : whore ),
            showEditForm: false
        }));
    };

    onRemove = () => {
        this.setState((state) => ({
            whores: state.whores.filter((whore) => whore.id !== this.state.activeWhoreId),
            showEditForm: false
        }));
    };

    onClickAdd = () => {
        this.setState({
            showAddForm: true,
            showEditForm: false,
        });
    };

    clickOnWhore = (e) => {
        this.setState({
            showEditForm: true,
            showAddForm: false,
            activeWhoreId: e.target.dataset.id
        });
    };

    render() {
        localStorage.setItem('whores', JSON.stringify(this.state.whores));
        const {whores, activeWhoreId, showAddForm, showEditForm} = this.state;
        const {onUpdate, onRemove, onClickAdd, clickOnWhore, handleChange, onSave} = this;

        return (
            <>
                <div className="columnLeft" id="listView">
                    <button type="button" className="addButton" onClick={onClickAdd}>Добавить</button>
                    <div className="whoreList">
                    {
                        whores.length
                        ? whores.map((whore, idx) => {
                            return <div
                                key={whore.id}
                                onClick={clickOnWhore}
                                className="whore"
                                data-id={whore.id}
                            >
                                {whore.pseudonym} {whore.age}, ${whore.price}
                            </div>;
                          })
                        : <div>Шлюх пока нет</div>
                    }
                    </div>
                </div>

                {showAddForm &&
                    <div className="columnRight" id="InfomationForm">
                        <AddForm onSave={onSave} handleChange={handleChange} />
                    </div>
                }

                {showEditForm &&
                    <div className="columnRight" id="InfomationForm">
                        <EditForm {...this.state} onRemove={onRemove} onUpdate={onUpdate} handleChange={handleChange} />
                    </div>
                }
            </>
        )
    }
}

export default Whore;
