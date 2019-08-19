import Grid from "@material-ui/core/Grid";
import BotPanel from "./botPanel/botPanel";
import DutchPanel from './dutchPanel'
import PlayerPanel from "./playerPanel/playerPanel";
import React from "react";

const PlayGround = () => {
    return(
        <Grid item xs={10} style={{height: '100%', padding: '0px', margin: '0px'}} container spacing={1}>
            <BotPanel nb={1}/>
            <BotPanel nb={2}/>
            <DutchPanel/>
            <PlayerPanel/>
            <BotPanel nb={3}/>
        </Grid>
    )}

export default PlayGround