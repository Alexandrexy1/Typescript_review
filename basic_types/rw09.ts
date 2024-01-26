export function sumOrConcat(x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') return x + y;
    return `${x}${y}`;
}

