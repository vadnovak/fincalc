import React from 'react';
import CustomSelect from "../UI/CustomSelect/CustomSelect";
import CustomInput from "../UI/CustomInput/CustomInput";

const ItemFilter = ({filter, setFilter}) => {
    const sortOptions = [
        {
            label: 'По назві',
            value: 'title'
        },
        {
            label: 'По даті',
            value: 'date'
        },
        {
            label: 'По валюті',
            value: 'currency'
        },
        {
            label: 'По сумі',
            value: 'amount'
        },
    ]
    return (
        <>
            <CustomSelect
                value={filter.sort}
                options={sortOptions}
                placeholder='Сортування'
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}/>
            <CustomInput
                placeholder='Пошук'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}/>
        </>
    );
};

export default ItemFilter;