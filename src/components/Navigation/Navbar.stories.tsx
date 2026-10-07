import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Navbar, BottomNav } from './Navigation';
import {
  HomeIcon,
  CalendarIcon,
  BookOpenIcon,
  BellIcon,
  SearchIcon,
  SettingsIcon,
} from '../common/Icons';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const sampleMenuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  {
    id: 'academic',
    label: 'Academic Operations',
    subItems: [
      { id: 'courses', label: 'Master Courses & Modules' },
      { id: 'gradebook', label: 'Gradebook & Assessment', badge: 'Active' },
      { id: 'attendance', label: 'Daily Rollcall Register' },
    ],
  },
  { id: 'roster', label: 'Cohort Roster' },
  { id: 'reports', label: 'Institutional Reports' },
];

/**
 * Desktop institutional Navbar with logo, dropdown menus, quick search action, notifications, and avatar profile.
 */
export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
      <div
        style={{
          border: '1px solid #E2E8F0',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <Navbar
          brandLogo={
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: '#0284C7',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              PW
            </div>
          }
          brandName="Portal Workspace"
          brandSubtitle="Executive Command & Operations Hub"
          menuItems={sampleMenuItems}
          activeItemId={activeTab}
          onItemClick={(id) => setActiveTab(id)}
          actions={
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<SearchIcon size={14} />}
                style={{ height: 36, fontSize: 12, gap: 8 }}
              >
                Quick Search{' '}
                <kbd
                  style={{
                    padding: '1px 5px',
                    background: '#F1F5F9',
                    borderRadius: 4,
                    fontSize: 10,
                  }}
                >
                  ⌘K
                </kbd>
              </Button>

              <button
                type="button"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  color: '#475569',
                }}
                aria-label="Notifications"
              >
                <BellIcon size={18} />
                <span
                  style={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#F43F5E',
                  }}
                />
              </button>

              <Avatar size="sm" name="Alex Morgan" status="online" />
            </div>
          }
        />

        <div
          style={{
            padding: 32,
            backgroundColor: '#F8FAFC',
            minHeight: 180,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            fontSize: 14,
          }}
        >
          <span>
            Active View: <strong>{activeTab.toUpperCase()}</strong>
          </span>
        </div>
      </div>
    );
  },
};

/**
 * Mobile Top Navbar in mobile viewport container (390px) with hamburger menu and expandable slide-down drawer.
 */
export const MobileNavbar: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
      >
        <div
          style={{
            width: 390,
            border: '1px solid #E2E8F0',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            backgroundColor: '#F8FAFC',
            minHeight: 520,
            position: 'relative',
          }}
        >
          <Navbar
            brandLogo={
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: '#0284C7',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                PW
              </div>
            }
            brandName="Portal Workspace"
            menuItems={sampleMenuItems}
            activeItemId={activeTab}
            onItemClick={(id) => setActiveTab(id)}
            actions={
              <button
                type="button"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: '1px solid #E2E8F0',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                }}
                aria-label="Notifications"
              >
                <BellIcon size={16} />
              </button>
            }
          />

          <div style={{ padding: 20 }}>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 12,
                padding: 16,
                border: '1px solid #E2E8F0',
                marginBottom: 16,
              }}
            >
              <h3
                style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 600 }}
              >
                Mobile Viewport Preview
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: '#64748B' }}>
                Tap the hamburger icon in the top header to reveal the full
                slide-down navigation drawer and submenus.
              </p>
            </div>
            <div style={{ fontSize: 13, color: '#94A3B8' }}>
              Selected Menu: <strong>{activeTab}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Mobile Bottom Navigation (Height 80px M3 Baseline) with active pill (#D1F8EF), active icon/text (#3674B5), and notification badge.
 */
export const MobileBottomNavbar: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('attendance');

    const items = [
      { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
      {
        id: 'attendance',
        label: 'Attendance',
        icon: <CalendarIcon size={20} />,
      },
      { id: 'academics', label: 'Academics', icon: <BookOpenIcon size={20} /> },
      {
        id: 'messages',
        label: 'Messages',
        icon: <BellIcon size={20} />,
        badge: 2,
      },
    ];

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
      >
        <div
          style={{
            width: 390,
            border: '1px solid #E2E8F0',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            backgroundColor: '#F8FAFC',
            minHeight: 380,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ padding: 20 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 15, fontWeight: 600 }}>
              Mobile Bottom Navigation
            </h4>
            <p style={{ margin: 0, fontSize: 13, color: '#64748B' }}>
              Designed per Google Stitch M3 80px baseline specification with
              active pill highlight.
            </p>
          </div>

          <BottomNav
            isDocked
            value={activeTab}
            onChange={(val) => setActiveTab(val)}
            items={items}
          />
        </div>
      </div>
    );
  },
};

/**
 * Full Mobile Navigation Shell pairing Top Navbar and Bottom Navigation together.
 */
export const CompleteMobileNavigationShell: Story = {
  render: () => {
    const [topNavId, setTopNavId] = useState('dashboard');
    const [bottomNavId, setBottomNavId] = useState('home');

    const bottomItems = [
      { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
      { id: 'classes', label: 'Classes', icon: <BookOpenIcon size={20} /> },
      { id: 'calendar', label: 'Calendar', icon: <CalendarIcon size={20} /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon size={20} /> },
    ];

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
      >
        <div
          style={{
            width: 390,
            border: '1px solid #CBD5E1',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
            backgroundColor: '#FFFFFF',
            height: 640,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Top Navbar */}
          <Navbar
            brandLogo={
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: '#0284C7',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                PW
              </div>
            }
            brandName="Portal Workspace"
            menuItems={sampleMenuItems}
            activeItemId={topNavId}
            onItemClick={(id) => setTopNavId(id)}
            actions={<Avatar size="sm" name="Alex Morgan" />}
          />

          {/* Body Content */}
          <div
            style={{
              flex: 1,
              padding: 20,
              backgroundColor: '#F8FAFC',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 16,
                padding: 16,
                border: '1px solid #E2E8F0',
                marginBottom: 16,
              }}
            >
              <h4
                style={{ margin: '0 0 6px 0', fontSize: 14, fontWeight: 600 }}
              >
                Active Screen
              </h4>
              <p style={{ margin: 0, fontSize: 13, color: '#64748B' }}>
                Top Navigation: <strong>{topNavId}</strong>
                <br />
                Bottom Tab: <strong>{bottomNavId}</strong>
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <BottomNav
            isDocked
            value={bottomNavId}
            onChange={(val) => setBottomNavId(val)}
            items={bottomItems}
          />
        </div>
      </div>
    );
  },
};
