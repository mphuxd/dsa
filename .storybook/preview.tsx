import React, { useContext, useEffect } from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, theme } from "@/components";
import { ThemeBlock } from "./ThemeBlock";
import { ThemeContext } from "../components/ThemeProvider/context";

interface ThemeTogglerProps {
  globalTheme: string;
}

function ThemeToggler({ globalTheme }: ThemeTogglerProps) {
  const { colorScheme, setColorScheme } = useContext(ThemeContext);

  useEffect(() => {
    if (colorScheme !== globalTheme) setColorScheme(globalTheme);
  }, [colorScheme, globalTheme, setColorScheme]);
  return <div />;
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={theme}>
        <ThemeToggler globalTheme={context.globals.theme} />
        <ThemeBlock />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: "alpha",
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#212121",
        },
      ],
    },
  },
};

export default preview;
