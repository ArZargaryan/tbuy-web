import { useEffect, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

function Video(props: ReactPlayerProps) {
  const [hasWindow, setHasWindow] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (playerRef) {
      playerRef.current?.showPreview();
    }
  }, [playerRef]);

  return hasWindow ? (
    <ReactPlayer width={"100%"} height={"100%"} {...props} controls light ref={playerRef} />
  ) : null;
}

export default Video;
