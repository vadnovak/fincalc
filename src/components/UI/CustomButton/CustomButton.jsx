import React from 'react';
import './CustomButton.scss'

const CustomButton = ({children, iconClass}) => {
    return (
        <button className={iconClass ? 'custom__button icon' : 'custom__button'}>
            { iconClass === undefined ? children :
                <span className={iconClass}/>
            }
        </button>
    )
}

export default CustomButton;