import React from "react";
import './NotFound.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const NotFound = () => {

    let navigate = useNavigate();

    return (
       <div className={'not_found_container'}>
           <div className={'title_container'}>
               <h1 className={'not_found_title'}>404 - Page not found</h1>
               <Button variant="outlined" onClick={() => {navigate('/')}}>Go Home</Button>
           </div>
       </div>
    )
}