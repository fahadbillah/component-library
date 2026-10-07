import { default as React } from 'react';
export interface BottomNavigationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    label: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    badge?: string | number;
    isActive?: boolean;
}
export declare const BottomNavigationItem: React.ForwardRefExoticComponent<BottomNavigationItemProps & React.RefAttributes<HTMLButtonElement>>;
export interface BottomNavItemConfig {
    id: string;
    label: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    badge?: string | number;
}
export interface BottomNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    items?: BottomNavItemConfig[];
    children?: React.ReactNode;
    /** When true, docks flush to the bottom container edge without rounded corners or outer borders */
    isDocked?: boolean;
}
export declare const BottomNavigation: React.ForwardRefExoticComponent<BottomNavigationProps & React.RefAttributes<HTMLElement>>;
export declare const BottomNav: React.ForwardRefExoticComponent<BottomNavigationProps & React.RefAttributes<HTMLElement>>;
export declare const BottomNavItem: React.ForwardRefExoticComponent<BottomNavigationItemProps & React.RefAttributes<HTMLButtonElement>>;
export type BottomNavProps = BottomNavigationProps;
export type BottomNavItemProps = BottomNavigationItemProps;
export interface NavigationRailItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    icon: React.ReactNode;
    title?: string;
    badge?: string | number;
    isActive?: boolean;
}
export declare const NavigationRailItem: React.ForwardRefExoticComponent<NavigationRailItemProps & React.RefAttributes<HTMLButtonElement>>;
export interface NavigationRailItemConfig {
    id: string;
    icon: React.ReactNode;
    title?: string;
    badge?: string | number;
}
export interface NavigationRailProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
    theme?: 'dark' | 'light';
    orientation?: 'vertical' | 'horizontal';
    isDocked?: boolean;
    brand?: React.ReactNode;
    brandTitle?: string;
    footer?: React.ReactNode;
    value?: string;
    onChange?: (value: string) => void;
    items?: NavigationRailItemConfig[];
    children?: React.ReactNode;
}
export declare const NavigationRail: React.ForwardRefExoticComponent<NavigationRailProps & React.RefAttributes<HTMLElement>>;
export interface BreadcrumbItemConfig {
    id: string;
    label: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    isCurrent?: boolean;
    onClick?: () => void;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    variant?: 'primary' | 'subtle' | 'plain';
    separator?: React.ReactNode;
    items?: BreadcrumbItemConfig[];
    children?: React.ReactNode;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export interface MobileWayfindingStep {
    id: string;
    label: string;
    href?: string;
}
export interface MobileWayfindingProps extends React.HTMLAttributes<HTMLDivElement> {
    parentLabel: string;
    onBack?: () => void;
    currentLabel: string;
    path?: MobileWayfindingStep[];
    currentStepIndex?: number;
    totalSteps?: number;
    onStepClick?: (step: MobileWayfindingStep, index: number) => void;
}
export declare const MobileWayfinding: React.ForwardRefExoticComponent<MobileWayfindingProps & React.RefAttributes<HTMLDivElement>>;
export interface NavigationSubItemConfig {
    id: string;
    label: string;
    href?: string;
    badge?: string | number;
    onClick?: () => void;
}
export interface NavigationMenuItemConfig {
    id: string;
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    subItems?: NavigationSubItemConfig[];
    onClick?: () => void;
}
export interface AppNavbarProps extends React.HTMLAttributes<HTMLElement> {
    brandLogo?: React.ReactNode;
    brandName?: React.ReactNode;
    brandSubtitle?: React.ReactNode;
    brandHref?: string;
    menuItems?: NavigationMenuItemConfig[];
    activeItemId?: string;
    onItemClick?: (id: string) => void;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const AppNavbar: React.ForwardRefExoticComponent<AppNavbarProps & React.RefAttributes<HTMLElement>>;
