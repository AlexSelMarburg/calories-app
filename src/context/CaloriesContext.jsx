/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { getCurrentDayMonthYear } from "../helpers/utils";

const CaloriesContext = createContext();

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "addTemporaryCalories":
      return {
        ...state,
        temporaryCalories: state.temporaryCalories + payload,
      };

    case "resetTemporaryCalories":
      return {
        ...state,
        temporaryCalories: 0,
      };

    case "saveToTodaysCalories":
      const currentDate = getCurrentDayMonthYear(new Date());
      const updatedData = state.data.map((day) => {
        if (day.date === currentDate) {
          return {
            ...day,
            calories: state.currentDayTotalCalories + state.temporaryCalories,
          };
        }
        return day;
      });
      console.log(updatedData);

      localStorage.setItem("calories", JSON.stringify(updatedData));

      return {
        ...state,
        data: updatedData,
        currentDayTotalCalories:
          state.currentDayTotalCalories + state.temporaryCalories,
        temporaryCalories: 0,
      };

    default:
      return state;
  }
}

const initialState = {
  temporaryCalories: 0,
  currentDayTotalCalories: 0,
  data: [{ calories: 0, date: getCurrentDayMonthYear(new Date()) }],
};

function CaloriesProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    (() => {
      const storedCalories = localStorage.getItem("calories");

      const data = JSON.parse(storedCalories) || [];

      const currentDayTotalCalories =
        data.find((day) => day.date === getCurrentDayMonthYear(new Date()))
          ?.calories || 0;

      return storedCalories
        ? {
            temporaryCalories: 0,
            currentDayTotalCalories,
            data,
          }
        : initialState;
    })()
  );

  const { temporaryCalories, data, currentDayTotalCalories } = state;

  const addTemporaryCalories = (amount) =>
    dispatch({ type: "addTemporaryCalories", payload: amount });

  const resetTemporaryCalories = () =>
    dispatch({ type: "resetTemporaryCalories" });

  const saveToTodaysCalories = (value) =>
    dispatch({ type: "saveToTodaysCalories", payload: value });

  return (
    <CaloriesContext.Provider
      value={{
        temporaryCalories,
        data,
        currentDayTotalCalories,
        addTemporaryCalories,
        resetTemporaryCalories,
        saveToTodaysCalories,
      }}
    >
      {children}
    </CaloriesContext.Provider>
  );
}

function useCalories() {
  const context = useContext(CaloriesContext);

  if (context === undefined) {
    throw new Error("useCalories must be used within a CaloriesProvider");
  }
  return context;
}

export { useCalories, CaloriesProvider };
