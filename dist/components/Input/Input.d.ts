import { default as React } from 'react';
export type InputSize = 'sm' | 'md' | 'lg';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    inputSize?: InputSize;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isRequired?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
