import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { ChevronDownIcon } from '../common/Icons';

export interface AccordionItemData {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  content: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> {
  items: AccordionItemData[];
  /** Allow multiple items to be expanded simultaneously */
  allowMultiple?: boolean;
  /** IDs of initially expanded items */
  defaultExpandedIds?: string[];
  /** Controlled expanded IDs */
  expandedIds?: string[];
  /** Callback fired when expanded state changes */
  onChange?: (expandedIds: string[]) => void;
  /** Visual variant */
  variant?: 'bordered' | 'card' | 'ghost';
  /** Density size */
  size?: 'sm' | 'md' | 'lg';
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      allowMultiple = false,
      defaultExpandedIds = [],
      expandedIds: controlledExpandedIds,
      onChange,
      variant = 'bordered',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalExpanded, setInternalExpanded] =
      useState<string[]>(defaultExpandedIds);
    const isControlled = controlledExpandedIds !== undefined;
    const currentExpanded = isControlled
      ? controlledExpandedIds
      : internalExpanded;

    const handleToggle = (itemId: string, disabled?: boolean) => {
      if (disabled) return;

      let next: string[];
      if (currentExpanded.includes(itemId)) {
        next = currentExpanded.filter((id) => id !== itemId);
      } else {
        next = allowMultiple ? [...currentExpanded, itemId] : [itemId];
      }

      if (!isControlled) {
        setInternalExpanded(next);
      }
      onChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={`${styles.accordion} ${styles[variant]} ${styles[size]} ${className}`.trim()}
        {...props}
      >
        {items.map((item) => {
          const isExpanded = currentExpanded.includes(item.id);
          const headerId = `accordion-header-${item.id}`;
          const panelId = `accordion-panel-${item.id}`;

          return (
            <div
              key={item.id}
              className={`${styles.item} ${isExpanded ? styles.itemExpanded : ''} ${
                item.disabled ? styles.itemDisabled : ''
              }`.trim()}
            >
              <button
                type="button"
                id={headerId}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => handleToggle(item.id, item.disabled)}
                className={styles.headerButton}
              >
                {item.icon && (
                  <span className={styles.itemIcon}>{item.icon}</span>
                )}
                <div className={styles.titleWrapper}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  {item.subtitle && (
                    <span className={styles.itemSubtitle}>{item.subtitle}</span>
                  )}
                </div>
                {item.badge && (
                  <span className={styles.itemBadge}>{item.badge}</span>
                )}
                <span
                  className={`${styles.chevronWrapper} ${
                    isExpanded ? styles.chevronExpanded : ''
                  }`.trim()}
                  aria-hidden="true"
                >
                  <ChevronDownIcon size={size === 'sm' ? 14 : 18} />
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                hidden={!isExpanded}
                className={`${styles.panel} ${isExpanded ? styles.panelVisible : ''}`.trim()}
              >
                <div className={styles.panelContent}>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
