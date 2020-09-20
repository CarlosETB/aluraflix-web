import React from "react";

// Hooks
import { useYoutubeId } from "hooks";

// Private
import { VideoCardContainer } from "./styles";

interface LayoutProps {
  videoURL?: string;
  videoTitle?: string;
  categoryColor?: string;
}

const VideoCard: React.FC<LayoutProps> = (props) => {
  const { videoURL, videoTitle, categoryColor } = props;

  const image = `https://img.youtube.com/vi/${useYoutubeId(
    String(videoURL)
  )}/hqdefault.jpg`;

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
