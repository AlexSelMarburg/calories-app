import AddCaloriesButton from "./AddCaloriesButton/AddCaloriesButton";
import styles from "./CaloriesButtons.module.css";

const addCaloriesButtons = [1, 3, 5, 10, 30, 50, 100, 500];

export default function CaloriesButtons() {
  return (
    <div className={styles.CaloriesButtons}>
      {addCaloriesButtons.map((value) => (
        <AddCaloriesButton key={value} value={value} />
      ))}
    </div>
  );
}
