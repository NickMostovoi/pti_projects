import React from 'react';

const Form = ({onSave, onRemove, onUpdate, handleChange, whore}) => {
    const inputs = [
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

    console.log(whore);

    return (
        <form className="form" key={whore.id+'!!!!!!!bullshit'}>
            {
                inputs.map((input, idx) => {
                    return <input
                        key={idx}
                        name={input.name}
                        type="text"
                        placeholder={input.placeholder}
                        onChange={handleChange}
                        defaultValue={whore ? whore[input.name] : ''}
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
};

export default Form;