import React from "react";

// Private
import { FooterBase } from "./styles";

const Footer = () => {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img
          alt="Logo Alura"
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
        />
      </a>
      <p>
        Orgulhosamente criado durante a <br />
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
};

export default Footer;
