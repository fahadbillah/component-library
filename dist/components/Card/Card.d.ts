import { default as React } from 'react';
export type CardElevation = 1 | 2 | 3;
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    elevation?: CardElevation;
    padding?: CardPadding;
    isInteractive?: boolean;
    children: React.ReactNode;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
}
export declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
export declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
}
export declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
