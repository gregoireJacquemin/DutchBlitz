import React from 'react';
import Item from './item';
import Grid from '@material-ui/core/Grid'
import Pile from "../pile/pile";
import {card0} from "../pile/card";
import {connect} from "react-redux";

const BotPanel = (props) => {
    return(
        <Grid item xs={6} style={{border: '1px solid', padding: '0px'}} container spacing={0}>
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
                        <Pile card={props.state.rightPostPile[0]}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    return({
        state: state.bot1Data
    })}

BotPanel.defaultProps = {
    card: card0
}

export default connect(mapStateToProps,null) (BotPanel)