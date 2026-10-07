import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Navbar, BottomNav } from './Navigation';
import {
  HomeIcon,
  ClipboardCheckIcon,
  BookOpenIcon,
  MessageDotsIcon,
  BellIcon,
  SearchIcon,
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

const stitchMasterTabs = [
  { id: 'home', label: 'Home', icon: <HomeIcon size={20} /> },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: <ClipboardCheckIcon size={20} />,
  },
  { id: 'academics', label: 'Academics', icon: <BookOpenIcon size={20} /> },
  {
    id: 'messages',
    label: 'Messages',
    icon: <MessageDotsIcon size={20} />,
    badge: 2,
  },
];

/**
 * Desktop institutional Navbar with logo, dropdown menus, quick search action, notifications, and avatar profile.
 * Stitch Master Component Library Specification:
 * - Height: 64px
 * - Surface: Pure white with 1px border (#A1E3F9)
 * - Active State: Pill highlight container (#D1F8EF) with primary (#3674B5) text and icon
 * - Submenu: 12px rounded popover with #A1E3F9 border and maritime elevation
 */
export const Default: Story = {
  name: 'Desktop Navbar (Stitch Spec)',
  render: () => {
    const [activeTab, setActiveTab] = useState('academic');

    return (
      <div
        style={{
          border: '1px solid #A1E3F9',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 4px 16px -2px rgba(54, 116, 181, 0.08)',
        }}
      >
        <Navbar
          brandLogo={
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: '#3674B5',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
                boxShadow: '0 1px 3px rgba(54, 116, 181, 0.25)',
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
                style={{
                  height: 36,
                  fontSize: 12,
                  gap: 8,
                  borderColor: '#A1E3F9',
                  backgroundColor: '#FFFFFF',
                }}
              >
                Quick Search{' '}
                <kbd
                  style={{
                    padding: '1px 5px',
                    background: '#EEF5F4',
                    borderRadius: 4,
                    fontSize: 10,
                    color: '#3674B5',
                    border: '1px solid #A1E3F9',
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
                  border: '1px solid #A1E3F9',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  color: '#3674B5',
                }}
                aria-label="Notifications"
              >
                <BellIcon size={18} />
                <span
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    width: 7,
                    height: 7,
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
            backgroundColor: '#F4FBFA',
            minHeight: 180,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            fontSize: 14,
          }}
        >
          <span>
            Active View:{' '}
            <strong style={{ color: '#115B9B' }}>
              {activeTab.toUpperCase()}
            </strong>
          </span>
        </div>
      </div>
    );
  },
};

/**
 * Mobile Top Navbar with hamburger menu toggle and full overlay drawer.
 */
export const MobileTopNavbar: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
      >
        <div
          style={{
            width: 390,
            border: '1px solid #A1E3F9',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(54, 116, 181, 0.1)',
            backgroundColor: '#F4FBFA',
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
                  background: '#3674B5',
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
                  border: '1px solid #A1E3F9',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3674B5',
                  cursor: 'pointer',
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
                border: '1px solid #A1E3F9',
                marginBottom: 16,
              }}
            >
              <h3
                style={{
                  margin: '0 0 8px 0',
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#0F172A',
                }}
              >
                Mobile Header Preview
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: '#64748B' }}>
                Tap the hamburger icon in the top header to reveal the full
                slide-down navigation drawer and submenus.
              </p>
            </div>
            <div style={{ fontSize: 13, color: '#64748B' }}>
              Selected Menu:{' '}
              <strong style={{ color: '#115B9B' }}>{activeTab}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Mobile Bottom Tab Bar (Height: 80px M3 Baseline)
 * Stitch Master Component Library Section 07 Specification:
 * - Height: 80px
 * - Surface: Pure white with 1px border (#A1E3F9)
 * - Active State: Pill shape with soft highlight (#D1F8EF) and primary deep teal/blue text & icon (#3674B5)
 * - Badges: Notification count pill (e.g. Messages: 2)
 * - Icons: Home, Attendance (ClipboardCheck), Academics (BookOpen), Messages (CommentDots)
 */
export const MobileBottomNavbar: Story = {
  name: 'Mobile Bottom Tab Bar (Section 07 Spec)',
  render: () => {
    const [activeTab, setActiveTab] = useState('attendance');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          padding: '20px 0',
        }}
      >
        {/* Floating Card Variant (As showcased in Stitch Master Component Library Section 07) */}
        <div style={{ width: '100%', maxWidth: 420 }}>
          <div
            style={{
              marginBottom: 12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#334155',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Compact Mobile Bottom Tab Bar (Height: 80px)
            </span>
            <span
              style={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: '#115B9B',
                background: '#D1F8EF',
                border: '1px solid #A1E3F9',
                padding: '2px 8px',
                borderRadius: 4,
                fontWeight: 600,
              }}
            >
              Stitch Master Spec
            </span>
          </div>

          <BottomNav
            value={activeTab}
            onChange={(val) => setActiveTab(val)}
            items={stitchMasterTabs}
          />
        </div>

        {/* Viewport In-situ Preview (Inside Mobile Screen 390px) */}
        <div
          style={{
            width: 390,
            border: '1px solid #A1E3F9',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: '0 12px 28px rgba(54, 116, 181, 0.1)',
            backgroundColor: '#F4FBFA',
            minHeight: 360,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ padding: 20 }}>
            <h4
              style={{
                margin: '0 0 6px 0',
                fontSize: 15,
                fontWeight: 700,
                color: '#0F172A',
              }}
            >
              In-App Docked Preview
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: '#64748B',
                lineHeight: 1.5,
              }}
            >
              Docked flush at the bottom edge with active pill (
              <code style={{ color: '#115B9B' }}>#D1F8EF</code>), primary
              highlight (<code style={{ color: '#115B9B' }}>#3674B5</code>), and
              notification counters.
            </p>
            <div
              style={{
                marginTop: 24,
                padding: 12,
                background: '#FFFFFF',
                borderRadius: 12,
                border: '1px solid #A1E3F9',
                fontSize: 13,
                color: '#475569',
              }}
            >
              Active Tab:{' '}
              <strong style={{ color: '#115B9B' }}>
                {activeTab.toUpperCase()}
              </strong>
            </div>
          </div>

          <BottomNav
            isDocked
            value={activeTab}
            onChange={(val) => setActiveTab(val)}
            items={stitchMasterTabs}
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
    const [bottomNavId, setBottomNavId] = useState('attendance');

    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
      >
        <div
          style={{
            width: 390,
            border: '1px solid #A1E3F9',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(54, 116, 181, 0.12)',
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
                  background: '#3674B5',
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
              backgroundColor: '#F4FBFA',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 16,
                padding: 16,
                border: '1px solid #A1E3F9',
                marginBottom: 16,
              }}
            >
              <h4
                style={{
                  margin: '0 0 6px 0',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#0F172A',
                }}
              >
                Active Screen
              </h4>
              <p style={{ margin: 0, fontSize: 13, color: '#64748B' }}>
                Top Navigation:{' '}
                <strong style={{ color: '#115B9B' }}>{topNavId}</strong>
                <br />
                Bottom Tab:{' '}
                <strong style={{ color: '#115B9B' }}>{bottomNavId}</strong>
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <BottomNav
            isDocked
            value={bottomNavId}
            onChange={(val) => setBottomNavId(val)}
            items={stitchMasterTabs}
          />
        </div>
      </div>
    );
  },
};
