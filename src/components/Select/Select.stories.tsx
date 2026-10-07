import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const sampleOptions = [
  {
    value: 'cs',
    label: 'Computer Science & Engineering',
    description: 'Software systems, algorithms, and AI research tracks',
  },
  {
    value: 'math',
    label: 'Mathematics & Statistics',
    description:
      'Pure mathematics, applied statistics, and computational modeling',
  },
  {
    value: 'physics',
    label: 'Physics & Applied Sciences',
    description: 'Quantum dynamics and theoretical astrophysics',
  },
  {
    value: 'arts',
    label: 'Humanities & Fine Arts',
    description: 'Literature, philosophy, and history of art',
  },
  {
    value: 'archived',
    label: 'Discontinued Department (Archived)',
    disabled: true,
  },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    selectSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Academic Department',
    placeholder: 'Select a department...',
    options: sampleOptions,
    helperText: 'Select your primary assigned academic department.',
  },
};

export const Preselected: Story = {
  args: {
    label: 'Active Department',
    defaultValue: 'cs',
    options: sampleOptions,
    helperText: 'Default selection loaded from user academic profile.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Academic Department',
    options: sampleOptions,
    errorMessage: 'Please select a valid department to continue.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Academic Year',
    options: [{ value: '2026', label: '2026-2027 (Active Term)' }],
    defaultValue: '2026',
    disabled: true,
    helperText: 'Current term is locked.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Select
        selectSize="sm"
        label="Compact Size (36px)"
        options={sampleOptions}
        defaultValue="cs"
      />
      <Select
        selectSize="md"
        label="Default Size (44px)"
        options={sampleOptions}
        defaultValue="math"
      />
      <Select
        selectSize="lg"
        label="Large Size (52px)"
        options={sampleOptions}
        defaultValue="physics"
      />
    </div>
  ),
};
