export class Writer {
    protected _tool: Tool | null = null;

    constructor(private readonly name: string) {}

    write() {
        if (this._tool === null) {
            console.log(`${this.name} can't write without a tool.`)
            return;
        }
        this._tool.write();
    }

    set tool(tool: Tool | null) {
        this._tool = tool;
    }

}


export abstract class Tool {
    constructor(protected readonly name: string) {}

    abstract write(): void;
}

export class Pen extends Tool {
    write(): void {
        console.log(`${this.name} is writing...`)
    }
}

const writer = new Writer("Alex");
const pen = new Pen("BIC");
writer.write();
// output: Alex can't write without a tool.
pen.write();
// output: BIC is writing...
writer.tool = pen;
writer.write();
// output: BIC is writing...
