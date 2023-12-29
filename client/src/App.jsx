import { useEffect } from "react";
import styles from "./App.module.css";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Page from "./buttons/Page";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,

    }, 
        {
          path: "/video",
          element: <Page />,
        },
      
  ]);

  return (
    <div className={styles.main}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
