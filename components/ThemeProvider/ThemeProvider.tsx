import React, { useState } from "react";
import cx from "classnames";
import { ThemeContext } from "./context";

export interface ThemeProviderProps {
  theme: any;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  if (!theme) throw new Error("Theme must be provided");
  const [colorScheme, setColorScheme] = useState("light");

  const className = cx({
    "dsa--light": colorScheme === "light",
    "dsa--dark": colorScheme === "dark",
  });

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
}

// Check prefers color scheme and set that to default
