import { useAppContext } from "../MyContext";
import styles from "./ButtonLayout.module.css";
import { useVideo } from "../VideoContext";

const Page = () => {
  const { handleClick } = useAppContext();
  const { playVideo } = useVideo();

  return (
    <main className={styles.buttonContainer}>
      <button onClick={() => playVideo(1)}>Play Video 1</button>
      <button onClick={() => playVideo(2)}>Play Video 2</button>
      <button onClick={() => playVideo(3)}>Play Video 3</button>
      {/* <button onClick={() => handleClick(1)} className={styles.button}>
        Button 1
      </button>
      <button onClick={() => handleClick(2)} className={styles.button}>
        Button 2
      </button>
      <button onClick={() => handleClick(3)} className={styles.button}>
        Button 3
      </button> */}
    </main>
  );
};

export default Page;
