import React from "react";

// Components
import Button from "components/Button";

// Shared
import { Logo } from "shared/images";

// Private
import "./styles.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a>
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;
