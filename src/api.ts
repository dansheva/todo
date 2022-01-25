import axios from "axios";

const instance = axios.create({
    baseURL: `http://www.omdbapi.com`
})

type SearchMovieType = {
    Title: string
    imdbID: string
}

type SearchResponse = {
    Search?: SearchMovieType[]
    Error?: string
    Response: string
}

type GetMovieResponseType = {
    Title: string
    Year: string
    Released?: string
    Runtime?: string
    Genre?: string
    Director?: string
    Actors?: string
    Poster?: string
    Response: string
    Error?: string
}

export const moviesApi = {
    fetchMovies: () => {
        return instance.get<SearchResponse>(`?apikey=81c008ab&s=Batman`)
    },
    getMovie: (id: string) => {
        return instance.get<GetMovieResponseType>(`?apikey=81c008ab&i=${id}`)
    }
}