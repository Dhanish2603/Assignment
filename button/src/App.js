import { useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    document.addEventListener("dblclick", () => {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    });
  }, []);

  const playVideo = (videoNumber) => {
    toast("Button is clicked");
    
    socket.emit("playVideo", videoNumber);
  };
  return (
    <div className="App">
      <button onClick={() => playVideo(3)}>Play Video 1</button>
      <button onClick={() => playVideo(1)}>Play Video 2</button>
      <button onClick={() => playVideo(2)}>Play Video 3</button>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App;
