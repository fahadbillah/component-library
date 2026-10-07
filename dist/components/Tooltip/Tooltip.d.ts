import { default as React } from 'react';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    /** The content displayed inside the tooltip bubble */
    content: React.ReactNode;
    /** Anchor child element */
    children: React.ReactElement;
    /** Positioning placement relative to target */
    placement?: TooltipPlacement;
    /** Delay in milliseconds before showing tooltip */
    delay?: number;
    /** Color theme */
    theme?: 'dark' | 'light';
    /** Disabled state */
    disabled?: boolean;
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
