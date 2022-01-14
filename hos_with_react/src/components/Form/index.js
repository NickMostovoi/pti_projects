import React from 'react';

export const AddForm = ({onSave, handleChange}) => {
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

    return (
        <form className="form">
            {
                inputs.map((input, idx) => {
                    return <input
                        key={idx}
                        name={input.name}
                        type="text"
                        placeholder={input.placeholder}
                        onChange={handleChange}
                    />;
                })
            }
            <button type="button" className="saveButton" onClick={onSave}>Сохранить</button>
        </form>
    );
};

export const EditForm = ({handleChange, whores, activeWhoreId, onRemove, onUpdate}) => {
    return (
        <form className="form">
            {
                whores.map((whore, idx) => {
                    return whore.id === activeWhoreId
                        ? <div key={whore.id}>
                            <input name="name" type="text" defaultValue={whore.name} onChange={handleChange} placeholder="Имя" />
                            <input name="surname" type="text" defaultValue={whore.surname} onChange={handleChange} placeholder="Фамилия" />
                            <input name="pseudonym" type="text" defaultValue={whore.pseudonym} onChange={handleChange} placeholder="Псевдоним" />
                            <input name="age" type="text" defaultValue={whore.age} onChange={handleChange} placeholder="Возраст" />
                            <input name="price" type="text" defaultValue={whore.price} onChange={handleChange} placeholder="Цена" />
                        </div>
                        : null;
                })
            }
            <button type="button" className="deleteButton" onClick={onRemove}>Удалить</button>
            <button type="button" className="updateButton" onClick={onUpdate}>Обновить</button>
        </form>
    );
};
