import React, {useState} from "react";
import Context, {Details, Movie, State} from "../context";
import {ErrorSnackbar} from "../common-components/ErrorSnackbar";
import {Header} from "../common-components/Header/Header";
import './App.css'
import {HomePage} from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import {DetailsPage} from "./DetailsPage/DetailsPage";
import { NotFound } from "./NotFound/NotFound";

function App() {

    const [movies, setMovies] = useState<Movie[]>([])
    const [details, setDetails] = useState<Details | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const state: State = {
        movies,
        setMovies,
        details: details,
        setDetails: setDetails,
        isLoading,
        setIsLoading,
        error,
        setError
    }

    return (
        <Context.Provider value={state}>
            <ErrorSnackbar/>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/details/:movieId'} element={<DetailsPage/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Context.Provider>
    );
}

export default App;