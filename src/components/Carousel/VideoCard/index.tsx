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
  videoURL?: string;
  videoTitle?: string;
  categoryColor?: string;
}

const VideoCard: React.FC<LayoutProps> = (props) => {
  const { videoURL, videoTitle, categoryColor } = props

  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(
      `https://img.youtube.com/vi/${getYouTubeId(String(videoURL))}/hqdefault.jpg`
    );
  }, []);

  return (
    <VideoCardContainer
      image={image}
      target="_blank"
      href={videoURL}
      title={videoTitle}
      categoryColor={categoryColor}
    />
  );
};

export default VideoCard;
