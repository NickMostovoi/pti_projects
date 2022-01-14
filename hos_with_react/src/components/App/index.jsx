import React from 'react';

import Whore from '../Whore';
import Form from '../Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        window.aaa = this;
    }

    state = {
        whores: JSON.parse(localStorage.getItem('whores')) || [],
        showAddForm: false,
        activeWhoreId: null
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
            activeWhoreId: null
        }));
    };

    onRemove = () => {
        this.setState((state) => ({
            whores: state.whores.filter((whore) => whore.id !== this.state.activeWhoreId),
            activeWhoreId: null
        }));
    };

    onClickAdd = () => {
        this.setState({
            showAddForm: true,
            activeWhoreId: null
        });
    };

    clickOnWhore = (e) => {
        this.setState({
            showAddForm: false,
            activeWhoreId: e.target.dataset.id
        });
    };

    render() {
        localStorage.setItem('whores', JSON.stringify(this.state.whores));
        const {whores, activeWhoreId, showAddForm, showEditForm} = this.state;
        const {onUpdate, onRemove, onClickAdd, clickOnWhore, handleChange, onSave} = this;
        const whore = whores.find((whore) => whore.id === activeWhoreId);

        return (
            <div className="mainContainer">
                <div className="columnLeft" id="listView">
                    <button type="button" className="addButton" onClick={onClickAdd}>Добавить</button>
                    <div className="whoreList">
                        {
                            whores.length
                                ? whores.map((whore, idx) => {
                                    return <Whore {...whore} key={idx} clickOnWhore={clickOnWhore} />;
                                })
                                : <div>Шлюх пока нет</div>
                        }
                    </div>
                </div>

                {(showAddForm || activeWhoreId) &&
                    <div className="columnRight" id="InfomationForm">
                        <Form whore={whore} onSave={onSave} onRemove={onRemove} onUpdate={onUpdate} handleChange={handleChange} />
                    </div>
                }
            </div>
        );
    }
}

export default App;
