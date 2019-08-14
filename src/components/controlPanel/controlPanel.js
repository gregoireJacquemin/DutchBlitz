import React from 'react';
import Grid from '@material-ui/core/Grid'
import Reset from "../../containers/reset";
import Deal from "../../containers/deal";
import Pause from "../../containers/pause"

const ControlPanel = () => {
    return (
        <Grid item xs={2} style={{border: '1px solid', height: '420px', padding: '0px', margin: '0px'}} container spacing={0}>
            <Grid item xs={12}>
                <Reset/>
            </Grid>
            <Grid item xs={12}>
                <Deal/>
            </Grid>
            <Grid item xs={12}>
                <Pause/>
            </Grid>
        </Grid>
)}

export default ControlPanel