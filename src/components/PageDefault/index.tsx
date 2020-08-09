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
  return (
    <>
      <Header />
      <Main noPadding={props.noPadding}>{props.children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
