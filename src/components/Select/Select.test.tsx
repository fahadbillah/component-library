import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

const sampleOptions = [
  {
    value: 'admin',
    label: 'Administrator',
    description: 'Full system privileges',
  },
  {
    value: 'teacher',
    label: 'Teacher / Faculty',
    description: 'Classroom & grading access',
  },
  { value: 'student', label: 'Student', description: 'Learner profile' },
];

describe('Select Component', () => {
  it('renders select trigger with label and placeholder', () => {
    render(
      <Select
        label="User Role"
        options={sampleOptions}
        placeholder="Choose role..."
      />
    );
    expect(screen.getByText('User Role')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveTextContent('Choose role...');
  });

  it('opens custom options menu on click and selects an option', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();
    render(
      <Select
        label="User Role"
        options={sampleOptions}
        defaultValue="admin"
        onValueChange={handleValueChange}
      />
    );

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveTextContent('Administrator');

    // Click to open custom menu
    await user.click(trigger);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: /teacher \/ faculty/i })
    ).toBeInTheDocument();

    // Select "Student"
    await user.click(screen.getByRole('option', { name: /student/i }));
    expect(handleValueChange).toHaveBeenCalledWith('student', sampleOptions[2]);
    expect(trigger).toHaveTextContent('Student');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();
    render(
      <Select
        label="User Role"
        options={sampleOptions}
        onValueChange={handleValueChange}
      />
    );

    const trigger = screen.getByRole('combobox');
    trigger.focus();

    // Press ArrowDown to open
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Press ArrowDown to go to second option and Enter to select
    await user.keyboard('{ArrowDown}{Enter}');
    expect(handleValueChange).toHaveBeenCalled();
  });

  it('displays error message and marks aria-invalid', () => {
    render(
      <Select
        label="User Role"
        options={sampleOptions}
        errorMessage="Role is required."
      />
    );
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Role is required.');
  });
});
