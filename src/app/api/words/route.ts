import { response } from '@/app/api/response';
import words from '@/common/words/words';

export const GET = async(): Promise<any> => response(words());
