import { css } from "@emotion/css";
import { Code } from "../Code";
import { table_td, table_th } from "../../css/table";

import EmptyView from "../EmptyView";

const code = `


<EmptyView message="Write somthing ...." />



`;
export function EmptyViewSection() {
  return (
    <div id="empty-section">
      <div
        className={css`
          border: 1px solid rgb(226, 226, 226);
          border-radius: 0.4rem;
          padding: 1rem;
        `}
      >
        <h2>Empty View</h2>
        <div
          className={css`
            background-color: rgb(238, 238, 238);
            padding: 12px;
            margin-bottom: 12px;
          `}
        >
          <EmptyView message="Write somthing ...." />
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
            `}
          >
            <Code code={code} />
          </div>
        </div>
        <br />

        <h3>Props</h3>

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
              <td className={table_td}>message</td>
              <td className={table_td}>string</td>
              <td className={table_td}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
