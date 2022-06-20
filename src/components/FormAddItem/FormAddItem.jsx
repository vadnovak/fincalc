import React, {useState} from 'react';
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import './FormAddItem.scss'
import CustomSelect from "../UI/CustomSelect/CustomSelect";

const FormAddItem = ({create}) => {
    const [newItem, setNewItem] = useState({date: '', title: '', amount: '', currency: ''})
    const options = [
        {
            label: '$ - USD',
            value: '$'
        },
        {
            label: '₴ - UAH',
            value: '₴'
        },
        {
            label: '€ - EUR',
            value: '€'
        },
    ]

    function addNewItem(e) {
        e.preventDefault();
        const addNewItem = {...newItem, id: Date.now()}
        create(addNewItem)
        setNewItem({date: '', title: '', amount: '', currency:  ''})
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

                <CustomSelect
                    placeholder='Валюта'
                    value={newItem.currency}
                    options={options}
                    onChange={e => setNewItem({...newItem, currency: e})}
                />
                <CustomInput
                    value={newItem.date}
                    onChange={e => setNewItem({...newItem, date: e.target.value})}
                    type="date"
                    placeholder="Дата"/>
            </div>

            <CustomButton>Додати</CustomButton>
        </form>
    )
}

export default FormAddItem;