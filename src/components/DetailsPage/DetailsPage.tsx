import React, {useContext, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Context from "../../context";
import './Details.css'
import {moviesApi} from "../../api";

export const DetailsPage = () => {

    const params = useParams();
    const state = useContext(Context)
    const navigate = useNavigate()


    useEffect(() => {
        state.setIsLoading(true)
        state.setError(null)
        if (params.movieId) {
            moviesApi.getMovie(params.movieId)
                .then(res => {
                    if (res.data.Response === 'True') {
                        const data = {
                            Title: res.data.Title,
                            Year: res.data.Year,
                            Released: res.data.Released,
                            Runtime: res.data.Runtime,
                            Genre: res.data.Genre,
                            Director: res.data.Director,
                            Actors: res.data.Actors,
                            Poster: res.data.Poster,
                        }
                        state.setDetails(data)
                        state.setIsLoading(false)
                    } else {
                        if (res.data.Error === 'Incorrect IMDb ID.') {
                            navigate('not-found')
                            state.setIsLoading(false)
                        } else {
                            state.setError(res.data.Error ? res.data.Error : 'Err')
                            state.setIsLoading(false)
                        }
                    }
                })
                .catch(err => {
                    state.setIsLoading(err.toString())
                    state.setIsLoading(false)
                })
        }

        return () => {
            state.setDetails(null)
        }

    }, [])

    const movie = state.details

    return (
        movie
            ? <div className={'movieCard'}>
                <div className={'details'}>
                    <div className={'movie_title'}>
                        <h2>{movie.Title}</h2>
                    </div>
                    <div className={'detailsRow'}>
                        <div>Year:</div>
                        <div>{movie.Year}</div>
                    </div>
                    <div className={'detailsRow'}>
                        <div>Genre:</div>
                        <div>{movie.Genre}</div>
                    </div>
                    <div className={'detailsRow'}>
                        <div>Actors:</div>
                        <div>{movie.Actors}</div>
                    </div>
                    <div className={'detailsRow'}>
                        <div>Director:</div>
                        <div>{movie.Director}</div>
                    </div>
                    <div className={'detailsRow'}>
                        <div>Released:</div>
                        <div>{movie.Released}</div>
                    </div>
                    <div className={'detailsRow'}>
                        <div>Runtime:</div>
                        <div>{movie.Runtime}</div>
                    </div>
                </div>
            </div>
            : null
    )
}