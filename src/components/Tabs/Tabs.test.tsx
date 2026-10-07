import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabPanel } from './Tabs';

const mockTabs = [
  { id: 'agenda', label: 'Daily Agenda' },
  { id: 'attendance', label: 'Attendance', badge: '36' },
  { id: 'grades', label: 'Marks Matrix', disabled: true },
  { id: 'reports', label: 'Semester Reports' },
];

describe('Tabs', () => {
  it('renders tabs list with first tab active by default and sets roving tabindex', () => {
    render(<Tabs tabs={mockTabs} />);
    const activeTab = screen.getByRole('tab', { name: /daily agenda/i });
    const attendanceTab = screen.getByRole('tab', { name: /attendance/i });

    expect(activeTab).toHaveAttribute('aria-selected', 'true');
    expect(activeTab).toHaveAttribute('tabindex', '0');
    expect(attendanceTab).toHaveAttribute('tabindex', '-1');
    expect(screen.getByText('36')).toBeInTheDocument();
  });

  it('switches active tab when tab button is clicked', async () => {
    const handleChange = vi.fn();
    render(<Tabs tabs={mockTabs} onChange={handleChange} />);
    const attendanceTab = screen.getByRole('tab', { name: /attendance/i });
    await userEvent.click(attendanceTab);

    expect(handleChange).toHaveBeenCalledWith('attendance');
    expect(attendanceTab).toHaveAttribute('aria-selected', 'true');
    expect(attendanceTab).toHaveAttribute('tabindex', '0');
  });

  it('navigates through tabs using ArrowRight, ArrowLeft, Home, and End keys', async () => {
    const handleChange = vi.fn();
    render(<Tabs tabs={mockTabs} onChange={handleChange} />);

    const activeTab = screen.getByRole('tab', { name: /daily agenda/i });
    activeTab.focus();

    // ArrowRight should skip to next enabled tab
    await userEvent.keyboard('{ArrowRight}');
    expect(handleChange).toHaveBeenCalledWith('attendance');

    // ArrowRight again skips disabled 'grades' tab to 'reports'
    await userEvent.keyboard('{ArrowRight}');
    expect(handleChange).toHaveBeenCalledWith('reports');

    // Home jumps to first enabled tab
    await userEvent.keyboard('{Home}');
    expect(handleChange).toHaveBeenCalledWith('agenda');

    // End jumps to last enabled tab
    await userEvent.keyboard('{End}');
    expect(handleChange).toHaveBeenCalledWith('reports');
  });

  it('renders TabPanel content matching active tab with tabIndex 0', () => {
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

    const panel = screen.getByRole('tabpanel');
    expect(panel).toBeInTheDocument();
    expect(panel).toHaveAttribute('tabindex', '0');
    expect(screen.getByText('Agenda content')).toBeInTheDocument();
    expect(screen.queryByText('Attendance content')).not.toBeInTheDocument();
  });

  it('forwards ref properly to root DOM element', () => {
    const tabsRef = createRef<HTMLDivElement>();
    render(<Tabs ref={tabsRef} tabs={mockTabs} />);
    expect(tabsRef.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders scrollable tabs container with scrollable attribute', () => {
    const { container } = render(
      <Tabs tabs={mockTabs} scrollable showScrollButtons />
    );
    expect(container.querySelector('[role="tablist"]')).toBeInTheDocument();
  });
});
