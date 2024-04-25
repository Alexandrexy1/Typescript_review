type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...args: number[]): number; 
};

interface Add {
    (x: number): number;
    (x: number, y: number): number;
}


const add: Adder = (x: number, y?: number, ...args: number[]): number => {
    if (args.length > 0) return args.reduce((count, value) => count + value) + x + (y || 0); 
    return x + (y || 0);
};

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 3, 5, 6, 7, 9));


const addTwo: Add = (x: number, y?: number): number => x + (y || 0);

console.log(addTwo(1));
console.log(addTwo(1, 2));