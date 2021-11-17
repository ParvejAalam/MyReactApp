import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({ 
    appBar: {
        height: "50px !important",
    },
    toolbar: {
        height: "50px !important",
        minHeight: 40,
        backgroundColor: "white",
        color: "black",
        border: "1px solid lightgray"
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        fontSize: "20px"
    },
}));
const  MenuBar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <p className={classes.title}>
              Task
             </p>
             <p>Home</p>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuBar;