import { words } from '@/common/words';
import { randomElements } from '@/common/randomElements';
import { arrFilter } from '@/common/arrFilter';

export const elements: string[] = randomElements(words, 25);
export const [assassin] = randomElements(elements, 1);

let newArray: string[] = arrFilter(elements, assassin);
const team0 = randomElements(newArray, 9);
newArray = arrFilter(newArray, team0);
const team1 = randomElements(newArray, 8);

export const teams: string[][] = [team0, team1];
