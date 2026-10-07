import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabPanel } from './Tabs';
import { Card, CardContent } from '../Card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../Table';
import { Badge } from '../Badge';

const sampleTabs = [
  { id: 'overview', label: 'Roster Overview', badge: '36' },
  { id: 'attendance', label: 'Attendance Roll Call' },
  { id: 'evaluations', label: 'Evaluation Matrix' },
  { id: 'archived', label: 'Prior Terms', disabled: true },
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['pill', 'underline'],
    },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const SegmentedPill: Story = {
  render: () => {
    const [current, setCurrent] = useState('overview');

    return (
      <div style={{ maxWidth: '640px' }}>
        <Tabs
          tabs={sampleTabs}
          activeTab={current}
          onChange={setCurrent}
          variant="pill"
        />

        <TabPanel tabId="overview" activeTabId={current}>
          <Card elevation={1} style={{ marginTop: '16px' }}>
            <CardContent>
              <h4 style={{ margin: '0 0 8px 0' }}>Class Section 11-A</h4>
              <p style={{ margin: 0, color: 'var(--ui-text-muted)' }}>
                36 enrolled candidates. Regular timetable active.
              </p>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel tabId="attendance" activeTabId={current}>
          <div style={{ marginTop: '16px' }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead align="right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Eleanor Vance</TableCell>
                  <TableCell align="right">
                    <Badge variant="success" withDot>
                      Present
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Marcus Sterling</TableCell>
                  <TableCell align="right">
                    <Badge variant="warning" withDot>
                      Late
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabPanel>

        <TabPanel tabId="evaluations" activeTabId={current}>
          <Card elevation={1} style={{ marginTop: '16px' }}>
            <CardContent>
              <p style={{ margin: 0 }}>Mid-term marks are being processed.</p>
            </CardContent>
          </Card>
        </TabPanel>
      </div>
    );
  },
};

export const UnderlineVariant: Story = {
  render: () => {
    const [current, setCurrent] = useState('overview');

    return (
      <div style={{ maxWidth: '640px' }}>
        <Tabs
          tabs={sampleTabs}
          activeTab={current}
          onChange={setCurrent}
          variant="underline"
        />
        <div style={{ padding: '16px 0', color: 'var(--ui-text-muted)' }}>
          Active tab content for: <strong>{current}</strong>
        </div>
      </div>
    );
  },
};
