import React from "react";

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="paginationSettings">
        <button
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
          className="pagination_button"
        >
          -
        </button>
        <button
          onClick={() => {
            if (currentPage < lastPage) {
              paginate(currentPage + 1);
            }
          }}
          className="pagination_button"
        >
          +
        </button>
      </div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <div
              onClick={() => {
                paginate(number);
              }}
              className={
                currentPage === number ? " page-link active" : "page-link"
              }
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
