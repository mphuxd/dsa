import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cx from "classnames";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import styles from "@styles/vars/tailwind/styles.css";

const buttonStyles = cva([], {
  variants: {
    variant: {
      primary:
        "bg-blue-600 text-white h-8 px-4 rounded-full border-solid border-blue-600 font-bold font-sans text-sm tracking-tight hover:bg-blue-700 active:bg-blue-800 active:border-blue-600 outline-none focus:ring-[2px] focus:ring-inset data-[focus-visible=true]:ring-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// Configure dark mode https://tailwindcss.com/docs/dark-mode

export interface ButtonTWProps
  extends VariantProps<typeof buttonStyles>,
    AriaButtonProps {
  className?: string;
}

function ButtonTW({ variant, ...props }: ButtonTWProps) {
  const { className } = props;
  const classNames = cx(styles, buttonStyles({ variant }), className);
  return <AriaButton className={classNames} {...props} />;
}

export default ButtonTW;
