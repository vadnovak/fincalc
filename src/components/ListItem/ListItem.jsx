import React from 'react';
import './ListItem.scss'
import CustomButton from "../UI/CustomButton/CustomButton";

const ListItem = (props) => {
    const {date, title, amount, currency} = props.item;
    return (
        <div className="list__item">
            {/*<div className="list__item_left">*/}
            {/*    <p>Номер по порядку {id}</p>*/}
            {/*    <p>Дата {date}</p>*/}
            {/*    <p>Назва рахунку <strong>{title}</strong></p>*/}
            {/*    <p>Сума {amount}</p>*/}
            {/*    <p>Валюта {currency}</p>*/}
            {/*</div>*/}
            <div className="list__item_left">
                    <p className="list__item_id">{props.number}</p>
                    <p className="list__item_title">{title}</p>
                    <p className="list__item_amount">{amount} <strong>{currency}</strong></p>
                    <p className="list__item_date">{date}</p>
            </div>
            <div className="list__item_button">
                <CustomButton className={'icon edit'}/>
                <CustomButton onClick={() => props.remove(props.item)}>del</CustomButton>
            </div>
        </div>
    );
};

export default ListItem;