import React from "react";

// Native
import { useTranslation } from 'react-i18next'

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
  const { title, description, url } = props

  const { t } = useTranslation('BannerMain')

  const youTubeID = getYouTubeId(String(
    url));
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <Container url={bgUrl}>
      <Content>
        <Item>
          <Title>{title}</Title>

          <Description>{description}</Description>
        </Item>

        <Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <Button>{t('button')}</Button>
        </Item>
      </Content>
    </Container>
  );
};

export default BannerMain;
