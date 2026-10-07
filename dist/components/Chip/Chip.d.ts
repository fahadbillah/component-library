import { default as React } from 'react';
export type ChipVariant = 'neutral' | 'primary' | 'tonal' | 'outline' | 'success' | 'warning' | 'danger';
export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipShape = 'pill' | 'rounded';
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    avatar?: React.ReactNode;
    icon?: React.ReactNode;
    variant?: ChipVariant;
    size?: ChipSize;
    shape?: ChipShape;
    selected?: boolean;
    count?: number | string;
    onRemove?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const Chip: React.FC<ChipProps>;
