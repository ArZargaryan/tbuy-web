import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

function Video(props: ReactPlayerProps) {
  const playerRef = React.useRef<ReactPlayer>(null);
  React.useEffect(() => {
    if (playerRef) {
      playerRef.current?.showPreview();
    }
  }, [playerRef]);

  return <ReactPlayer width={"100%"} height={"100%"} {...props} controls light ref={playerRef} />;
}

export default Video;
