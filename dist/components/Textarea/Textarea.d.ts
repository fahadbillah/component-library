import { default as React } from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    isRequired?: boolean;
    showCharCount?: boolean;
    maxLength?: number;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
