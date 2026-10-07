import React, { useState } from 'react';
import styles from './Tabs.module.css';

export type TabsVariant = 'pill' | 'underline';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  defaultActiveTab?: string;
  onChange?: (id: string) => void;
  variant?: TabsVariant;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  defaultActiveTab,
  onChange,
  variant = 'pill',
  fullWidth = false,
  className,
  children,
}) => {
  const [internalActive, setInternalActive] = useState<string>(
    activeTab || defaultActiveTab || tabs[0]?.id || ''
  );

  const currentActive = activeTab !== undefined ? activeTab : internalActive;

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;
    setInternalActive(id);
    onChange?.(id);
  };

  const listClasses = [
    styles.tabList,
    styles[`variant-${variant}`],
    fullWidth ? styles.fullWidth : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <div role="tablist" className={listClasses}>
        {tabs.map((tab) => {
          const isActive = tab.id === currentActive;
          const tabClasses = [styles.tab, isActive ? styles.tabActive : '']
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
              className={tabClasses}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={styles.badge}>{tab.badge}</span>
              )}
            </button>
          );
        })}
      </div>
      {children}
    </div>
  );
};

Tabs.displayName = 'Tabs';

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tabId: string;
  activeTabId: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  tabId,
  activeTabId,
  className,
  children,
  ...props
}) => {
  if (tabId !== activeTabId) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${tabId}`}
      aria-labelledby={`tab-${tabId}`}
      className={`${styles.panel} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

TabPanel.displayName = 'TabPanel';
