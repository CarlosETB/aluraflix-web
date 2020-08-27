import React from "react";

// Private
import { Container, ResponsiveIframe } from "./styles";

interface LayoutProps {
  youtubeID?: string;
}

const YouTubeIframeResponsive: React.FC<LayoutProps> = ({ youtubeID }) => {
  return (
    <Container>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
      />
    </Container>
  );
};

export default YouTubeIframeResponsive;
