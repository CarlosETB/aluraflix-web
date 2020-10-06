import React from "react";

// Private
import { Container, ResponsiveIframe } from "./styles";

interface LayoutProps {
  youtubeID?: string;
}

const YouTubeIframeResponsive: React.FC<LayoutProps> = (props) => {
  const { youtubeID } = props;

  const image = `https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`;

  return (
    <Container>
      <ResponsiveIframe title="Titulo do Iframe" src={image} />
    </Container>
  );
};

export default YouTubeIframeResponsive;
