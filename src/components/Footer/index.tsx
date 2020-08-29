import React from "react";

// Native
import { useTranslation } from 'react-i18next'

// Private
import { FooterBase } from "./styles";

const Footer = () => {
  const { t } = useTranslation('Footer')

  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img
          alt="Logo Alura"
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
        />
      </a>
      <p>
        {t('preText')}<br />
        <a href="https://www.alura.com.br/">{t('title')}</a>
      </p>
    </FooterBase>
  );
};

export default Footer;
