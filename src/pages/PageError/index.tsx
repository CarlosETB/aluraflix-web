import React from "react";

// Components
import Header from "components/Header";

// Private
import { Container, Content, Title, Text, Button } from "./styles";

const PageError = () => {
  let title = "Você se perdeu?";
  let text =
    "Infelizmente, não localizamos essa página. Você encontra muitos outros títulos na página inicial.";

  return (
    <Container>
      <Header />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Button>Página Inicial da Aluraflix</Button>
      </Content>
    </Container>
  );
};

export default PageError;
