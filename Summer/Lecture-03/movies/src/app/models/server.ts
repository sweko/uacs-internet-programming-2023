export interface MovieResponse {
  id: number,
  title: string,
  year: number,
  director: string,
  genre: string[],
  plot: string,
  cast: CastResponse[],
  oscars: any, // temporarily, until we define the oscars interface
  rating: number
}

export interface CastResponse {
    actor: string,
    character: string
}