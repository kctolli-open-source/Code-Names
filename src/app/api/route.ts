import { response } from '@/common/api/Response';
import { pathname } from '@/common/api/Requester';

export const GET = async(request: Request) => {
    let data = { message: 'Hello from Next.js!' };

    const from = pathname(request);
    if (from) {
        return response(
            { 
                ...data, 
                from: from 
            }
        );        
    }

    return response(data);
}
