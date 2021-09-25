import Portal from "@reach/portal";
import { FiX } from "react-icons/fi";
import styled from "@emotion/styled";

import { css, cx } from "@emotion/css";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;
const modalContainerDefault = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const modalContainerAuto = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  margin: 1rem;
  & > [aria-label="Close"] {
    background: transparent;
    border: none;
    font-weight: bold;
    position: absolute;
    right: 0;
    top: 0;
    padding: 1rem;
  }
`;

export function Modal({
  isOpen,
  onClose,
  type = "default",
}: {
  isOpen: boolean;
  onClose: () => void;
  type?: "default" | "auto" | "full";
}) {
  if (isOpen)
    return (
      <Portal>
        <ModalContainer>
          <div
            className={cx(
              { [modalContainerDefault]: type === "default" },
              { [modalContainerAuto]: type === "auto" }
            )}
          >
            <ContentContainer>
              <button aria-label="Close" onClick={onClose}>
                <FiX size={20} />
              </button>

              <div>
                <p>
                  Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                  ornare faucibus ex, non facilisis nisl. Maecenas aliquet
                  mauris ut tempus.
                </p>
              </div>

              <section>body</section>
            </ContentContainer>
          </div>
        </ModalContainer>
      </Portal>
    );
  else return null;
}
