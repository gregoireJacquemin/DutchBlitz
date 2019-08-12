import React from 'react';
import Grid from '@material-ui/core/Grid'
import ControlPanel from './controlPanel/controlPanel'
import PlayGround from "./playGround/playGround";

const App = () => {
        return(
            <Grid container spacing={0}>
                <ControlPanel/>
                <PlayGround/>
            </Grid>
        )}

export default App