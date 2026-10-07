import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 65,
    label: 'Term Syllabus Completion',
    showValue: true,
    variant: 'primary',
  },
};

export const SemanticVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ProgressBar
        value={88}
        label="Attendance (Present)"
        variant="success"
        showValue
      />
      <ProgressBar
        value={72}
        label="Gradebook Submissions"
        variant="primary"
        showValue
      />
      <ProgressBar
        value={45}
        label="Lab Equipment Quota"
        variant="warning"
        showValue
      />
      <ProgressBar
        value={18}
        label="Absence Warning Threshold"
        variant="danger"
        showValue
      />
    </div>
  ),
};

export const StripedAnimated: Story = {
  args: {
    value: 75,
    label: 'Exam Papers Processing',
    showValue: true,
    variant: 'primary',
    striped: true,
    size: 'lg',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Synchronizing Master Gradebook...',
    variant: 'secondary',
    size: 'sm',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar value={40} size="xs" label="Extra Small (4px)" />
      <ProgressBar value={55} size="sm" label="Small (6px)" />
      <ProgressBar value={70} size="md" label="Medium (8px)" />
      <ProgressBar value={85} size="lg" label="Large (12px)" />
    </div>
  ),
};
