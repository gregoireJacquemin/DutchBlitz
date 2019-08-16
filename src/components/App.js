import React from 'react';
import Grid from '@material-ui/core/Grid'
import ControlPanel from './controlPanel/controlPanel'
import PlayGround from "./playGround/playGround";
import {connect} from 'react-redux'
import Blitz from "./blitz";

const App = props => {

    return (
        <Grid container spacing={0}>
            <ControlPanel/>
            <PlayGround/>
            <Blitz {...props}/>
        </Grid>
    )
}

const mapStateToProps = state => {
    return({
        blitz: state.blitz,
        playerData: state.playerData,
        bot1Data: state.bot1Data,
        bot2Data: state.bot2Data,
        bot3Data: state.bot3Data
    })
}

export default connect(mapStateToProps,null) (App)