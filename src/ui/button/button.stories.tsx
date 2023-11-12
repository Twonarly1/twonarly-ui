import { Button } from "ui";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      {/* <Button variant="disabled">Disabled</Button> */}
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="solid" size="xs">
        Button
      </Button>
      <Button variant="solid" size="sm">
        Button
      </Button>
      <Button variant="solid">Button</Button>
      <Button variant="solid" size="lg">
        Button
      </Button>
      <Button variant="solid" size="xl">
        Button
      </Button>
    </div>
  ),
};

const meta = {
  title: "Components/Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
