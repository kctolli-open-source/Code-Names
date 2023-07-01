import { words } from '@/common/words';
import { randomElements } from '@/common/randomElements';

const arrFilter = (array: string[], remover: string | string[]) => (
    array.filter((element: any) => !remover.includes(element))
);

export const elements = randomElements(words, 25);
export const [assassin] = randomElements(elements, 1);

let newArray = arrFilter(elements, assassin);

const team0 = randomElements(newArray, 9);

newArray = arrFilter(newArray, team0);

const team1 = randomElements(newArray, 8);

export const teams = [team0, team1];
