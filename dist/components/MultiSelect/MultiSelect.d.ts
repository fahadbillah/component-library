import { default as React } from 'react';
import { ChipShape } from '../Chip';
import { AvatarProps } from '../Avatar';
export type MultiSelectSize = 'sm' | 'md' | 'lg';
export interface MultiSelectOption {
    value: string;
    label: string;
    description?: string;
    badge?: string;
    badgeVariant?: 'primary' | 'success' | 'warning' | 'neutral';
    avatar?: Partial<AvatarProps>;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface MultiSelectProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    errorMessage?: string;
    options: MultiSelectOption[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (values: string[], selectedOptions: MultiSelectOption[]) => void;
    size?: MultiSelectSize;
    /** Shape style for the selected chips */
    chipShape?: ChipShape;
    disabled?: boolean;
    isRequired?: boolean;
    isSearchable?: boolean;
    className?: string;
    id?: string;
    maxDisplayedChips?: number;
}
export declare const MultiSelect: React.FC<MultiSelectProps>;
