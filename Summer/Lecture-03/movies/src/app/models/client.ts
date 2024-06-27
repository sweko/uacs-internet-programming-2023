export interface Movie {
    id: number,
    title: string,
    year: number,
    director: string,
    genre: string[],
    plot: string,
    cast: Cast[],
    oscars: any, // temporarily, until we define the oscars interface
    rating: number
}

export interface Cast {
    actor: string,
    character: string
}