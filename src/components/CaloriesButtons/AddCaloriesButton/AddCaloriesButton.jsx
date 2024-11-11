/* eslint-disable react/prop-types */

import { useCalories } from "../../../context/CaloriesContext";
import style from "./AddCaloriesButton.module.css";

export default function AddCaloriesButton({ value }) {
  const { addTemporaryCalories } = useCalories();

  return (
    <button
      onClick={() => addTemporaryCalories(value)}
      className={style.AddCaloriesButton}
    >
      {value}
    </button>
  );
}
