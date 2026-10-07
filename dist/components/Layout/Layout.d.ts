import { default as React } from 'react';
export interface PageShellProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
/**
 * PageShell provides the outer full-viewport flex column shell that pins
 * footers to the bottom and applies base background styling.
 */
export declare const PageShell: React.ForwardRefExoticComponent<PageShellProps & React.RefAttributes<HTMLDivElement>>;
export type ContainerMaxWidth = 'standard' | 'narrow' | 'compact' | 'full';
export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: ContainerMaxWidth;
    as?: 'div' | 'main' | 'section' | 'article' | 'header' | 'footer' | 'nav';
    children?: React.ReactNode;
}
/**
 * PageContainer provides horizontal guardrail boundary with responsive
 * padding (16px mobile, 24px tablet, 32px desktop) and max-width clamping.
 */
export declare const PageContainer: React.ForwardRefExoticComponent<PageContainerProps & React.RefAttributes<HTMLElement>>;
export interface PageBodyProps extends React.HTMLAttributes<HTMLElement> {
    as?: 'main' | 'div' | 'section';
    children?: React.ReactNode;
}
/**
 * PageBody provides the flex-1 auto expandable content slot between
 * header and footer with standardized vertical gutter rhythms (24px/32px).
 */
export declare const PageBody: React.ForwardRefExoticComponent<PageBodyProps & React.RefAttributes<HTMLElement>>;
export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
    containerMaxWidth?: ContainerMaxWidth;
    children?: React.ReactNode;
}
/**
 * PageHeader renders a sticky top header bar with 64px height contract.
 */
export declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
export interface SubNavStripProps extends React.HTMLAttributes<HTMLDivElement> {
    containerMaxWidth?: ContainerMaxWidth;
    children?: React.ReactNode;
}
/**
 * SubNavStrip provides a 48px high secondary navigation band for back triggers,
 * breadcrumbs, and route metadata pills (Stitch Variant B).
 */
export declare const SubNavStrip: React.ForwardRefExoticComponent<SubNavStripProps & React.RefAttributes<HTMLDivElement>>;
export interface PageHeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode;
    containerMaxWidth?: ContainerMaxWidth;
}
/**
 * PageHero provides a standardized page title banner with subtitle and CTA action group.
 */
export declare const PageHero: React.ForwardRefExoticComponent<PageHeroProps & React.RefAttributes<HTMLElement>>;
export interface CardSlotProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
/**
 * CardSlot renders a standardized white wireframe or card container with
 * 12px border radius, elevation shadow, and responsive padding.
 */
export declare const CardSlot: React.ForwardRefExoticComponent<CardSlotProps & React.RefAttributes<HTMLDivElement>>;
export interface PageFooterProps extends React.HTMLAttributes<HTMLElement> {
    containerMaxWidth?: ContainerMaxWidth;
    children?: React.ReactNode;
}
/**
 * PageFooter provides an institutional footer pinned to the bottom of the viewport.
 */
export declare const PageFooter: React.ForwardRefExoticComponent<PageFooterProps & React.RefAttributes<HTMLElement>>;
