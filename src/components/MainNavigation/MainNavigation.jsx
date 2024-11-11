import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

import { GiFruitBowl } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";

export default function MainNavigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">
            <button>
              <GiFruitBowl />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="bodyweight">
            <button>
              <FaWeightScale />
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
