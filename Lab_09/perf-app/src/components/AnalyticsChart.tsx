import { useMemo } from 'react';

interface AnalyticsChartProps {
    items: string[];
};


function calculateAnalytics(items: string[]): number {
    console.log('Calculating analytics...')
    const start = performance.now()

    let result = 0
    for (let i = 0; i < 10000000; i++) {
        result += Math.sqrt(i)
    };


    const end = performance.now() 
    console.log(`Calculation took ${(end - start).toFixed(2)}ms`)
    return result + items.length
};


export function AnalyticsChart({ items }: AnalyticsChartProps) {
    const analytics = useMemo(() => calculateAnalytics(items), [items])

    console.log('AnalyticsChart render')
    return (
        <div style = {{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '4px'}}>
            <h3>Analytics</h3>
            <p>Calculated value: {analytics}</p>
            <p>Items: {items.length}</p>
        </div>
    );
};