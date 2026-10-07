import { default as React } from 'react';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline';
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
}
export declare const Avatar: React.FC<AvatarProps>;
