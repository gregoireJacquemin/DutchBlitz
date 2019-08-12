import React from 'react';
import Grid from '@material-ui/core/Grid'
import Pile from "./pile/pile";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {card0} from './pile/card'

const PlayerPanel = (props) => {
    return(
        <Grid item xs={6} style={{border: '1px solid', padding: '0px', margin: '0px'}} container spacing={1}>
            <Grid item xs={12} style={{height: '70px'}}>
                de
            </Grid>
            <Grid item x={12} style={{height: '200px'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                <Pile card={props.state.woodPile[0]}/>
                <Pile card={props.state.leftPostPile[0]}/>
                <Pile card={props.state.middlePostPile[0]}/>
                <Pile card={props.state.rightPostPile[0]}/>
                <Pile card={props.state.blitzPile[0]}/>
            </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    console.log(state)
    return({
        state: state.playerData
    })}

PlayerPanel.defaultProps = {
    card: card0
}

export default connect(mapStateToProps,null) (PlayerPanel)