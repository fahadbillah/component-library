import React, { forwardRef, useState, useRef, useEffect, useId } from 'react';
import styles from './Select.module.css';
import { ChevronDownIcon, CheckIcon } from '../common/Icons';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'value' | 'defaultValue' | 'onChange'
> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  selectSize?: SelectSize;
  options?: SelectOption[];
  placeholder?: string;
  isRequired?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange?: (value: string | number, option: SelectOption) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      selectSize = 'md',
      options = [],
      placeholder,
      isRequired = false,
      disabled = false,
      value: controlledValue,
      defaultValue,
      onChange,
      onValueChange,
      id,
      className,
      name,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const triggerId = `${selectId}-trigger`;
    const listboxId = `${selectId}-listbox`;
    const containerRef = useRef<HTMLDivElement>(null);
    const hiddenSelectRef = useRef<HTMLSelectElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string | number>(
      controlledValue !== undefined
        ? controlledValue
        : defaultValue !== undefined
          ? defaultValue
          : ''
    );
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue]);

    // Close on click outside
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const hasError = Boolean(errorMessage);
    const selectedOption = options.find(
      (opt) => String(opt.value) === String(currentValue)
    );

    const triggerNativeChange = (newVal: string | number) => {
      if (hiddenSelectRef.current) {
        hiddenSelectRef.current.value = String(newVal);
        const event = new Event('change', { bubbles: true });
        hiddenSelectRef.current.dispatchEvent(event);
      }
    };

    const handleSelectOption = (option: SelectOption) => {
      if (option.disabled || disabled) return;

      if (!isControlled) {
        setInternalValue(option.value);
      }

      onValueChange?.(option.value, option);
      triggerNativeChange(option.value);
      setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          const curIdx = options.findIndex(
            (opt) => String(opt.value) === String(currentValue)
          );
          setFocusedIndex(curIdx >= 0 ? curIdx : 0);
        } else {
          const delta = e.key === 'ArrowDown' ? 1 : -1;
          const nextIdx =
            (focusedIndex + delta + options.length) % options.length;
          setFocusedIndex(nextIdx);
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && options[focusedIndex]) {
          handleSelectOption(options[focusedIndex]);
        } else {
          setIsOpen((prev) => !prev);
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === 'Tab') {
        setIsOpen(false);
      }
    };

    const containerClasses = [
      styles.container,
      styles[`size-${selectSize}`],
      hasError ? styles.hasError : '',
      disabled ? styles.disabled : '',
      isOpen ? styles.isOpen : '',
      className || '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={containerRef} className={containerClasses}>
        {label && (
          <label
            id={`${selectId}-label`}
            htmlFor={triggerId}
            className={styles.label}
          >
            {label}
            {isRequired && <span className={styles.required}>*</span>}
          </label>
        )}

        {/* Hidden native select for form serialization and standard events */}
        <select
          ref={(node) => {
            hiddenSelectRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref)
              (
                ref as React.MutableRefObject<HTMLSelectElement | null>
              ).current = node;
          }}
          id={selectId}
          name={name}
          value={currentValue}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden="true"
          className={styles.hiddenNativeSelect}
          onChange={(e) => {
            if (!isControlled) {
              setInternalValue(e.target.value);
            }
            onChange?.(e);
          }}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom styled trigger button */}
        <div className={styles.triggerWrapper}>
          <button
            type="button"
            id={triggerId}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-labelledby={
              label ? `${selectId}-label ${triggerId}` : undefined
            }
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${selectId}-error`
                : helperText
                  ? `${selectId}-helper`
                  : undefined
            }
            disabled={disabled}
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
            onKeyDown={handleKeyDown}
            className={styles.trigger}
          >
            <span
              className={`${styles.selectedLabel} ${
                !selectedOption ? styles.placeholder : ''
              }`.trim()}
            >
              {selectedOption
                ? selectedOption.label
                : placeholder || 'Select an option...'}
            </span>
            <span
              className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ''}`.trim()}
              aria-hidden="true"
            >
              <ChevronDownIcon size={16} />
            </span>
          </button>

          {/* Custom Styled Stitch Menu Dropdown */}
          {isOpen && (
            <ul
              id={listboxId}
              role="listbox"
              aria-labelledby={`${selectId}-label`}
              className={styles.menu}
            >
              {options.map((opt, index) => {
                const isSelected = String(opt.value) === String(currentValue);
                const isFocused = index === focusedIndex;

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={opt.disabled}
                    className={`${styles.menuItem} ${
                      isSelected ? styles.itemSelected : ''
                    } ${isFocused ? styles.itemFocused : ''} ${
                      opt.disabled ? styles.itemDisabled : ''
                    }`.trim()}
                    onClick={() => handleSelectOption(opt)}
                    onMouseEnter={() => setFocusedIndex(index)}
                  >
                    <div className={styles.itemText}>
                      <span className={styles.itemLabel}>{opt.label}</span>
                      {opt.description && (
                        <span className={styles.itemDescription}>
                          {opt.description}
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <span className={styles.checkSlot} aria-hidden="true">
                        <CheckIcon size={14} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {hasError && (
          <span
            id={`${selectId}-error`}
            className={styles.errorMessage}
            role="alert"
          >
            {errorMessage}
          </span>
        )}
        {!hasError && helperText && (
          <span id={`${selectId}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
