import styled, { css } from "styled-components";

export const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

export const Label = styled.label``;

export const LabelText = styled.span`
  color: var(--grayMedium);
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
`;

interface InputProps {
  value: any[];
}

const InputStyles = css`
  background: var(--background);
  color: var(--grayLight);
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--background);
  padding: 16px 16px;
  margin-bottom: 45px;
  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + ${LabelText} {
    transform: scale(0.6) translateY(-10px);
  }
`;

export const Input = styled.input<InputProps>`
  ${InputStyles}
  ${({ value }) => {
    const hasValue = value !== "";
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export const TextArea = styled.textarea<InputProps>`
  ${InputStyles}
  ${({ value }) => {
    const hasValue = value !== "";
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;
