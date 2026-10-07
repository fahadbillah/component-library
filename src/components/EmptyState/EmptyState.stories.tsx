import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button';
import { BookOpenIcon } from '../common/Icons';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No Active Enrollments',
    description:
      'You have not enrolled in any lecture sections or lab practicums for this academic period.',
    action: <Button variant="primary">Browse Course Catalog</Button>,
  },
};

export const BorderedCard: Story = {
  args: {
    title: 'No Assignment Submissions',
    description:
      'When students submit homework or project artifacts, they will appear here for grading.',
    bordered: true,
    action: <Button variant="primary">Create Assignment</Button>,
    secondaryAction: <Button variant="outline">Import Rubric</Button>,
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <BookOpenIcon size={40} />,
    title: 'Course Syllabus Not Published',
    description:
      'Upload your syllabus documents to share grading policies, textbook requirements, and schedules with enrolled students.',
    bordered: true,
    action: <Button variant="secondary">Upload Document</Button>,
  },
};

export const SmallCompact: Story = {
  args: {
    size: 'sm',
    title: 'No Recent Notifications',
    description: 'You are all caught up on academic alerts.',
  },
};
