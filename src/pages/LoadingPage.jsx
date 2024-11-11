import Spinner from "../components/Spiner/Spinner";
import styles from "./LoadingPage.module.css";

export default function LoadingPage() {
  return (
    <div className={styles.LoadingPage}>
      <Spinner />
    </div>
  );
}
