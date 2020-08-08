import React, { ReactNode } from "react";

// Private
import "./styles.css";

interface LayoutProps {
  href?: string;
  className?: string;
  children?: ReactNode;
}

const ButtonLink: React.FC<LayoutProps> = (props) => {
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
};

export default ButtonLink;
