import { XML } from "./xml.ts";

export class XMLList extends Array<XML>
{
    public getTag(): string {
        return this[0].getTag();
    }

    public at(index: number){
        return this[index];
    }

    public empty() {
        return this.length === 0;
    }


    public toString(): string;
    /**
     * @internal
     */
    public toString(level: number): string;
    public toString(level: number = 0): string {
        let ret: string = "";
        for (let xml of this)
            ret += xml.toString(level) + "\n";

        return ret;
    }
}
