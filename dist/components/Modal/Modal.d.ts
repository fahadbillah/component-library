import { default as React } from 'react';
export type ModalSize = 'sm' | 'md' | 'lg';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    size?: ModalSize;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
    showCloseButton?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
