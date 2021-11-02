import { css } from "@emotion/css";
import { ModalSection } from "../components/sections/ModalSection";
import { RadioSection } from "../components/sections/RadioSection";
import { PaginationSection } from "../components/sections/PaginationSection";
import { EmptyViewSection } from "../components/sections/EmptyViewSection";
import { PopoverSection } from "../components/sections/PopoverSection";

function Page() {
  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow mb-8">
        <h1 className=" text-center text-3xl font-bold p-4">
          React Components for Dummies
        </h1>
      </div>

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
        <div className="fixed left-0">
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
            <li>
              <a href="#popover-section">Popover</a>
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
          <br />
          <PopoverSection />
        </div>
      </div>
    </div>
  );
}
export default Page;
