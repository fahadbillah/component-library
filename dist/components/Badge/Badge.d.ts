import { default as React } from 'react';
export type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    withDot?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
