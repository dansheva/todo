import React, {useContext} from "react";
import List from "@mui/material/List";
import Todo from "./Todo";
import Context from "../../context";
import {moviesApi} from "../../api";

export const HomePage = () => {

    const state = useContext(Context)

    React.useEffect(() => {
        state.setIsLoading(true)
        state.setError(null)
        moviesApi.fetchMovies()
            .then(res => {
                if (res.data.Response === 'True') {
                    if (res.data.Search) {
                        state.setMovies(res.data.Search)
                    }
                    state.setIsLoading(false)
                } else {
                    state.setError(res.data.Error ? res.data.Error : 'Error')
                    state.setIsLoading(false)
                }
            })
            .catch(err => {
                state.setError(err.toString())
                state.setMovies([])
                state.setIsLoading(false)
            })
    }, []) //added deps array

    const todosToRender = state.movies.map((todo) => (
        <Todo todo={todo} key={todo.imdbID}/>
    ))


    return (
        <div className="content">
            {state.movies.length > 0 && <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                aria-label="contacts">
                {todosToRender}
            </List>}
        </div>
    )
}