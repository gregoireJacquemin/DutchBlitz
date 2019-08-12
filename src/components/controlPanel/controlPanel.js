import React from 'react';
import Grid from '@material-ui/core/Grid'
import Reset from "../../containers/reset";
import Deal from "../../containers/deal";
import Button from "@material-ui/core/Button";

const ControlPanel = () => {
    return (
        <Grid item xs={2} style={{border: '1px solid', height: '420px', padding: '0px'}} container spacing={0}>
            <Grid item xs={12}>
                <Reset/>
            </Grid>
            <Grid item xs={12}>
                <Deal/>
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
)}

export default ControlPanel