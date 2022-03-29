import React from "react";
import ReactPlayer from "react-player/youtube";

export default function YoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={800}
      height={600}
      mute={true}
      loop={true}
      playing={true}
      playsinline={true}
    />
  );
}
