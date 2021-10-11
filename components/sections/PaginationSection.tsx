import { css } from "@emotion/css";
import { Code } from "../Code";
import { table_td, table_th } from "../../css/table";

import { Paginate } from "../Pagination";

const code = `
<Paginate
   forcePage={0}
   onPageChange={(selected)=>console.log(selected)}
   pageCount={42 / 12}
/>

`;
export function PaginationSection() {
  return (
    <div id="pagination-section">
      <div
        className={css`
          border: 1px solid rgb(226, 226, 226);
          border-radius: 0.4rem;
          padding: 1rem;
        `}
      >
        <h2>Pagination</h2>
        <div
          className={css`
            background-color: rgb(238, 238, 238);
            padding: 12px;
            margin-bottom: 12px;
          `}
        >
          <Paginate
            forcePage={0}
            onPageChange={(selected) => {
              console.warn(selected);
            }}
            pageCount={120 / 12}
          />
        </div>
        <div
          className={css`
            display: flex;
          `}
        >
          <div
            className={css`
              min-height: 200px;
              border-radius: 4px;
              width: 100%;
            `}
          >
            <Code code={code} />
          </div>
        </div>
        <br />

        <h3>Pagination Props</h3>

        <table
          className={css`
            min-width: 100%;
            border-spacing: 0;
          `}
        >
          <thead className="">
            <tr className="">
              <th className={table_th}>Name</th>
              <th className={table_th}>Type</th>
              <th className={table_th}>Description</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="da">
              <td className={table_td}>forcePage</td>
              <td className={table_td}>number</td>
              <td className={table_td}>Select current page number</td>
            </tr>
            <tr className="da">
              <td className={table_td}>onPageChange</td>
              <td className={table_td}>function</td>
              <td className={table_td}>
                Handler for change events on trigger element.
              </td>
            </tr>
            <tr className="da">
              <td className={table_td}>pageCount</td>
              <td className={table_td}>number</td>
              <td className={table_td}>total number of element / limit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
