// src/VideoContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    // Listen for video changes from the server
    socket.on('playVideo', (videoNumber) => {
      setCurrentVideo(videoNumber);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const playVideo = (videoNumber) => {
    // Emit the video change event to the server
    socket.emit('playVideo', videoNumber);
  };

  return (
    <VideoContext.Provider value={{ currentVideo, playVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
