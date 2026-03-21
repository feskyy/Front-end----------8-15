import { useState, useMemo, useCallback, useEffect } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { Item, generateItems } from '../utils/generateItems';


interface VirtualListProps {
    itemCount?: number;
    height?: number;
    itemHeight: number;
};


interface RowData {
    items: Item[];
    filter: string;
};


const Row = ({ index, style, data }: ListChildComponentProps<RowData>) => {
    const { items, filter } = data;
    const item = items[index];


    if (!item) return null;


    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}