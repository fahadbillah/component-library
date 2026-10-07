import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { SettingsIcon, BookOpenIcon } from '../common/Icons';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const DefaultTop: Story = {
  args: {
    content: 'Export roster as CSV report',
    placement: 'top',
    children: <Button variant="secondary">Hover for Details</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Tooltip content="Tooltip on Top" placement="top">
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" placement="bottom">
        <Button size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Left" placement="left">
        <Button size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Right" placement="right">
        <Button size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const LightTheme: Story = {
  args: {
    content: 'Institutional Account Settings',
    placement: 'bottom',
    theme: 'light',
    children: (
      <Button variant="outline" size="sm">
        <SettingsIcon size={16} /> Preferences
      </Button>
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    content: 'View course syllabi and readings',
    placement: 'top',
    children: (
      <button
        style={{
          border: '1px solid #A1E3F9',
          background: '#FFFFFF',
          borderRadius: '8px',
          padding: '8px',
          cursor: 'pointer',
          display: 'inline-flex',
          color: '#3674B5',
        }}
        aria-label="Course Syllabi"
      >
        <BookOpenIcon size={18} />
      </button>
    ),
  },
};
