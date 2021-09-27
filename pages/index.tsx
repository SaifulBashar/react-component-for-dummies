import { css } from "@emotion/css";
import { ModalSection } from "../components/sections/ModalSection";

function Page() {
  return (
    <>
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h1
          className={css`
            font-family: "Press Start 2P", cursive;
            font-size: 2rem;
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
              `}
            >
              <li>Modal</li>
            </ol>
          </div>
          <ModalSection />
        </div>
        {/* <Radio name="dd">Chexck</Radio> */}
      </div>
    </>
  );
}
export default Page;
