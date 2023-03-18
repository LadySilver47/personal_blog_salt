import { RefObject } from "react";

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

export interface BlogFormProps{
    titleRef?: RefObject<HTMLInputElement>;
    bodyRef?: RefObject<HTMLTextAreaElement>;
    tagsRef?: RefObject<HTMLInputElement>;
    id?: string;
    title?: string;
    body?: string;
    keywords?: string[];
    changeForm: (event: React.ChangeEvent) => void;
    addBlogPost: (event: React.FormEvent) => Promise<void>;
}