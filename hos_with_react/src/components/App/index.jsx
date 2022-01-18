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
        showForm: false,
        activeWhoreId: null,
        name: '',
        surname: '',
        pseudonym: '',
        age: '',
        price: ''
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
            showForm: false
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
            showForm: true,
            activeWhoreId: null,
            name: '',
            surname: '',
            pseudonym: '',
            age: '',
            price: ''
        });
    };

    clickOnWhore = (e) => {
        const whore = this.state.whores.find((whore) => whore.id === e.target.dataset.id);

        this.setState({
            showForm: false,
            activeWhoreId: whore.id,
            name: whore.name,
            surname: whore.surname,
            pseudonym: whore.pseudonym,
            age: whore.age,
            price: whore.price
        });
    };

    componentDidUpdate() {
        localStorage.setItem('whores', JSON.stringify(this.state.whores));
    }

    render() {
        const {whores, activeWhoreId, showForm} = this.state;
        const {onSave, onUpdate, onRemove, onClickAdd, clickOnWhore, handleChange} = this;
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

                {(showForm || activeWhoreId) &&
                    <div className="columnRight" id="InfomationForm">
                        <Form stateApp={this.state} whore={whore} onSave={onSave} onRemove={onRemove} onUpdate={onUpdate} handleChange={handleChange} />
                    </div>
                }
            </div>
        );
    }
}

export default App;
