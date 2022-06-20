import React, {useEffect, useMemo, useState} from 'react';
import './main.scss';
import FormAddItem from "./components/FormAddItem/FormAddItem";
import ItemsList from "./components/ItemsList/ItemsList";
import ItemFilter from "./components/ItemFilter/ItemFilter";
import CustomModal from "./components/UI/CustomModal/CustomModal";
import CustomButton from "./components/UI/CustomButton/CustomButton";
import {useItems} from "./hooks/useItems";
import itemService from "./API/itemService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import Heading from "./components/Heading/Heading";
import {getPageCount} from "./utils/pages";
import {usePagination} from "./hooks/usePagination";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const sortedAndSearchedItems = useItems(items, filter.sort, filter.query)



    const [fetchItems, isItemsLoading, itemError] = useFetching(async (limit, page) => {
        const response = await itemService.getAll(limit, page)
        setItems(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })

    const createItem = (newItem) => {
        setItems([...items, newItem])
        setVisible(false)
    }

    const removeItem = (item) => {
        setItems(items.filter(i => i.id !== item.id))
    }

    useEffect(() => {
        fetchItems(limit, page)
    }, [])

    const changePage = (page) => {
        setPage(page)
        fetchItems(limit, page)
    }
    return (
        <div className="App">
            <CustomButton style={{marginBottom: '20px'}} onClick={() => setVisible(true)}>Додати запис</CustomButton>
            <CustomModal visible={visible} setVisible={setVisible}>
                <FormAddItem items={items} create={createItem}/>
            </CustomModal>
            <ItemFilter filter={filter} setFilter={setFilter}/>
            <ItemsList remove={removeItem} items={sortedAndSearchedItems} title={"Мої активи"}/>
            {isItemsLoading && <Loader/>}
            {itemError && <Heading title={"Виникла помилка: " + itemError} size={4} className={'error'}/>}
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default App;
