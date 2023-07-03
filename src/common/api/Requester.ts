/** 
 * Example URL Return obj
 * URL {
 *   href: 'http://localhost:3000/api',
 *   origin: 'http://localhost:3000',
 *   protocol: 'http:',
 *   username: '',
 *   password: '',
 *   host: 'localhost:3000',
 *   hostname: 'localhost',
 *   port: '3000',
 *   pathname: '/api',
 *   search: '',
 *   searchParams: URLSearchParams {},
 *   hash: ''
 * }
 */

export const Requester = (request: Request) => new URL(request.url);

export const searchParams = (request: Request) => {
    const { searchParams } = Requester(request);
    return searchParams;
}

export const pathname = (request: Request) => {
    const { pathname } = Requester(request);
    return pathname;
}
