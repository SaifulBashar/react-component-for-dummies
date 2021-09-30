import styled from "@emotion/styled";
import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";

const CheckboxContainer = styled.div`
  display: inline-block;
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 16px;
    height: 16px;

    border: 2px solid #999;
    transition: 0.2s all linear;
    margin-right: 5px;

    position: relative;
    top: 4px;
  }

  input:checked {
    border: 6px solid black;
  }
  label {
    padding-right: 8px;
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
      <input type="radio" name={name} id={name} {...rest} />
      <label htmlFor={name}>{children}</label>
    </CheckboxContainer>
  );
};
