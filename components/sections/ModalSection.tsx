import { Modal } from "../Modal";
import { useState } from "react";
import { css } from "@emotion/css";
// import { Field, Form, Formik, FormikProps } from "formik";
import { Code } from "../Code";

const code = `const [open, setOpen] = useState(false);

<Modal 
  isOpen={open} 
  onClose={() => setOpen(false)} 
/>`;
export function ModalSection() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>Modal</h2>
      <div
        className={css`
          border: 2px solid rgb(226, 226, 226);
          border-radius: 0.4rem;
          padding: 1rem;
        `}
      >
        <button onClick={() => setOpen(true)}>open modal</button>
        <Modal isOpen={open} onClose={() => setOpen(false)} />
        <div
          className={css`
            display: flex;
          `}
        >
          <div
            className={css`
              min-width: 400px;
              min-height: 200px;
              border-radius: 4px;
            `}
          >
            <Code code={code} />
          </div>
          <div
            className={css`
              padding-left: 12px;
            `}
          ></div>
        </div>
      </div>
    </div>
  );
}
