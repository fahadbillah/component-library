import { default as React } from 'react';
export type TrendDirection = 'up' | 'down' | 'neutral';
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string | number;
    description?: string;
    trend?: {
        value: string;
        direction: TrendDirection;
    };
    icon?: React.ReactNode;
    highlighted?: boolean;
}
export declare const StatCard: React.FC<StatCardProps>;
