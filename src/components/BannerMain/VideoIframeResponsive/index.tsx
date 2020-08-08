import React from "react";

// Private
import { Container, ResponsiveIframe } from "./styles";

interface LayoutProps {
  youtubeID?: string;
}

const YouTubeIframeResponsive: React.FC<LayoutProps> = (props) => {
  return (
    <Container>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${props.youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

export default YouTubeIframeResponsive;
