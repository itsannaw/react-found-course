import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import classes from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
     <div className={classes.wrapper}>
            {pagesArray.map(p =>
              <div 
              onClick={() => changePage(p)}
              key={p} 
              className={page === p ? 'page page__current' : 'page'}>
                {p}     
              </div>
            )}
          </div>
    );
};

export default Pagination;