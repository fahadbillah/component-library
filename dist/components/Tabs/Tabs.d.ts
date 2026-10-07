import { default as React } from 'react';
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
export declare const Tabs: React.FC<TabsProps>;
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    tabId: string;
    activeTabId: string;
}
export declare const TabPanel: React.FC<TabPanelProps>;
