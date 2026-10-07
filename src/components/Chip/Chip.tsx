import React from 'react';
import styles from './Chip.module.css';
import { CloseIcon } from '../common/Icons';

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

export const Chip: React.FC<ChipProps> = ({
  label,
  avatar,
  icon,
  variant = 'neutral',
  size = 'md',
  onRemove,
  disabled = false,
  className,
  ...props
}) => {
  const chipClasses = [
    styles.chip,
    styles[variant],
    styles[size],
    onRemove ? styles.removable : '',
    disabled ? styles.disabled : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={chipClasses} role="status" {...props}>
      {avatar && <span className={styles.avatarSlot}>{avatar}</span>}
      {!avatar && icon && <span className={styles.iconSlot}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {onRemove && (
        <button
          type="button"
          aria-label={`Remove ${label}`}
          className={styles.removeButton}
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled && onRemove) {
              onRemove();
            }
          }}
          disabled={disabled}
        >
          <CloseIcon size={12} />
        </button>
      )}
    </div>
  );
};
