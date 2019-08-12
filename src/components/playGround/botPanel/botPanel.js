import React from 'react';
import BotName from './botName';
import Grid from '@material-ui/core/Grid'
import Pile from "../../../containers/pile";
import {card0} from "../../../containers/card";
import {connect} from "react-redux";

const BotPanel = props => {
    const nb = props.nb
    let XData
    if (nb === 1) XData = props.state.bot1Data
    if (nb === 2) XData = props.state.bot2Data
    if (nb === 3) XData = props.state.bot3Data
    return(
        <Grid item xs={6} style={{border: '1px solid', padding: '0px'}} container spacing={0}>
            <BotName/>
            <Grid item x={12} style={{height: '200px'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                <Pile card={XData.woodPile[0]}/>
                <Pile card={XData.leftPostPile[0]}/>
                <Pile card={XData.middlePostPile[0]}/>
                <Pile card={XData.rightPostPile[0]}/>
                <Pile card={XData.blitzPile[0]}/>
            </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    return({
        state: state
    })}

BotPanel.defaultProps = {
    card: card0
}

export default connect(mapStateToProps,null) (BotPanel)