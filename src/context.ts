import React from "react";

export type Movie = {
    Title: string
    imdbID: string
}

export type Details = {
    Title: string
    Year: string
    Released?: string
    Runtime?: string
    Genre?: string
    Director?: string
    Actors?: string
    Poster?: string
}

export type State = {
    movies: Movie[]
    setMovies: (movies: Movie[]) => void
    details: Details | null
    setDetails: (details: Details | null) => void
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
    error: string | null
    setError: (error: string | null) => void
}

const initialState: State = {
    movies: [],
    setMovies: movies => {},
    details: null,
    setDetails: details => {},
    isLoading: false,
    setIsLoading: isLoading => {},
    error: null,
    setError: error => {}
}

const Context = React.createContext(initialState)

export default Context