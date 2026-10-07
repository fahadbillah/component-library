import React from 'react';
import styles from './EmptyState.module.css';
import { InboxIcon } from '../common/Icons';

export interface EmptyStateProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> {
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

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      title,
      description,
      action,
      secondaryAction,
      icon,
      bordered = false,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const resolvedIcon =
      icon === undefined ? (
        <InboxIcon size={size === 'sm' ? 32 : size === 'lg' ? 48 : 40} />
      ) : (
        icon
      );

    return (
      <div
        ref={ref}
        className={`${styles.emptyState} ${styles[size]} ${
          bordered ? styles.bordered : ''
        } ${className}`.trim()}
        {...props}
      >
        {resolvedIcon && (
          <div className={styles.iconCircle}>{resolvedIcon}</div>
        )}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {(action || secondaryAction) && (
          <div className={styles.actions}>
            {action}
            {secondaryAction}
          </div>
        )}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
