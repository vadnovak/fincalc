import React, {useState} from 'react';
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import './FormAddItem.scss'

const FormAddItem = ({create}) => {
    const [newItem, setNewItem] = useState({date: '', title: '', amount: '', currency: '$'})

    function addNewItem(e) {
        e.preventDefault();
        const addNewItem = {...newItem, id: Date.now()}
        create(addNewItem)
        setNewItem({date: '', title: '', amount: '', currency: '$'})
    }

    return (
        <form onSubmit={addNewItem} className="form_wrapper">
            <div className="form_row">
                <CustomInput
                    value={newItem.title}
                    onChange={e => setNewItem({...newItem, title: e.target.value})}
                    type="text"
                    placeholder="Назва"
                />

            </div>

            <div className="form_row">
                <CustomInput
                    value={newItem.amount}
                    onChange={e => setNewItem({...newItem, amount: e.target.value})}
                    type="number"
                    placeholder="Сума"/>

                <CustomInput
                    value={newItem.date}
                    onChange={e => setNewItem({...newItem, date: e.target.value})}
                    type="date"
                    placeholder="Дата"
                />
                <CustomInput
                    value={newItem.currency}
                    onChange={e => setNewItem({...newItem, currency: e.target.value})}
                    type="text"
                    placeholder="Валюта"/>
            </div>

            <CustomButton>Додати</CustomButton>
        </form>
    );
};

export default FormAddItem;