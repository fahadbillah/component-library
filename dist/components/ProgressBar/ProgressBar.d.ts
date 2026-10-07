import { default as React } from 'react';
export type ProgressBarVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Current numerical value (between min and max) */
    value?: number;
    /** Minimum value (default 0) */
    min?: number;
    /** Maximum value (default 100) */
    max?: number;
    /** Visual sentiment / theme */
    variant?: ProgressBarVariant;
    /** Density / thickness size */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Label text displayed alongside or inside the progress bar */
    label?: React.ReactNode;
    /** Show formatted percentage value */
    showValue?: boolean;
    /** Indeterminate loading animation mode */
    indeterminate?: boolean;
    /** Animated diagonal stripes */
    striped?: boolean;
}
export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
