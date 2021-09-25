import Portal from "@reach/portal";
import { FiX } from "react-icons/fi";
import styled from "@emotion/styled";

import { css, cx } from "@emotion/css";
import { FunctionComponent, ReactNode } from "react";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: block;
  padding: 12px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.4rem;
`;
const modalContainerDefault = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const modalContainerFull = css`
  display: flex;
  align-items: center;
  height: 100%;
`;

const modalContainerAuto = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div<{ type: "auto" | "default" | "full" }>`
  background: white;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  margin: 1rem;
  height: 100%;
  width: ${(props) =>
    props.type === "default" ? "500px" : props.type === "full" ? "100%" : ""};
`;
type Props = {
  isOpen: boolean;
  onClose: () => void;
  type?: "default" | "auto" | "full";
  children: () => ReactNode;
};
export const Modal: FunctionComponent<Props> = ({
  isOpen,
  onClose,
  type = "default",
  children,
}) => {
  if (isOpen)
    return (
      <Portal>
        <ModalContainer>
          <div
            className={cx({
              [modalContainerDefault]: type === "default",
              [modalContainerAuto]: type === "auto",
              [modalContainerFull]: type === "full",
            })}
          >
            <ContentContainer type={type}>
              <CloseButton aria-label="Close" onClick={onClose}>
                <FiX size={20} />
              </CloseButton>
              <div>{children()}</div>
            </ContentContainer>
          </div>
        </ModalContainer>
      </Portal>
    );
  else return null;
};
