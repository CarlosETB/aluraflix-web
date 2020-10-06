import styled from "styled-components";

interface PropsOption {
  color?: string;
}

export const Option = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 10px 0;
  padding: 0 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: PropsOption) => props.color};
`;

export const Button = styled.a`
  &:hover,
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
`;
