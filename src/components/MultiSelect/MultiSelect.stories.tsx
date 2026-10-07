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

const masterModerators: MultiSelectOption[] = [
  {
    value: 'elena',
    label: 'Dr. Elena Thorne',
    description: '#FAC-4102 • Biology',
    avatar: { initials: 'ET' },
  },
  {
    value: 'sophia',
    label: 'Sophia Miller',
    description: '#ST-98214 • Grade 10-A',
    avatar: { initials: 'SM' },
  },
  {
    value: 'alexander',
    label: 'Alexander Chen',
    description: '#ST-98210 • Grade 10-A',
    avatar: { initials: 'AC' },
  },
  {
    value: 'brianna',
    label: 'Brianna Davis',
    description: '#ST-98211 • Grade 10-A',
    avatar: { initials: 'BD' },
  },
];

const masterCohorts: MultiSelectOption[] = [
  {
    value: 'grade-10a',
    label: 'Grade 10-A',
    description: '32 students enrolled',
  },
  {
    value: 'ap-bio',
    label: 'AP Biology',
    description: '28 students enrolled',
  },
  {
    value: 'grade-10b',
    label: 'Grade 10-B (Mixed)',
    description: 'Partial • 30 students',
  },
  {
    value: 'grade-11',
    label: 'Grade 11 Honors Physics',
    description: '24 students enrolled',
  },
];

export const MasterDesignModeratorsPicker: Story = {
  render: () => (
    <div style={{ maxWidth: '540px' }}>
      <MultiSelect
        label="Assigned Session Moderators"
        placeholder="Select moderators..."
        options={masterModerators}
        defaultValue={['elena', 'sophia']}
        size="md"
      />
    </div>
  ),
};

export const MasterDesignCohortsPicker: Story = {
  render: () => (
    <div style={{ maxWidth: '540px' }}>
      <MultiSelect
        label="Assigned Cohorts & Classes"
        placeholder="Choose classes..."
        options={masterCohorts}
        defaultValue={['grade-10a', 'ap-bio']}
        size="md"
      />
    </div>
  ),
};
