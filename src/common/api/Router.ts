export default function Router() {
    let link: string = 'https://code-names-kctolli.vercel.app/';
    if (process.env.NODE_ENV == 'development') {
        link = 'http://localhost:3000';
    }

    return link;
}
