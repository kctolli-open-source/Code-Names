export default class ArrHelper {
    public constructor () {}

    public static scrambleElements = (array: string[]): string[] => {
        const count = array.length;
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    public static randomElements = (array: string[], count: number): string[] => {
        const newArray = this.scrambleElements(array);
        const shuffled = newArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    public static arrFilter = (array: string[], remover: string | string[]): string[] => 
        array.filter((element: any) => !remover.includes(element));
}