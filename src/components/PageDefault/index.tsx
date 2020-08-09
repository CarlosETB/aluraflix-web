import React, { ReactNode } from "react";

// Components
import Header from "components/Header";
import Footer from "components/Footer";

// Private
import "./styles.css";

interface LayoutProps {
  children?: ReactNode;
}

const PageDefault: React.FC<LayoutProps> = (props) => {
  return (
    <div id="PageDefault">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default PageDefault;
