import React, { useState, useEffect } from "react";

// Private
import { VideoCardContainer } from "./styles";

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

interface LayoutProps {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}

const VideoCard: React.FC<LayoutProps> = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(
      `https://img.youtube.com/vi/${getYouTubeId(props.videoURL)}/hqdefault.jpg`
    );
  }, []);

  return (
    <VideoCardContainer
      image={image}
      target="_blank"
      href={props.videoURL}
      title={props.videoTitle}
      categoryColor={props.categoryColor}
    />
  );
};

export default VideoCard;
