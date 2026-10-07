import React from 'react';
import styles from './ProgressBar.module.css';

export type ProgressBarVariant =
  'primary' | 'secondary' | 'success' | 'warning' | 'danger';

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

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      min = 0,
      max = 100,
      variant = 'primary',
      size = 'md',
      label,
      showValue = false,
      indeterminate = false,
      striped = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(Math.max(value, min), max);
    const percentage =
      max > min ? Math.round(((clampedValue - min) / (max - min)) * 100) : 0;

    return (
      <div
        ref={ref}
        className={`${styles.container} ${className}`.trim()}
        {...props}
      >
        {(label || showValue) && (
          <div className={styles.labelRow}>
            {label && <span className={styles.label}>{label}</span>}
            {showValue && !indeterminate && (
              <span className={styles.valueText}>{percentage}%</span>
            )}
          </div>
        )}

        <div
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={min}
          aria-valuemax={max}
          className={`${styles.track} ${styles[size]}`}
        >
          <div
            className={`${styles.fill} ${styles[variant]} ${
              indeterminate ? styles.indeterminate : ''
            } ${striped ? styles.striped : ''}`}
            style={{ width: indeterminate ? undefined : `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
