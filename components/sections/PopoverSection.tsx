import { css } from "@emotion/css";
import { Code } from "../Code";
import { table_td, table_th } from "../../css/table";

import { Popover } from "../Popover";

const code = `
<Popover
    placement="bottom-start"
    renderReference={(ref, toggle) => (
        <button
          onClick={() => toggle()}
          ref={ref}
        >
         Trigger
        </button>
    )}
    renderPopover={(toggle) => {
        return (
            <div
            style={{
                background: "gray",
                height: "100px",
                width: "200px",
                display: "flex",
                alignItems: "center"
            }}
            >
            <p
                style={{
                color: "white",
                padding: "12px"
                }}
            >
                Content
            </p>
            <button onClick={toggle}>close</button>
            </div>
        );
    }}
/>

`;
export function PopoverSection() {
  return (
    <div id="popover-section">
      <div
        className={css`
          border: 1px solid rgb(226, 226, 226);
          border-radius: 0.4rem;
          padding: 1rem;
        `}
      >
        <h2>Popover</h2>
        <div
          className={css`
            background-color: rgb(238, 238, 238);
            padding: 12px;
            margin-bottom: 12px;
          `}
        >
          <Popover
            placement="bottom-start"
            renderReference={(ref, toggle) => (
              <button
                onClick={() => {
                  toggle();
                }}
                ref={ref}
              >
                Trigger
              </button>
            )}
            renderPopover={(toggle) => {
              return (
                <div
                  className={css`
                    background: gray;
                    height: 100px;
                    width: 200px;
                    display: flex;
                    align-items: center;
                  `}
                >
                  <p
                    className={css`
                      color: white;
                      padding: 12px;
                    `}
                  >
                    Content
                  </p>
                  <button onClick={toggle}>close</button>
                </div>
              );
            }}
          />
        </div>
        <div
          className={css`
            display: flex;
            width: 100%;
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

        <h3>Popover Props</h3>

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
              <td className={table_td}>placement</td>
              <td className={table_td}>string</td>
              <td className={table_td}>
                "auto" | "auto-start" | "auto-end" | "top" | "top-start" |
                "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" |
                "right-start" | "right-end" | "left" | "left-start" | "left-end
              </td>
            </tr>
            <tr className="da">
              <td className={table_td}>renderReference</td>
              <td className={table_td}>react node</td>
              <td className={table_td}>
                The content that will trigger the popover.
              </td>
            </tr>
            <tr className="da">
              <td className={table_td}>renderPopover</td>
              <td className={table_td}>react node</td>
              <td className={table_td}>content of popover</td>
            </tr>
            <tr className="da">
              <td className={table_td}>portal</td>
              <td className={table_td}>boolean</td>
              <td className={table_td}>open content outside of root div</td>
            </tr>
            <tr className="da">
              <td className={table_td}>zIndex</td>
              <td className={table_td}>number</td>
              <td className={table_td}>by default it is 60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
