import React from 'react';
import './CustomModal.scss'

const CustomModal = ({children, visible, setVisible}) => {
    return (
        <div
            className={visible ? 'custom__modal active' : 'custom__modal'}
            onClick={() => setVisible(false)}>
            <div
                className='custom__modal__content'
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;