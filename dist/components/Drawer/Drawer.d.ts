import { default as React } from 'react';
export type DrawerPlacement = 'left' | 'right';
export type DrawerSize = 'sm' | 'md' | 'lg';
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    placement?: DrawerPlacement;
    size?: DrawerSize;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
    showCloseButton?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const Drawer: React.FC<DrawerProps>;
