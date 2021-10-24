import { Component } from "solid-js";
import { NavLink } from "solid-app-router";
import styles from "./navigation.module.css";

const Navigation: Component = () => (
  <nav className={styles.navigation}>
    <NavLink className={styles.link} href={"/"} end>
      Home
    </NavLink>
    <NavLink className={styles.link} href={"/test"}>
      Test
    </NavLink>
    <NavLink className={styles.link} href={"/error"}>
      Error
    </NavLink>
  </nav>
);

export default Navigation;
