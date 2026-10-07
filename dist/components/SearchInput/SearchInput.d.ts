import { default as React } from 'react';
export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    shortcutHint?: string;
    onClear?: () => void;
}
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
