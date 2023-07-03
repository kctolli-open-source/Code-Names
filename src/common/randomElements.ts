export const randomElements = (array: string[], count: number): string[] => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
