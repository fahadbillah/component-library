import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import { Button } from '../Button';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Registration Period Open',
    children:
      'Elective course add/drop enrollment is now active through October 18.',
    dismissible: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Grades Successfully Published',
    children: 'Final midterm evaluations have been submitted to the registrar.',
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Fee Payment Deadline Approaching',
    children: 'Outstanding balance of $450.00 due by Friday, 5:00 PM.',
    dismissible: true,
    action: (
      <Button variant="outline" size="sm">
        Review Ledger
      </Button>
    ),
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Mandatory Attendance Warning',
    children: 'Unexcused absences exceed the 15% threshold for Lab Section 2.',
    dismissible: true,
    action: (
      <Button variant="danger" size="sm">
        File Appeal
      </Button>
    ),
  },
};

export const CardAppearance: Story = {
  args: {
    variant: 'info',
    appearance: 'card',
    title: 'System Maintenance Window',
    children:
      'The portal will undergo scheduled database upgrades tonight between 02:00 and 04:00 AM UTC.',
    dismissible: true,
  },
};

export const FilledAppearance: Story = {
  args: {
    variant: 'neutral',
    appearance: 'filled',
    title: 'Campus CampusPulse Advisory',
    children:
      'Library extended study hours are now active for final exams week.',
    dismissible: true,
  },
};
