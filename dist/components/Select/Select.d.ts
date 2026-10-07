import { default as React } from 'react';
export type SelectSize = 'sm' | 'md' | 'lg';
export interface SelectOption {
    value: string | number;
    label: string;
    description?: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
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
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
