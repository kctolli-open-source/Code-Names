import ArrHelper from '@/common/arrHelper';

import wordslist from './wordslist';
import teams from './teams';

export default function words() {
    const maxWords: number = 25;

    const selectedWords: string[] = ArrHelper.randomElements(wordslist, maxWords);
    const [assassin] = ArrHelper.randomElements(selectedWords, 1);
    const team = teams(selectedWords, assassin);

    return {
        words: selectedWords,
        assassin: assassin,
        red: team.red,
        blue: team.blue,
    };
}
