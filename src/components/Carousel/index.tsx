import React, { useState, useEffect } from "react";

// Private
import { Container, Title, ExtraLink } from "./styles";
import Slider, { SliderItem } from "./Slider";
import VideoCard from "./VideoCard";

interface LayoutProps {
  category: {
    title?: string;
    color?: string;
    url?: string;
    text?: string;
    link_extra?: {
      text: string;
      url: string;
    };
    videos?: {
      title: string;
      url: string;
    }[];
  };
  ignoreFirstVideo?: boolean;
}

interface Videos {
  title: string;
  url: string;
}

interface Link_Extra {
  text: string;
  url: string;
}

const Carousel: React.FC<LayoutProps> = (props) => {
  const { category: { title, color, link_extra, videos }, ignoreFirstVideo } = props

  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [categoryExtraLink, setCategoryExtraLink] = useState<Link_Extra>();
  const [video, setVideo] = useState<Videos[]>([]);

  async function handleValues() {
    if (title !== undefined) {
      setCategoryTitle(String(title));
    }
    if (color !== undefined) {
      setCategoryColor(String(color));
    }
    if (link_extra !== undefined) {
      setCategoryExtraLink(link_extra);
    }

    if (videos !== undefined) {
      setVideo(videos);
    }
  }

  useEffect(() => {
    handleValues()
  }, []);

  return (
    <Container>
      {categoryTitle && (
        <>
          <Title categoryColor={categoryColor}>{categoryTitle}</Title>

          {categoryExtraLink && (
            <ExtraLink href={String(categoryExtraLink.url)} target="_blank">
              {String(categoryExtraLink.text)}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {video.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoURL={String(video.url)}
                categoryColor={categoryColor}
                videoTitle={String(video.title)}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Carousel;
