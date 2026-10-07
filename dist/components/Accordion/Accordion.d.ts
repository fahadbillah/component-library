import { default as React } from 'react';
export interface AccordionItemData {
    id: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    content: React.ReactNode;
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items: AccordionItemData[];
    /** Allow multiple items to be expanded simultaneously */
    allowMultiple?: boolean;
    /** IDs of initially expanded items */
    defaultExpandedIds?: string[];
    /** Controlled expanded IDs */
    expandedIds?: string[];
    /** Callback fired when expanded state changes */
    onChange?: (expandedIds: string[]) => void;
    /** Visual variant */
    variant?: 'bordered' | 'card' | 'ghost';
    /** Density size */
    size?: 'sm' | 'md' | 'lg';
}
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
