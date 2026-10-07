import { default as React } from 'react';
export interface RadioGroupProps {
    name: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    value: string;
    label?: React.ReactNode;
    description?: React.ReactNode;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
