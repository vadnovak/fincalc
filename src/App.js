import React, {useState} from 'react';
import ListItem from "./components/ListItem/ListItem";
import './main.scss';
import Heading from "./components/Heading/Heading";
import CustomInput from "./components/UI/CustomInput/CustomInput";
import CustomButton from "./components/UI/CustomButton/CustomButton";
import FormAddItem from "./components/FormAddItem/FormAddItem";

function App() {
    const [items, setItems] = useState([
        {id: 1, date: "2022-02-20", title: "Депозит Моно", amount: "2000", currency: "$"},
        {id: 2, date: "2021-01-07", title: "Депозит Приват", amount: "1000", currency: "€"},
        {id: 3, date: "2022-04-10", title: "Готівка", amount: "130000", currency: "₴"},
    ])
    const createItem = (newItem) => {
        setItems([...items, newItem])
    }

    return (
        <div className="App">
            <FormAddItem items={items} create={createItem}></FormAddItem>
            <Heading title="Список активів" size={2}/>
            {
                items.map((item, index) =>
                    <ListItem item={item} number={index + 1} key={item.id}/>
                )
            }

        </div>
    );
}

export default App;
