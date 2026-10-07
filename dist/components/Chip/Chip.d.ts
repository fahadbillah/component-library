import { default as React } from 'react';
export type ChipVariant = 'neutral' | 'primary' | 'outline';
export type ChipSize = 'sm' | 'md';
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    avatar?: React.ReactNode;
    icon?: React.ReactNode;
    variant?: ChipVariant;
    size?: ChipSize;
    onRemove?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const Chip: React.FC<ChipProps>;
