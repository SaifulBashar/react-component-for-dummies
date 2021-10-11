import { css } from "@emotion/css";
import { Code } from "../Code";
import { table_td, table_th } from "../../css/table";
import { Radio } from "../Radio";

const code = `
<Radio
  value={value}
  onChange={e => setValue(e.currentTarget.value)}
  name="number"
>
  default
</Radio>

`;
export function RadioSection() {
  return (
    <div id="radio-section">
      <div
        className={css`
          border: 1px solid rgb(226, 226, 226);
          border-radius: 0.4rem;
          padding: 1rem;
        `}
      >
        <h2>Radio</h2>
        <div
          className={css`
            background-color: rgb(238, 238, 238);
            padding: 12px;
            margin-bottom: 12px;
          `}
        >
          <Radio name="name">John</Radio>
          <Radio name="name">Joni</Radio>
          <Radio name="name">Rokan</Radio>
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

        <h3>Radio Props</h3>

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
              <td className={table_td}>name</td>
              <td className={table_td}>string</td>
              <td className={table_td}>
                The name attribute specifies the name of an input element.
              </td>
            </tr>
            <tr className="da">
              <td className={table_td}>onChange</td>
              <td className={table_td}>function</td>
              <td className={table_td}>
                Handler for change events on trigger element.
              </td>
            </tr>
            <tr className="da">
              <td className={table_td}>value</td>
              <td className={table_td}>string</td>
              <td className={table_td}>
                Passed to the input element value attribute
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
