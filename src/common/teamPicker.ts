import { randomElements } from '@/common/randomElements';

const [chosenTeam] = randomElements(['0', '1'], 1);

export const red: number = Number(chosenTeam);
export const blue: number = Number(!red);

export default {red, blue};
