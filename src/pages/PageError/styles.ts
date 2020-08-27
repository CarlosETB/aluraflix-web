import styled from "styled-components";

// Components
import { Button as Btn } from "components/Button";

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 45px;
  font-weight: bold;
  font-style: normal;
  color: var(--white);
  letter-spacing: 1px;
`;

export const Text = styled.span`
  width: 60%;
  margin: 30px 0;
  font-size: 25px;
  text-align: center;
  font-weight: 500px;
  font-style: normal;
  color: var(--white);
`;

export const Button = styled(Btn)`
  color: var(--black);
  background-color: var(--white);
`;
