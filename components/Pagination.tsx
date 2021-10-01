import React from "react";
import ReactPaginate from "react-paginate";
import styled from "@emotion/styled";
const PaginateContianer = styled.span`
  .pagination {
    padding: 0 !important;
  }
  .pagination ul {
    display: inline-block;
  }

  .pagination li {
    font-size: 12px;
    display: inline-block;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 5px;
    background: #fff;
    margin-right: 5px;
    border-radius: 4px;
    a {
      padding: 8px;
    }
  }
  .pagination li a {
    padding: 8px;
  }
  .pagination--active {
    color: white;
    background-color: black !important;
  }
`;
export function Paginate({
  pageCount,
  onPageChange,
  forcePage,

  pageRangeDisplayed,
}: {
  pageCount: number;
  forcePage: number;
  pageRangeDisplayed?: number;
  onPageChange: (selected: number) => void;
}) {
  return (
    <PaginateContianer>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={pageRangeDisplayed || 5}
        onPageChange={(data) => onPageChange(data.selected)}
        containerClassName={"pagination"}
        forcePage={forcePage}
        activeClassName={"pagination--active"}
      />
    </PaginateContianer>
  );
}
