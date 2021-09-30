import { Modal } from "../Modal";
import { css } from "@emotion/css";
import { Field, Formik, FormikProps } from "formik";
import { Code } from "../Code";
import { table_td, table_th } from "../../css/table";

const code = `const [open, setOpen] = useState(false);

<Modal
   isOpen={isOpen}
   onClose={() =>setOpen(false)}
   type={"auto"}
 >
 {() => (
     <div>
       <h2>Hello world</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eget ipsum fringilla, ....</p>
     </div>
   );
 }}
</Modal>`;
export function RadioSection() {
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
          <div
            className={css`
              border: 1px solid rgb(226, 226, 226);
              border-radius: 0.4rem;
              padding: 1rem;
            `}
          >
            <h2>Modal</h2>
            <Modal
              isOpen={props.values.isOpen}
              onClose={() => props.setFieldValue("isOpen", false)}
              type={props.values.size}
            >
              {() => {
                return (
                  <div>
                    <h2>Hello world</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eget ipsum fringilla, bibendum diam vel,
                      luctus orci. Pellentesque ultricies aliquam blandit. Cras
                      condimentum consequat est sed suscipit. Nunc neque felis,
                      pretium sit amet arcu ac, elementum congue augue.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Mauris fringilla eros
                      massa, nec vulputate urna maximus pulvinar. Cras commodo
                      ipsum non lacinia elementum. Fusce maximus fermentum
                      facilisis.
                    </p>
                  </div>
                );
              }}
            </Modal>
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
                  <label htmlFor="isOpen">&nbsp;Open</label>
                </div>
                <br />
                <span
                  className={css`
                    font-weight: bold;
                  `}
                >
                  Size
                </span>
                <div role="group" aria-labelledby="checkbox-group">
                  <label style={{ marginRight: 12 }}>
                    <Field type="radio" name="size" value="default" />
                    &nbsp;default
                  </label>
                  <label style={{ marginRight: 12 }}>
                    <Field type="radio" name="size" value="auto" />
                    &nbsp;auto
                  </label>
                  <label style={{ marginRight: 12 }}>
                    <Field type="radio" name="size" value="full" />
                    &nbsp;full
                  </label>
                </div>
              </div>
            </div>
            <br />

            <h3>Modal Props</h3>

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
                  <td className={table_td}>isOpen</td>
                  <td className={table_td}>boolean</td>
                  <td className={table_td}>Listen modal open close</td>
                </tr>
                <tr className="da">
                  <td className={table_td}>size</td>
                  <td className={table_td}>"auto" | "full" | "default"</td>
                  <td className={table_td}>Modal size</td>
                </tr>
              </tbody>
              <tbody className="">
                <tr className="da">
                  <td className={table_td}>onClose</td>
                  <td className={table_td}>function</td>
                  <td className={table_td}>function for modal close</td>
                </tr>
                <tr className="da">
                  <td className={table_td}>children</td>
                  <td className={table_td}>"ReactElement</td>
                  <td className={table_td}>render react component</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Formik>
  );
}
