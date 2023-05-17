import React from "react";
import cx from "classnames";
import styles from "./index.css";

export default function ThemeBlock() {
  return <div className={cx(styles, "theme-block")} />;
}
