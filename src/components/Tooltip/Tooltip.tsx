import React, { useState, useRef, useEffect, useId } from 'react';
import styles from './Tooltip.module.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** The content displayed inside the tooltip bubble */
  content: React.ReactNode;
  /** Anchor child element */
  children: React.ReactElement;
  /** Positioning placement relative to target */
  placement?: TooltipPlacement;
  /** Delay in milliseconds before showing tooltip */
  delay?: number;
  /** Color theme */
  theme?: 'dark' | 'light';
  /** Disabled state */
  disabled?: boolean;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  delay = 150,
  theme = 'dark',
  disabled = false,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const showTooltip = () => {
    if (disabled || !content) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const childProps = children.props as Record<string, unknown>;

  const trigger = React.cloneElement(
    children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
    {
      'aria-describedby': isVisible ? tooltipId : undefined,
      onMouseEnter: (e: React.MouseEvent) => {
        showTooltip();
        if (typeof childProps.onMouseEnter === 'function') {
          (childProps.onMouseEnter as (e: React.MouseEvent) => void)(e);
        }
      },
      onMouseLeave: (e: React.MouseEvent) => {
        hideTooltip();
        if (typeof childProps.onMouseLeave === 'function') {
          (childProps.onMouseLeave as (e: React.MouseEvent) => void)(e);
        }
      },
      onFocus: (e: React.FocusEvent) => {
        showTooltip();
        if (typeof childProps.onFocus === 'function') {
          (childProps.onFocus as (e: React.FocusEvent) => void)(e);
        }
      },
      onBlur: (e: React.FocusEvent) => {
        hideTooltip();
        if (typeof childProps.onBlur === 'function') {
          (childProps.onBlur as (e: React.FocusEvent) => void)(e);
        }
      },
    }
  );

  return (
    <div className={styles.wrapper}>
      {trigger}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`${styles.tooltip} ${styles[placement]} ${styles[theme]} ${className}`.trim()}
        >
          <div className={styles.content}>{content}</div>
          <span className={styles.arrow} aria-hidden="true" />
        </div>
      )}
    </div>
  );
};
