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

export interface FormProps{
    id?: string;
    title?: string;
    body?: string;
    keywords?: string[];
}