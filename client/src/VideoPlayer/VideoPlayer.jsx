import { useEffect, useState } from "react";
import styles from "./VideoPlayer.module.css";
import { useAppContext } from "../MyContext";
const VideoPlayer = ({ videoSources }) => {
  const { value } = useAppContext();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    console.log(value);
    setSelectedVideo(value)
  });

  const closeFullScreen = () => {
    setSelectedVideo(null);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };


  return (
    <div className={styles.videoContainer}>
      {videoSources.map((videoSource, index) => (
        <div key={index} className={styles.videoColumn}>
          <h2>Video {index + 1}</h2>
          <video className={styles.video} muted controls>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      {selectedVideo && (
        <div className={styles.fullScreenVideo}>
                    <button className={styles.closeButton} onClick={closeFullScreen}>Close </button>

          <video controls autoPlay>
            <source src={videoSources[selectedVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
