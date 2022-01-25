import React, {useContext} from "react";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import AppBar from "@mui/material/AppBar";
import './Header.css'
import Context from "../../context";

export const Header = () => {

    const state = useContext(Context)

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to={'/'}>
                    <h1 className={'title'}>Movies</h1>
                </Link>
            </Toolbar>
            <div>
                {state.isLoading &&
                    <LinearProgress style={{marginBottom: '-4px'}}/>}
            </div>
        </AppBar>
    )
}