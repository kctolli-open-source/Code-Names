const scrambleElements = (array: string[]): string[] => {
    const count = array.length;
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const randomElements = (array: string[], count: number): string[] => {
    const newArray = scrambleElements(array);
    const shuffled = newArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
