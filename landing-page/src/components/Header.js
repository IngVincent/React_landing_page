import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fontSize } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        fontFamily:"Nunito",
        background: 'none'
    },
    appbarTitle:{
        flexGrow: '1',
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto',
    },
    icon:{
        color:'#fff',
        fontSize:'2rem',
    },
    colorText: {
        color:'#5AFF3D'
    },
    container:{
        textAlign: 'center'
    },
    title:{
        color: "#fff",
        fontSize: "4.5rem",
    },
    goDown:{
        color:"#5AFF3D",
        fontSize: '4rem',
    }
    
}));
export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
                My<span className={classes.colorText}>Island.</span>
                </h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <div className={classes.container}>
           <h1 className={classes.title}>
               Welcome to <br />
               My<span className={classes.colorText}>Island.</span>
           </h1> 
           <IconButton>
            <ExpandMoreIcon className={classes.goDown}/>
           </IconButton>
        </div>
        </div>
    );
}