import { randomElements } from '@/common/randomElements';

const teams = [0, 1];

export const [red] = randomElements(teams, 1);
export const blue = Number(!red);
