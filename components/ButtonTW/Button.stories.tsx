import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonTW, type ButtonTWProps } from "@/components/ButtonTW";

export default {
  title: "Components/ButtonTW",
  component: ButtonTW,
} as Meta;

type Story = StoryObj<typeof ButtonTWProps>;

export const Primary: Story = {
  render: (props) => <ButtonTW {...props}>Button</ButtonTW>,
  args: { variant: "primary" },
};
