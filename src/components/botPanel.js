import React from 'react';
import Item from './item';
import Grid from '@material-ui/core/Grid'
import Pile from "./piles";

const BotPanel = () => {
    return(
        <Grid container spacing={0} style={{padding: '0px'}}>
            <Grid item xs={12} style={{height: '70px', padding: '0px'}} container spacing={0}>
                <Grid item xs={4} style={{padding: '0px'}}>
                    <Item/>
                </Grid>
                <Grid item xs={8}>
                    <Item/>
                </Grid>
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

    export default BotPanel