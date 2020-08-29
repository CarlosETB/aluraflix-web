import React from "react";

// Native
import { useTranslation } from 'react-i18next'

// Components
import Header from "components/Header";

// Private
import { Container, Content, Title, Text, Button } from "./styles";

const PageError = () => {
  const { t } = useTranslation('PageError')

  return (
    <Container>
      <Header />
      <Content>
        <Title>{t('title')}</Title>
        <Text>{t('text')}</Text>
        <Button>{t('button')}</Button>
      </Content>
    </Container>
  );
};

export default PageError;
