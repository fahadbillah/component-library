import { default as React } from 'react';
export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Title header for the empty state */
    title: React.ReactNode;
    /** Explanatory description */
    description?: React.ReactNode;
    /** Primary action slot (e.g., Button) */
    action?: React.ReactNode;
    /** Secondary action slot */
    secondaryAction?: React.ReactNode;
    /** Custom icon illustration or slot */
    icon?: React.ReactNode;
    /** Bordered card container style */
    bordered?: boolean;
    /** Density size */
    size?: 'sm' | 'md' | 'lg';
}
export declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;
