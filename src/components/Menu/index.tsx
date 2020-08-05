import React from "react";

// Shared
import { Logo } from "shared/images";

// Private
import ButtonLink from "./components/ButtonLink";
import "./styles.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a>
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
};

export default Menu;
