import React, { ReactNode } from "react";

// Components
import Header from "components/Header";
import Footer from "components/Footer";

// Private
import { Main } from "./styles";

interface LayoutProps {
  noPadding?: boolean;
  children?: ReactNode;
}

const PageDefault: React.FC<LayoutProps> = (props) => {
  const { noPadding, children } = props

  return (
    <>
      <Header />
      <Main noPadding={noPadding}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
