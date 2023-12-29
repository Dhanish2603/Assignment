import { useAppContext } from "../MyContext";
import styles from "./ButtonLayout.module.css";

const Page = () => {
  const { handleClick } = useAppContext();

  return (
    <main className={styles.buttonContainer}>
      <button onClick={() => handleClick(1)} className={styles.button}>
        Button 1
      </button>
      <button onClick={() => handleClick(2)} className={styles.button}>
        Button 2
      </button>
      <button onClick={() => handleClick(3)} className={styles.button}>
        Button 3
      </button>
    </main>
  );
};

export default Page;
