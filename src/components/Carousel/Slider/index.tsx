import React, { ReactNode } from "react";

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

interface LayoutProps {
  children?: ReactNode;
}

const Slider: React.FC<LayoutProps> = (props) => {
  const { children } = props

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
