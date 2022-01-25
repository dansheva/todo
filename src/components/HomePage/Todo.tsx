import React from "react";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Movie} from "../../context";
import {Link} from "react-router-dom";

type Props = {
    todo: Movie
}

const Todo = React.memo((props: Props) => {
    return (
        <Link to={`details/${props.todo.imdbID}`}>
            <ListItem disablePadding key={props.todo.imdbID}>
                <ListItemButton>
                    <ListItemText primary={`${props.todo.Title}`}/>
                </ListItemButton>
            </ListItem>
        </Link>
    )
})

export default Todo;
