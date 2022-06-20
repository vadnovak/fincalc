import React from 'react';
import Heading from "../Heading/Heading";
import ListItem from "../ListItem/ListItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ItemsList = ({items, title, remove}) => {
    if (!items.length) {
        return <Heading title={"Записів не знайдено"} size={2}/>
    }
    return (
        <>
            <Heading title={title} size={2}/>
            <TransitionGroup>
                {items.map((item, index) =>
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames='item'
                    >
                        <ListItem item={item} number={index + 1} remove={remove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </>
    );
};

export default ItemsList;