import { useEffect, useState } from "react";
import styles from "./VideoPlayer.module.css";
import io from "socket.io-client";

const VideoPlayer = ({ videoSources }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    const handlePlayVideo = (videoNumber) => {
      setSelectedVideo(null)
      
      setSelectedVideo(videoNumber);
    };

    socket.on("playVideo", handlePlayVideo);

    return () => {
      socket.off("playVideo", handlePlayVideo);
      socket.disconnect();
    };
  }, []);
  const closeFullScreen = () => {
    setSelectedVideo(null);
    document.documentElement.requestFullscreen();
  };

  return (
    <div className={styles.videoContainer}>
      {videoSources.map((videoSource, index) => (
        <div key={index} className={styles.videoColumn}>
          <h2>Video {index + 1}</h2>
          <video className={styles.video}>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      {selectedVideo && (
        <div className={styles.fullScreenVideo}>
          <button className={styles.closeButton} onClick={closeFullScreen}>
            Close{" "}
          </button>

          <video controls autoPlay>
            <source src={videoSources[selectedVideo % 3]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
