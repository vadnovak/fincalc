import React from 'react';
import './CustomButton.scss'

const CustomButton = (props) => {
    const {children, className} = props
    return (
        <button {...props} className={className ? "custom__button " + className : "custom__button"}>
            {className === 'icon edit' ? <span className={className}/> : children}
        </button>
    )
}

export default CustomButton;