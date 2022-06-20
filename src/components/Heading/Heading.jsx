import React from 'react';
import './Heading.scss'

const Heading = ({title, size, className}) => {
    return (
        <div className={className ? "heading__container " + className : "heading__container"}>
            {React.createElement(`h${size}`, null, `${title}`)}
        </div>
    );
};

export default Heading;