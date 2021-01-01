import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            color: '#4F4F4F',
            fontSize: 30,
            fontFamily: 'Poppins',
            marginBottom: 20,
        },
    }),
);

export default function ToolBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar>
                <Typography className={classes.title}>Inputs</Typography>
            </Toolbar>
        </div>
    );
}