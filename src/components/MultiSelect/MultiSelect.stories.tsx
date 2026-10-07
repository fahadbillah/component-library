import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MultiSelect, MultiSelectOption } from './MultiSelect';

const sampleUsers: MultiSelectOption[] = [
  {
    value: 'aria',
    label: 'Aria Thorne',
    description: 'Senior Instructor · Mathematics',
    avatar: { initials: 'AT' },
  },
  {
    value: 'marcus',
    label: 'Marcus Vance',
    description: 'Lab Coordinator · Physics',
    avatar: { initials: 'MV' },
  },
  {
    value: 'elena',
    label: 'Elena Rostova',
    description: 'Department Chair · Computer Science',
    avatar: { initials: 'ER' },
  },
  {
    value: 'david',
    label: 'David Kim',
    description: 'Teaching Assistant · Robotics',
    avatar: { initials: 'DK' },
  },
  {
    value: 'sarah',
    label: 'Sarah Jenkins',
    description: 'Academic Advisor · Student Affairs',
    avatar: { initials: 'SJ' },
  },
];

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Assigned Instructors',
    placeholder: 'Search and select instructors...',
    options: sampleUsers,
    defaultValue: ['aria', 'elena'],
    size: 'md',
  },
  render: (args) => (
    <div style={{ maxWidth: '480px' }}>
      <MultiSelect {...args} />
    </div>
  ),
};

export const WithAvatarsAndChips: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '520px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <MultiSelect
          label="Course Faculty & Reviewers"
          placeholder="Add team members..."
          helperText="Select one or more faculty members to review syllabus submissions."
          options={sampleUsers}
          defaultValue={['aria', 'marcus', 'elena']}
          size="md"
        />

        <MultiSelect
          label="Compact Multi-Select (sm)"
          placeholder="Add tags..."
          options={sampleUsers}
          defaultValue={['david']}
          size="sm"
        />

        <MultiSelect
          label="Invalid State Example"
          placeholder="Select members..."
          errorMessage="At least 2 faculty advisors are required."
          options={sampleUsers}
          defaultValue={['aria']}
          size="md"
        />
      </div>
    );
  },
};
