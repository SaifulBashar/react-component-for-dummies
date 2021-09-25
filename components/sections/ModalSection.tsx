import { Modal } from "../Modal";
import { css } from "@emotion/css";
import { Field, Formik, FormikProps } from "formik";
import { Code } from "../Code";

const code = `const [open, setOpen] = useState(false);

<Modal 
  isOpen={open} 
  onClose={() => setOpen(false)} 
  type={"default"}
/>`;
export function ModalSection() {
  return (
    <Formik
      initialValues={{ isOpen: false, size: "default" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<any>) => (
        <div>
          <h2>Modal</h2>
          <div
            className={css`
              border: 2px solid rgb(226, 226, 226);
              border-radius: 0.4rem;
              padding: 1rem;
            `}
          >
            <Modal
              isOpen={props.values.isOpen}
              onClose={() => props.setFieldValue("isOpen", false)}
              type={props.values.size}
            />
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
                  padding: 12px;
                `}
              >
                <div>
                  <Field name="isOpen" id="isOpen" type={"checkbox"} />
                  <label htmlFor="isOpen">Open</label>
                </div>
                <p>Size</p>
                <div role="group" aria-labelledby="checkbox-group">
                  <label>
                    <Field type="radio" name="size" value="default" />
                    default
                  </label>
                  <label>
                    <Field type="radio" name="size" value="auto" />
                    auto
                  </label>
                  <label>
                    <Field type="radio" name="size" value="full" />
                    full
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
