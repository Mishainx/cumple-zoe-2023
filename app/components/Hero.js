"use client"

import { useRef, useEffect } from "react";
import { useVideoContext } from "./context/VideoContext";

export default function Hero() {
  const videoRef = useRef(null);
  const { playVideo } = useVideoContext();

  useEffect(() => {
    const video = videoRef.current;

    if (playVideo) {
      video.play();
    } else {
      video.pause();
    }
  }, [playVideo]);

  return (
    <div className="video">
      <video ref={videoRef} muted>
        <source src="/bulba-trim.mp4" type="video/mp4" />
      </video>
    </div>
  );
}


