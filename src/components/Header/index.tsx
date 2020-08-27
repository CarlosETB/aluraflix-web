import React from "react";

// Native
import { Link } from "react-router-dom";

// Components
import { Button } from "components/Button";

// Shared
import { Logo } from "shared/images";

// Private
import "./styles.css";

const Header = () => {
  return (
    <nav id="Header">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Header;
