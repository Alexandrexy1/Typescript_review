export function sumNumbers(...args: Array<number>): number {
    return args.reduce((acc, value) => acc + value);
}

export function toUpperCaseArray(...args: string[]): string[] {
    return args.map(value => value.toUpperCase());
}

const result = sumNumbers(5, 2, 10);
const upperCaseResult = toUpperCaseArray('a', 'le', 'x');

console.log(result);
console.log(upperCaseResult);

