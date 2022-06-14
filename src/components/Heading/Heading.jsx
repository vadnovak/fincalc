import React from 'react';
import './Heading.scss'

const Heading = ({title, size}) => {
    return (
        <div className='heading__container'>
            {React.createElement(`h${size}`, null, `${title}`)}
        </div>
        );
};

export default Heading;