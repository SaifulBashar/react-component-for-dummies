import { Modal } from "../components/Modal";
import { useState } from "react";

function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpen(true)}>open modal</button>
        <Modal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
export default Page;
