import React, { useState } from 'react';
import styles from './Banner.module.css';
import {
  InfoIcon,
  CheckIcon,
  AlertTriangleIcon,
  AlertCircleIcon,
  CloseIcon,
} from '../common/Icons';

export type BannerVariant =
  'info' | 'success' | 'warning' | 'danger' | 'neutral';

export interface BannerProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> {
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

const defaultIcons: Record<BannerVariant, React.ReactNode> = {
  info: <InfoIcon size={20} />,
  success: <CheckIcon size={18} />,
  warning: <AlertTriangleIcon size={20} />,
  danger: <AlertCircleIcon size={20} />,
  neutral: <InfoIcon size={20} />,
};

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      variant = 'info',
      title,
      children,
      icon,
      action,
      dismissible = false,
      onDismiss,
      appearance = 'subtle',
      className = '',
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    const resolvedIcon = icon === false ? null : icon || defaultIcons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={`${styles.banner} ${styles[variant]} ${styles[appearance]} ${className}`.trim()}
        {...props}
      >
        {resolvedIcon && (
          <div className={styles.iconWrapper}>{resolvedIcon}</div>
        )}
        <div className={styles.content}>
          {title && <div className={styles.title}>{title}</div>}
          {children && <div className={styles.description}>{children}</div>}
        </div>
        {action && <div className={styles.actionWrapper}>{action}</div>}
        {dismissible && (
          <button
            type="button"
            className={styles.dismissButton}
            aria-label="Dismiss banner"
            onClick={handleDismiss}
          >
            <CloseIcon size={16} />
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = 'Banner';
