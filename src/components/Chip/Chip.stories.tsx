import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from './Chip';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Computer Science',
    variant: 'neutral',
    size: 'md',
  },
};

export const WithAvatar: Story = {
  render: (args) => (
    <Chip
      {...args}
      label="Aria Thorne"
      avatar={<Avatar size="xs" name="Aria Thorne" initials="AT" />}
      onRemove={() => alert('Removed!')}
    />
  ),
};

export const RemovableChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip
        label="Marcus Vance"
        avatar={<Avatar size="xs" name="Marcus Vance" initials="MV" />}
        onRemove={() => {}}
      />
      <Chip
        label="Elena Rostova"
        variant="primary"
        avatar={<Avatar size="xs" name="Elena Rostova" initials="ER" />}
        onRemove={() => {}}
      />
      <Chip
        label="David Kim"
        variant="outline"
        avatar={<Avatar size="xs" name="David Kim" initials="DK" />}
        onRemove={() => {}}
      />
      <Chip label="Core Requirement" variant="primary" onRemove={() => {}} />
    </div>
  ),
};
