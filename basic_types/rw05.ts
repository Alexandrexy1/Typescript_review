export function sumNumbers(...args: Array<number>): number {

    return args.reduce((acc, value) => acc + value);
}


console.log(sumNumbers(5, 2, 10));
