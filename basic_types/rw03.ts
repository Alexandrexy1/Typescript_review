export function withoutReturn(...args: string[]): string {
    return args.join("");
}

export const fruits = withoutReturn("banana", "apple", "potato");
console.log(typeof fruits);
