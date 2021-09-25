import { Modal } from "../components/Modal";
import { useState } from "react";
import { css } from "@emotion/css";

function Page() {
  const [open, setOpen] = useState(false);
  return (
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
          margin: 1rem;
          border-radius: 0.5rem;
          max-width: 900px;
          width: 100%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          background: white;
        `}
      >
        <div>
          <button onClick={() => setOpen(true)}>open modal</button>
          <Modal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
export default Page;
