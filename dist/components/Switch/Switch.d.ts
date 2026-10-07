import { default as React } from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: React.ReactNode;
    description?: React.ReactNode;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
