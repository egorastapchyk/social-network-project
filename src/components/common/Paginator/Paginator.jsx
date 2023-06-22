import React, { useEffect, useState } from 'react';
import classes from './Paginator.module.css';
import classNames from 'classnames';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage]
  );

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(
    1
    // Math.ceil(currentPage / portionSize)
  );
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      <div className={classes.paginator}>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Preview
          </button>
        )}
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((page) => {
            return (
              <span
                className={classNames(
                  {
                    [classes.selectedPage]: currentPage === page,
                  },
                  classes.pageNumber
                )}
                key={page}
                onClick={(e) => {
                  onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
