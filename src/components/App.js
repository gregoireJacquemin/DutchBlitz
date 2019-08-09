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
                    <Grid item xs={2} style={{border: '1px solid', height: '420px', padding: '0px'}} container>
                           <Grid item xs={12}>
                                   <Button style={{
                                           backgroundColor: '#d0c3ce',
                                           width: '100%',
                                           height: '140px',
                                           border: '1px solid',
                                           borderColor: '#ff0000'
                                   }}>
                                           Reset
                                   </Button>
                           </Grid>
                            <Grid item xs={12}>
                                    <Button style={{
                                            backgroundColor: '#d0c3ce',
                                            width: '100%',
                                            height: '140px',
                                            border: '1px solid',
                                            borderColor: '#ff0000'
                                    }}>
                                            Deal cards
                                    </Button>
                            </Grid>
                            <Grid item xs={12}>
                                    <Button style={{
                                            backgroundColor: '#d0c3ce',
                                            width: '100%',
                                            height: '140px',
                                            border: '1px solid',
                                            borderColor: '#ff0000'
                                    }}>
                                            play/pause
                                    </Button>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} style={{height: '100%', padding: '0px'}}>
                            <Grid container spacing={1} style={{height: '100%', padding: '0px'}}>
                                    <Grid item xs={6} style={{border: '1px solid', padding: '0px'}}>
                                           <BotPanel/>
                                    </Grid>
                                    <Grid item xs={6} style={{border: '1px solid', padding: '0px'}}>
                                            <BotPanel/>
                                    </Grid>
                                    <Grid item xs={12} container justify={"space-evenly"} alignItems={"center"} style={{border: '1px solid'}}>
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
                                    <Grid item xs={6} style={{border: '1px solid', padding: '0px'}}>
                                            <PlayerPanel/>
                                    </Grid>
                                    <Grid item xs={6} style={{border: '1px solid', padding: '0px'}}>
                                            <BotPanel/>
                                    </Grid>
                            </Grid>
                    </Grid>
            </Grid>
        )}

export default App