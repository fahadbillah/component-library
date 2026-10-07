import { default as React } from 'react';
export type SelectSize = 'sm' | 'md' | 'lg';
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    selectSize?: SelectSize;
    options?: SelectOption[];
    placeholder?: string;
    isRequired?: boolean;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
