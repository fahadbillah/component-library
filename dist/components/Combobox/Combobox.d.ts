import { default as React } from 'react';
export interface ComboboxOption {
    value: string;
    label: string;
    group?: string;
    badge?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface ComboboxProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    options: ComboboxOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string, selectedOption: ComboboxOption | undefined) => void;
    disabled?: boolean;
    isRequired?: boolean;
    className?: string;
    id?: string;
}
export declare const Combobox: React.FC<ComboboxProps>;
