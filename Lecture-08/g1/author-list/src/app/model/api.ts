export interface AuthorApi {
    id: number;
    name: string;
    birth_date: string;
    death_date?: string;
    nationality: string;
    bibliography: BibliographyApi[];
}

export interface BibliographyApi {
    name: string;
    year: number;
    type: string;
}