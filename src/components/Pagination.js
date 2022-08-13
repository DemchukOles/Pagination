import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [active, setActive] = useState(1);
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a
            onClick={() => {
              setActive(number);
              paginate(number);
            }}
            href="!#"
            className={active === number ? " page-link active" : "page-link"}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
