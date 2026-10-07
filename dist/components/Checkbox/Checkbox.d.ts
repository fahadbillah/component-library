import { default as React } from 'react';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: React.ReactNode;
    description?: React.ReactNode;
    indeterminate?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
