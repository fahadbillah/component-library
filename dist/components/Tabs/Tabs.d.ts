import { default as React } from 'react';
export type TabsVariant = 'pill' | 'underline' | 'segmented';
export type TabsSize = 'sm' | 'md' | 'lg';
export interface TabItem {
    id: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    disabled?: boolean;
}
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabs: TabItem[];
    activeTab?: string;
    defaultActiveTab?: string;
    onChange?: (id: string) => void;
    variant?: TabsVariant;
    size?: TabsSize;
    fullWidth?: boolean;
    scrollable?: boolean;
    showScrollButtons?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    tabId: string;
    activeTabId: string;
}
export declare const TabPanel: React.ForwardRefExoticComponent<TabPanelProps & React.RefAttributes<HTMLDivElement>>;
