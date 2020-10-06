import React, { ReactNode } from "react";

// Native
import styled from "styled-components";
import SlickSlider from "react-slick";

// Private
import { Container } from "./styles";

interface LayoutProps {
  children?: ReactNode;
}

const Slider: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Container>
  );
};

export default Slider;
export { SliderItem } from "./styles";
