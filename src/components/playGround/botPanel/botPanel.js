import React from 'react';
import BotName from './botName/botName';
import Grid from '@material-ui/core/Grid'
import Pile from "../../../containers/pile";
import {card0} from "../../../containers/card";
import {connect} from "react-redux";

const BotPanel = props => {
    const nb = props.nb
    let XData
    let data
    let index
    if (nb === 1) {
        XData = props.state.bot1Data
        data = 'bot1Data'
        index = 0
    }
    if (nb === 2) {
        XData = props.state.bot2Data
        data = 'bot2Data'
        index = 1
    }
    if (nb === 3) {
        XData = props.state.bot3Data
        data = 'bot3Data'
        index = 2
    }
    return(
        <Grid item xs={6} style={{border: '1px solid', padding: '0px'}} container spacing={0}>
            <BotName data={data} index={index}/>
            <Grid item x={12} style={{height: '200px'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                <Pile card={XData.woodPile[0]} panel={'bot'} name={'wood'}/>
                <Pile card={XData.leftPostPile[XData.leftPostPile.length - 1]} panel={'bot'} name={'post'}/>
                <Pile card={XData.middlePostPile[XData.middlePostPile.length - 1]} panel={'bot'} name={'post'}/>
                <Pile card={XData.rightPostPile[XData.rightPostPile.length - 1]} panel={'bot'} name={'post'}/>
                <Pile card={XData.blitzPile[XData.blitzPile.length - 1]} panel={'bot'} name={'blitz'}/>
            </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    return({
        state: state
    })}

export default connect(mapStateToProps,null) (BotPanel)