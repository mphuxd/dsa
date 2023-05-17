import React, { useContext } from "react";
import cx from "classnames";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
// For our design system, we're using a headless-ui library from react-aria-components
// https://react-spectrum.adobe.com/react-aria/Button.html
import styles from "@styles/components/Button/index.css";
// would be imported from npm package
import { ThemeContext } from "@/components";

export interface ButtonProps extends AriaButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "danger" | "ghost";
}

function Button({ variant = "primary", ...props }: ButtonProps) {
  const { colorScheme } = useContext(ThemeContext);
  // only have to use this for components with more complex styles across themes
  return (
    <AriaButton
      className={cx(styles, "dsa-button", "dsa-button-core", {
        "dsa-button-dark": colorScheme === "dark",
        "dsa-button-primary": variant === "primary",
        "dsa-button-secondary": variant === "secondary",
        "dsa-button-tertiary": variant === "tertiary",
        "dsa-button-danger": variant === "danger",
        "dsa-button-ghost": variant === "ghost",
      })}
      {...props}
    />
  );
}

export default Button;
