import styled from "styled-components";

interface Props {
  noPadding?: boolean;
}

export const Main = styled.main`
  flex: 1;
  min-height: 100vh;
  color: var(--white);
  padding-top: var(--bodyPaddingTop);
  background-color: var(--secondary);
  padding: ${(props: Props) => (props.noPadding ? 0 : "5%")};
  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;
