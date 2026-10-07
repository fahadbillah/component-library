import { default as React } from 'react';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline';
export type AvatarVariant = 'tint' | 'solid';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    name?: string;
    initials?: string;
    size?: AvatarSize;
    variant?: AvatarVariant;
    status?: AvatarStatus;
}
export declare const Avatar: React.FC<AvatarProps>;
