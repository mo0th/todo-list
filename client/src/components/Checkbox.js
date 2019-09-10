import React from 'react';

const Checkbox = ({ label, id, onChange, checked }) => {
    return (
        <div className="Checkbox">
            <input
                type="checkbox"
                id={id}
                onChange={e => onChange(e)}
                checked={checked}
            />
            <label htmlFor={id}>
                <span className="Checkbox__btn"></span>
                <span className="Checkbox__text">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
