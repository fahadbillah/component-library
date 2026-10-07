import { default as React } from 'react';
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    containerClassName?: string;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    isHoverable?: boolean;
}
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    align?: 'left' | 'center' | 'right';
}
export declare const TableHead: React.ForwardRefExoticComponent<TableHeadProps & React.RefAttributes<HTMLTableCellElement>>;
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    align?: 'left' | 'center' | 'right';
    isNumeric?: boolean;
}
export declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
