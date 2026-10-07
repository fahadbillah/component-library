import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabPanel } from './Tabs';

const mockTabs = [
  { id: 'agenda', label: 'Daily Agenda' },
  { id: 'attendance', label: 'Attendance', badge: '36' },
  { id: 'grades', label: 'Marks Matrix', disabled: true },
];

describe('Tabs', () => {
  it('renders tabs list with first tab active by default', () => {
    render(<Tabs tabs={mockTabs} />);
    const activeTab = screen.getByRole('tab', { name: /daily agenda/i });
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('36')).toBeInTheDocument();
  });

  it('switches active tab when tab button is clicked', async () => {
    const handleChange = vi.fn();
    render(<Tabs tabs={mockTabs} onChange={handleChange} />);
    const attendanceTab = screen.getByRole('tab', { name: /attendance/i });
    await userEvent.click(attendanceTab);

    expect(handleChange).toHaveBeenCalledWith('attendance');
    expect(attendanceTab).toHaveAttribute('aria-selected', 'true');
  });

  it('renders TabPanel content matching active tab', () => {
    render(
      <div>
        <Tabs tabs={mockTabs} defaultActiveTab="agenda" />
        <TabPanel tabId="agenda" activeTabId="agenda">
          <p>Agenda content</p>
        </TabPanel>
        <TabPanel tabId="attendance" activeTabId="agenda">
          <p>Attendance content</p>
        </TabPanel>
      </div>
    );

    expect(screen.getByText('Agenda content')).toBeInTheDocument();
    expect(screen.queryByText('Attendance content')).not.toBeInTheDocument();
  });
});
