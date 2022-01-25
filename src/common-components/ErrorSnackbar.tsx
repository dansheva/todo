import React, {useContext} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Context from "../context";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {

    const state = useContext(Context)

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        state.setError(null)
    };

    return (
        <Snackbar open={state.error !== null} autoHideDuration={6000}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {state.error}
            </Alert>
        </Snackbar>
    );
}
