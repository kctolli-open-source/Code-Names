import { randomElements } from '@/common/randomElements';
import { response } from '@/common/api/Response';

export const GET = async() => {
    const teams: string[] = ['0', '1'];
    const [chosenTeam] = randomElements(teams, 1);

    const red: number = Number(chosenTeam);
    const blue: number = Number(!red);

    return response({red, blue});
}
