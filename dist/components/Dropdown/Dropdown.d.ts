import { default as React } from 'react';
import { AvatarProps } from '../Avatar';
export type DropdownSize = 'sm' | 'md' | 'lg';
export interface DropdownOption {
    value: string;
    label: string;
    description?: string;
    avatar?: Partial<AvatarProps>;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface DropdownProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    options: DropdownOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string, option: DropdownOption) => void;
    size?: DropdownSize;
    disabled?: boolean;
    isRequired?: boolean;
    className?: string;
    id?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
