import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        window.bbb = this;
    }

    inputs = [
        {
            name: 'name',
            placeholder: 'Имя'
        },
        {
            name: 'surname',
            placeholder: 'Фамилия'
        },
        {
            name: 'pseudonym',
            placeholder: 'Псевдоним'
        },
        {
            name: 'age',
            placeholder: 'Возраст'
        },
        {
            name: 'price',
            placeholder: 'Цена'
        }
    ];

    render() {
        const {onSave, onUpdate, onRemove, handleChange, whore, stateApp} = this.props;

        return (
            <form className="form" key={whore && whore.id+'!!!!!!!bullshit'}>
                {
                    this.inputs.map((input, idx) => {
                        return <input
                            key={idx}
                            name={input.name}
                            type="text"
                            placeholder={input.placeholder}
                            onChange={handleChange}
                            value={stateApp[input.name]}
                        />;
                    })
                }

                {
                    whore ?
                        <>
                            <button type="button" className="deleteButton" onClick={onRemove}>Удалить</button>
                            <button type="button" className="updateButton" onClick={onUpdate}>Обновить</button>
                        </> :
                        <button type="button" className="saveButton" onClick={onSave}>Сохранить</button>
                }
            </form>
        );
    }
};

export default Form;