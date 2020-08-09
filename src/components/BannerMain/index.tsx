import React from "react";

// Private
import { Container, Content, Button, Item, Description, Title } from "./styles";
import VideoIframeResponsive from "./VideoIframeResponsive";

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

interface LayoutProps {
  url?: string;
  title?: string;
  description?: string;
}

const BannerMain: React.FC<LayoutProps> = (props) => {
  const youTubeID = getYouTubeId(String(props.url));
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <Container url={bgUrl}>
      <Content>
        <Item>
          <Title>{props.title}</Title>

          <Description>{props.description}</Description>
        </Item>

        <Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <Button>Assistir</Button>
        </Item>
      </Content>
    </Container>
  );
};

export default BannerMain;
