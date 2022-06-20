import React from 'react';
import './Pagination.scss'
import CustomButton from "../CustomButton/CustomButton";
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, changePage, page}) => {
    const pagesArray = usePagination(totalPages);
    return (
        <div className="pagination">
            {pagesArray &&
            pagesArray.map(p =>
                <CustomButton
                    onClick={() => changePage(p)}
                    className={p === page ? 'page__current' : ''}
                    key={p}>
                    {p}</CustomButton>)}
        </div>
    );
};

export default Pagination;