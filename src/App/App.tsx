import React from 'react';
import './App.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonAppBar from '../components/TopBar';
import {Grid, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Calendario2 from '../components/Calendario/Segundo/Calendar2.js';
import ProximosEventos from '../components/Calendario/ProximosEventos.js';
import CheckboxListSecondary from '../components/ListaCategorias/CheckBoxList.js';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      //height: '100vh',
      margin: "auto",
      //margin: theme.spacing(1),
    },
    paper: {
      color: '#000',
      flexGrow: 1,
      minHeight: "5vh",
      padding: "10px",

    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
      padding: "1vh",
      minHeight: "5vh",
      color: "rgba(0, 0, 0, 0.87)"
    },
    calendar: {
      flexGrow: 1,
      padding: "1vh",
      minHeight: "5vh",
      color: "rgba(0, 0, 0, 0.87)"
    },
    container: {
      padding: "10px",
    }
  }),
);


function App(): React.ReactNode {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <ButtonAppBar/>
      <br></br>
      <Grid container spacing={2} justify="space-around" alignItems = "flex-start" direction = "row" className={classes.container}>
        <Grid item sm={4}>
          <Grid container spacing={3} justify="center" alignItems="center" direction = "column">
            <Grid item sm={12} spacing={3} justify="space-around">
              <Paper className={classes.paper} elevation={3} >
                <Typography variant="h6" className={classes.title}>
                  Proximos Eventos
                </Typography>
                <ProximosEventos />
              </Paper>
              <br></br>
              <br></br>
              <Paper className={classes.paper} elevation={3} >
                <Typography variant="h6" className={classes.title}>
                  Filtro de Eventos
                </Typography>
                <CheckboxListSecondary />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <Grid container spacing={2} justify="space-between" alignItems = "baseline" direction = "column">
            <Grid item sm={12}>
              <Paper className={classes.paper} elevation={3} >
                <Calendario2/>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </>
  );
  
}
  

export default App;
