import Grid from "@material-ui/core/Grid";
import BotPanel from "./botPanel/botPanel";
import DutchPanel from './dutchPanel'
import PlayerPanel from "./playerPanel";
import React from "react";

const PlayGround = () => {
    return(
        <Grid item xs={10} style={{height: '100%', padding: '0px'}} container spacing={1}>
            <BotPanel/>
            <BotPanel/>
            <DutchPanel/>
            <PlayerPanel/>
            <BotPanel/>
        </Grid>
    )}

export default PlayGround