import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    document.addEventListener("dblclick", () => {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    });
  }, []);
  const closeFullScreen = () => {
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
  const playVideo = (videoNumber) => {
    socket.emit("playVideo", videoNumber);
  };
  return (
    <div className="App">
      <button onClick={() => playVideo(1)}>Play Video 1</button>
      <button onClick={() => playVideo(2)}>Play Video 2</button>
      <button onClick={() => playVideo(3)}>Play Video 3</button>
    </div>
  );
}

export default App;
