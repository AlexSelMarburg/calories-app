import CaloriesButtons from "../components/CaloriesButtons/CaloriesButtons";
import CurrentDayCalaries from "../components/CurrentDayCalaries/CurrentDayCalaries";
import styles from "./CaloriesPage.module.css";

export default function CaloriesPage() {
  return (
    <div className={`${styles.CaloriesPage} page`}>
      <CurrentDayCalaries />
      <CaloriesButtons />
    </div>
  );
}
