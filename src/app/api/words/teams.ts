import ArrHelper from '@/common/arrHelper';

export default function teamarr (selectedWords: string[], assassin: string) {
    const teamRandomizer = () => {
        const team: string[] = ['0', '1'];
        const [chosenTeam] = ArrHelper.randomElements(team, 1);
        const red: number = Number(chosenTeam);
        return { red: red, blue: Number(!red) };
    }

    let newArray: string[] = ArrHelper.arrFilter(selectedWords, assassin);
    const team0: string[] = ArrHelper.randomElements(newArray, 9);
    newArray = ArrHelper.arrFilter(newArray, team0);
    const team1: string[] = ArrHelper.randomElements(newArray, 8);

    const teamarr: string[][] = [team0, team1];

    let red = teamarr[teamRandomizer().red];
    let blue = teamarr[teamRandomizer().blue];

    if (red.length == blue.length) {
        red = team0;
        blue = team1;
    }

    return { red, blue };
}
