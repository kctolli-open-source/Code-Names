import { words } from '@/common/words';
import { randomElements } from '@/common/randomElements';
import { response } from '@/common/api/Response';

export const GET = async() => response(randomElements(words, 25));
