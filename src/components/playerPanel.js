import React from 'react';
import Grid from '@material-ui/core/Grid'
import Pile from "./piles";

const PlayerPanel = () => {
    return(
        <Grid container spacing={1}>
            <Grid item xs={12} style={{height: '70px'}}>
                de
            </Grid>
            <Grid item x={12} style={{height: '200px'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                {[0,1,2,3,4].map(value => (
                    <Grid key={value} item xs={2}>
                        <Pile/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )}

export default PlayerPanel