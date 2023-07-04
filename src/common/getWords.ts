import axios from 'axios';
import Router from '@/common/api/Router';

export const getWords = async(): Promise<string[]> => {
    try {
        const response = await axios.get<string[]>(`${Router()}/api/words`);
        return response.data;
    } catch (error) {
        console.error('Error fetching words: ', error);
        return [];
    }
}
