import React from 'react';
import Item from './item';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import BotPanel from "./botPanel";
import PlayerPanel from "./playerPanel";
import Pile from "./piles";

const App = () => {
        return(
            <Grid container spacing={0}>
                    <Grid item xs={2}/>
                    <Grid item xs={10}>
                            <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                           <BotPanel/>
                                    </Grid>
                                    <Grid item xs={6}>
                                            <BotPanel/>
                                    </Grid>
                                    <Grid item xs={12} container justify={"space-evenly"} alignItems={"center"}>
                                            <Grid item xs={12}  container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                                                    {[0,1,2,3,4,5,6,7].map(value => (
                                                        <Grid key={value} item xs={1}>
                                                                <Pile/>
                                                        </Grid>
                                                    ))}
                                            </Grid>
                                            <Grid item xs={12}  container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                                                    {[0,1,2,3,4,5,6,7].map(value => (
                                                        <Grid key={value} item xs={1}>
                                                                <Pile/>
                                                        </Grid>
                                                    ))}
                                            </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                            <PlayerPanel/>
                                    </Grid>
                                    <Grid item xs={6}>
                                            <BotPanel/>
                                    </Grid>
                            </Grid>
                    </Grid>
            </Grid>
        )}

export default App