import React, { useState, useEffect } from "react";

// Private
import { Container, List, Title, ExtraLink } from "./styles";
import VideoCard from "./VideoCard";
import Slider, { SliderItem } from "./Slider";

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
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [categoryExtraLink, setCategoryExtraLink] = useState<Link_Extra>();
  const [videos, setVideos] = useState<Videos[]>([]);

  useEffect(() => {
    if (props.category.title !== undefined) {
      setCategoryTitle(String(props.category.title));
    }
    if (props.category.color !== undefined) {
      setCategoryColor(String(props.category.color));
    }
    if (props.category.link_extra !== undefined) {
      setCategoryExtraLink(props.category.link_extra);
    }

    if (props.category.videos !== undefined) {
      setVideos(props.category.videos);
    }
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
        {videos.map((video, index) => {
          if (props.ignoreFirstVideo && index === 0) {
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
