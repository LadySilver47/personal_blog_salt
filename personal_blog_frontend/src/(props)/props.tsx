export interface PageButtonProps{
    first?: boolean;
    last?: boolean;
    searchParams?: {page?: string};
}

export interface BlogProps{
    id?: string;
    title?: string;
    body?: string;
    keywords?: string[];
    date?: string;
}