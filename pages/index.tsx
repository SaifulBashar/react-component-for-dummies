import { css } from "@emotion/css";
import { ModalSection } from "../components/sections/ModalSection";
import { RadioSection } from "../components/sections/RadioSection";
import { PaginationSection } from "../components/sections/PaginationSection";
import { EmptyViewSection } from "../components/sections/EmptyViewSection";

function Page() {
  return (
    <>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          background: linear-gradient(
            to top,
            #0f2027,
            #203a43,
            #2c5364
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `}
      >
        <h1
          className={css`
            font-family: "Press Start 2P", cursive;
            font-size: 2rem;
            color: wheat;
          `}
        >
          React Components for Dummies
        </h1>

        <div
          className={css`
            padding: 1rem;
            display: flex;
            border-radius: 0.5rem;
            max-width: 1100px;
            width: 100%;

            background: white;
          `}
        >
          <div
            className={css`
              padding-right: 12px;
              margin-right: 12px;
              min-width: 180px;
            `}
          >
            <h4>Components</h4>
            <ol
              className={css`
                list-style: none;
                margin: 0;
                padding: 0;
                width: 100%;
                li {
                  margin-top: 12px;
                  margin-bottom: 12px;
                }
              `}
            >
              <li>
                <a href="#modal-section">Modal</a>
              </li>
              <li>
                <a href="#radio-section">Radio</a>
              </li>{" "}
              <li>
                <a href="#pagination-section">Pagination</a>
              </li>
              <li>
                <a href="#empty-section">Empty View</a>
              </li>
            </ol>
          </div>
          <div>
            <ModalSection />
            <br />
            <RadioSection />
            <br />
            <PaginationSection />
            <br />
            <EmptyViewSection />
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
