import React from 'react';

export default ({id, pseudonym, age, price, clickOnWhore}) => {
    return (
        <div onClick={clickOnWhore} className="whore" data-id={id}>
            {pseudonym} {age}, ${price}
        </div>
    );
};
