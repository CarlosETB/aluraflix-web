import React from "react";

// Native
import styled from "styled-components";
import SlickSlider from "react-slick";

// Private
import { Container } from "./styles";

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = () => {
  return (
    <Container>
      <SlickSlider
        {...{
          dots: false,
          infinite: false,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }}
      />
    </Container>
  );
};

export default Slider;
