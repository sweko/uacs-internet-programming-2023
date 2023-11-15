export interface ApiAuthor {
    id: number;
    name: string;
    birth_date: string;
    death_date?: string;
    nationality: string;
    bibliography: {
        name: string;
        year: number;
        type: string;
    }[];
}