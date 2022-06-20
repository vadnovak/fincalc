import React from 'react';
import './CustomSelect.scss'

const CustomSelect = ({options, placeholder, value, onChange}) => {
    return (
        <div className="custom__select">
            <select value={value}
                    onChange={event => onChange(event.target.value)}
                    >
                <option value="" disabled hidden>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option
                        className="custom__select_option"
                        value={option.value}
                        key={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;