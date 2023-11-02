import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>News_Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default NavBar;
