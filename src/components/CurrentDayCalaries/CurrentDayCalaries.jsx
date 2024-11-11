import { useCalories } from "../../context/CaloriesContext";
import { getCurrentWeekData } from "../../helpers/utils";

import styles from "./CurrentDayCalaries.module.css";
import { TbMathAvg } from "react-icons/tb";

export default function CurrentDayCalaries() {
  const {
    resetTemporaryCalories,
    temporaryCalories,
    data,
    saveToTodaysCalories,
    currentDayTotalCalories,
  } = useCalories();

  const currentWeekAvgCalories = Math.floor(
    getCurrentWeekData(data).reduce((total, day) => total + day.calories, 0) /
      getCurrentWeekData(data).length
  );

  return (
    <div className={styles.CurrentDayCalaries}>
      <div className={styles.date}>
        {new Date().toLocaleDateString("de-DE", {
          weekday: "long",
          year: "2-digit",
          month: "numeric",
          day: "2-digit",
        })}
      </div>

      <div className={styles.caloriesContainer}>
        <div className={styles.caloriesData}>
          <h3>
            <TbMathAvg /> Woche
          </h3>
          <h2>{currentWeekAvgCalories}</h2>
        </div>
        <div className={styles.caloriesData}>
          <h3>Heute</h3>
          <h2>{currentDayTotalCalories}</h2>
          <h2
            className={`${styles.increase} ${
              temporaryCalories <= 0 && styles.hidden
            }`}
          >
            <span>+</span>
            {temporaryCalories}
          </h2>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          disabled={temporaryCalories === 0}
          onClick={resetTemporaryCalories}
        >
          Abbrechen
        </button>
        <button
          disabled={temporaryCalories === 0}
          onClick={() => saveToTodaysCalories(temporaryCalories)}
        >
          Speichern
        </button>
      </div>
    </div>
  );
}
