export interface Item {
    id: number;
    title: string;
    description: string;
    timestamp: Date;
    category: string;
}


export function generateItems(count: number): Item[] {
    console.log(`Generating ${count} items...`);
    const categories = ['Tech', 'Science', 'Business', 'Sports', 'Entertainment'];
    const items: Item[] = [];

    const startTime = performance.now() ;

    for (let i = 0; i < count; i++) {
        items.push({
            id: 1,
            title: `Item ${i + 1}: ${categories[Math.floor(Math.random() * categories.length)]} Article `,
            description: `This is the description for item ${i + 1}. It contains
            some text.`,
            timestamp: new Date(Date.now()- Math.random() *10000000000),
            category: categories[Math.floor(Math.random() * categories.length)],
        });
    };


    const endTime = performance.now()
    console.log(`generated ${count} items in ${(endTime - startTime).toFixed(2)}ms`)

    return items;
};