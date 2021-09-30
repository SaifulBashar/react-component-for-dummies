import styled from "@emotion/styled";
import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";

const CheckboxContainer = styled.label`
  display: inline-flex;
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 16px;
    height: 16px;

    border: 2px solid #999;
    transition: 0.2s all linear;

    position: relative;
    top: 4px;
  }

  input:checked {
    border: 6px solid black;
  }
  span {
    padding-right: 8px;
    padding-left: 8px;
    margin-top: 2px;
  }
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: ReactNode;
}
export const Radio: FunctionComponent<InputProps> = ({
  name,

  children,
  ...rest
}) => {
  return (
    <CheckboxContainer>
      <input type="radio" name={name} {...rest} />
      <span>{children}</span>
    </CheckboxContainer>
  );
};
