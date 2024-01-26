type CallbackFn = (item: string) => string; // function type


export function stringUppercase(msg: string, callbackFn: CallbackFn): string {
    return callbackFn(msg);
}


const msg = stringUppercase('hello, world!', item => item.toUpperCase());
console.log(msg);