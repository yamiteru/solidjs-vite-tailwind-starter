import { Component } from "solid-js";
import {NavLink} from "solid-app-router";
import styles from "./navigation.module.css";

const Navigation: Component = () => (
    <nav className={styles.navigation}>
        <NavLink className={styles.link} href={"/"} exact={true}>Home</NavLink>
        <NavLink className={styles.link} href={"/test"}>Test</NavLink>
    </nav>
);

export default Navigation;