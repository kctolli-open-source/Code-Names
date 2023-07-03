export const arrFilter = (array: string[], remover: string | string[]): string[] => 
    array.filter((element: any) => !remover.includes(element));
