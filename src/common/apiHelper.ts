const isDev = process.env.NODE_ENV === 'development';

export default class ApiHelper {
    private requester: URL;

    public constructor(request: Request) {
        this.requester = new URL(request.url);
    }

    public getRequester = (): URL => this.requester;
    public searchParams = (): URLSearchParams => this.requester.searchParams;
    public pathname     = (): string => this.requester.pathname;
    public hostname     = (): string => this.requester.hostname;
    public host         = (): string => this.requester.host;
    public href         = (): string => this.requester.href;

    public static route = (): string => 
        (isDev ? 'http://localhost:3000': 'https://code-names-kctolli.vercel.app/');

    public static router = (endpoint: string): string => 
        (`${this.route()}/api/${endpoint}`);
}
