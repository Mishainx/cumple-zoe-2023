"use client"

// VideoContext.js
import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <VideoContext.Provider value={{ playVideo, setPlayVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
