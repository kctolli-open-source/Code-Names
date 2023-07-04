import { randomElements } from '@/common/randomElements';
import { response } from '@/common/api/Response';
import { arrFilter } from '@/common/arrFilter';

import { words } from './words';

export const GET = async() => {
    const maxWords = 25;

    const selectedWords = randomElements(words, maxWords);
    const [assassin] = randomElements(selectedWords, 1);

    let newArray: string[] = arrFilter(selectedWords, assassin);
    const team0 = randomElements(newArray, 9);
    newArray = arrFilter(newArray, team0);
    const team1 = randomElements(newArray, 8);

    return response({
        words: selectedWords,
        assassin: assassin,
        teams: [team0, team1]
    });
}
