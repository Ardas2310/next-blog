"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <div className={styles.moon}>
        <Image src="/moon.png" alt="" width={14} height={14} />
      </div>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <div className={styles.sun}>
        <Image src="/sun.png" alt="" width={14} height={14} />
      </div>
    </div>
  );
};

export default ThemeToggle;
