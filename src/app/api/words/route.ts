import { response } from '@/app/api/response';
import ArrHelper from '@/common/arrHelper';

import words from './words';
import teams from './teams';

export const GET = async(): Promise<any> => {
    const maxWords: number = 25;

    const selectedWords: string[] = ArrHelper.randomElements(words, maxWords);
    const [assassin] = ArrHelper.randomElements(selectedWords, 1);
    const team = teams(selectedWords, assassin);

    return response({
        words: selectedWords,
        assassin: assassin,
        red: team.red,
        blue: team.blue
    });
}
