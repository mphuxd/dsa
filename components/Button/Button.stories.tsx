import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@/components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

type Story = StoryObj<typeof ButtonProps>;

export const Primary: Story = {
  render: (props) => <Button {...props}>Button</Button>,
  args: { variant: "primary" },
};

export const Secondary: Story = {
  render: (props) => <Button {...props}>Button</Button>,
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  render: (props) => <Button {...props}>Button</Button>,
  args: { variant: "tertiary" },
};

export const Danger: Story = {
  render: (props) => <Button {...props}>Button</Button>,
  args: { variant: "danger" },
};

export const Ghost: Story = {
  render: (props) => <Button {...props}>Button</Button>,
  args: { variant: "ghost" },
};
