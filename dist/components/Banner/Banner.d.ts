import { default as React } from 'react';
export type BannerVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export interface BannerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Visual sentiment / variant */
    variant?: BannerVariant;
    /** Primary headline or title */
    title?: React.ReactNode;
    /** Main message description */
    children?: React.ReactNode;
    /** Custom icon override (or false to hide icon) */
    icon?: React.ReactNode | false;
    /** Action slot (e.g. Button or link) */
    action?: React.ReactNode;
    /** Whether the banner can be dismissed */
    dismissible?: boolean;
    /** Callback fired when dismissed */
    onDismiss?: () => void;
    /** Visual presentation style */
    appearance?: 'subtle' | 'card' | 'filled';
}
export declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;
