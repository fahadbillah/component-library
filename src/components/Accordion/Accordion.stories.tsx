import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Badge } from '../Badge';
import { BookOpenIcon, CalendarIcon, SettingsIcon } from '../common/Icons';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: 'course-overview',
    title: 'CS 101: Introduction to Computer Science',
    subtitle: 'Section 4A • 3 Credits • Prof. Sterling',
    icon: <BookOpenIcon size={20} />,
    badge: <Badge variant="success">Active</Badge>,
    content: (
      <div>
        <p>
          Fundamental concepts of algorithmic thinking, data abstraction, and
          software engineering. Includes weekly lab practicums and milestone
          evaluations.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
          <li>Lecture: Mon / Wed 10:00 AM - 11:30 AM</li>
          <li>Lab: Fri 02:00 PM - 04:00 PM (Turing Hall)</li>
          <li>Midterm Examination: Week 8</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'academic-calendar',
    title: 'Term Milestones & Add/Drop Deadlines',
    subtitle: 'Fall 2026 Academic Term',
    icon: <CalendarIcon size={20} />,
    badge: <Badge variant="warning">Upcoming</Badge>,
    content: (
      <div>
        <p>
          Key administrative dates for schedule revisions, tuition settlement,
          and final withdrawals:
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
          <li>Last day for 100% refund: October 15, 2026</li>
          <li>Pass/Fail option deadline: November 02, 2026</li>
          <li>Reading week: November 24 - 28, 2026</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'grading-policy',
    title: 'Grading Rubric & Attendance Requirements',
    subtitle: 'Standard Academic Regulations',
    icon: <SettingsIcon size={20} />,
    content: (
      <p>
        Attendance is mandatory for all lab sessions. Students falling below an
        85% attendance threshold will receive a warning notice from Academic
        Affairs.
      </p>
    ),
  },
];

export const Bordered: Story = {
  args: {
    items: sampleItems,
    variant: 'bordered',
    defaultExpandedIds: ['course-overview'],
  },
};

export const CardVariant: Story = {
  args: {
    items: sampleItems,
    variant: 'card',
    allowMultiple: true,
    defaultExpandedIds: ['course-overview', 'academic-calendar'],
  },
};

export const GhostVariant: Story = {
  args: {
    items: sampleItems,
    variant: 'ghost',
    defaultExpandedIds: ['course-overview'],
  },
};

export const SmallDense: Story = {
  args: {
    items: sampleItems,
    size: 'sm',
    variant: 'bordered',
  },
};

export const LargeProminent: Story = {
  args: {
    items: sampleItems,
    size: 'lg',
    variant: 'card',
  },
};
