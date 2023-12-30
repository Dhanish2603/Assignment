import { useEffect } from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";

function App() {
  

  useEffect(() => {
    document.addEventListener("dblclick", () => {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    });
  }, []);

  const videoSources = [video1, video2, video3];
  return (
    <div>
      <VideoPlayer videoSources={videoSources} />
    </div>
  );
}

export default App;
