import { Cast, Movie } from "./client";
import { CastResponse, MovieResponse } from "./server";

export const toMovie = (movieResponse: MovieResponse): Movie => {
    return {
        id: movieResponse.id,
        title: movieResponse.title,
        year: movieResponse.year,
        director: movieResponse.director,
        genre: movieResponse.genre,
        plot: movieResponse.plot,
        cast: movieResponse.cast.map(toCast),
        oscars: movieResponse.oscars,
        rating: movieResponse.rating
    }
};

export const toCast = (castResponse: CastResponse): Cast => {
    return {
        actor: castResponse.actor,
        character: castResponse.character
    }
};

export const fromMovie = (movie: Movie): MovieResponse => {
    return {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        director: movie.director,
        genre: movie.genre,
        plot: movie.plot,
        cast: movie.cast.map(fromCast),
        oscars: movie.oscars,
        rating: movie.rating
    }
};

export const fromCast = (cast: Cast): CastResponse => {
    return {
        actor: cast.actor,
        character: cast.character
    }
};