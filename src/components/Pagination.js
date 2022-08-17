import React from "react";

const Pagination = ({
  currentPage,
  quotesPerPage,
  setQuotesPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / quotesPerPage);
  // for (let i = 1; i <= lastPage; i++) {
  //   pageNumbers.push(i);
  // }
  const handleChange = (event) => {
    setQuotesPerPage(event.target.value);
  };
  //
  function createPages(pageNumbers, totalPosts, currentPage) {
    if (totalPosts > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pageNumbers.push(i);
          if (i === totalPosts) break;
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pageNumbers.push(i);
          if (i === totalPosts) break;
        }
      }
    } else {
      for (let i = 1; i <= totalPosts; i++) {
        pageNumbers.push(i);
      }
    }
  }
  createPages(pageNumbers, totalPosts, currentPage);
  //
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
        <div className="paginationDropdown">
          <label>Quotes on page:</label>
          <select
            className="dropdownList"
            name="quotes"
            value={quotesPerPage}
            onChange={handleChange}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
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
